import { ChangeEvent, useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo.svg";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./Header.scss";
import { ProductsContext } from "../../../contexts/ProductsContext";
import cart from '../../../assets/cart.svg';
import { goToCategoryPage, goToHomePage } from "../../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { data } = useContext(ProductsContext);
  const navigate = useNavigate()


  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value)
  }

  useEffect(() => {
    if(selectedCategory) {
      goToCategoryPage(navigate, selectedCategory)
    }
  }, [selectedCategory, navigate])

  const handleGoToHomepage = () => {
    goToHomePage(navigate)
    setSelectedCategory('')
  }
  return (
    <header>
      <div className="logo-container" onClick={() => handleGoToHomepage()}>
        <img src={logo} alt="Store logo" />
        <h1>Fake API Store</h1>
      </div>
      <nav>
        <ul>
          <li>
            <select value={selectedCategory} onChange={(e) => handleCategoryChange(e)}>
              <option value="" defaultValue="">
                Categories
              </option>
              {data && data.states && data.states.categories && (
                data?.states?.categories.map(
                  (category: string, index: number) => {
                    return <option key={index}>{category}</option>;
                  }
                )
              )}
            </select>
          </li>
          <li>Most Wanted</li>
        </ul>
      </nav>
      <SearchInput />
      <div className="cart-container">
        <img src={cart} alt="" />
      </div>
    </header>
  );
};

export default Header;
