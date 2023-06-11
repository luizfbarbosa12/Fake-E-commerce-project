import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import cart from '../../../assets/cart.svg';
import "./Header.scss";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import CategorySelect from "../../atoms/CategorySelect/CategorySelect";
import { goToCartPage, goToCategoryPage, goToHomePage } from "../../../Router/coordinator";


const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if(selectedCategory) {
      goToCategoryPage(navigate, selectedCategory)
    }
  }, [selectedCategory, navigate])

  const handleGoToHomepage = () => {
    goToHomePage(navigate)
    setSelectedCategory('')
  }

  const handleGoToCartPage = () => {
    setSelectedCategory('')
    goToCartPage(navigate)
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
            <CategorySelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </li>
          <li>Most Wanted</li>
        </ul>
      </nav>
      <SearchInput />
      <div onClick={() => handleGoToCartPage()} className="cart-container">
        <img src={cart} alt="cart icon" />
      </div>
    </header>
  );
};

export default Header;
