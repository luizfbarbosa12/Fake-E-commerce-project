import { useContext } from "react";
import logo from "../../../assets/logo.svg";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./Header.scss";
import { ProductsContext } from "../../../contexts/ProductsContext";
import ClipLoader from "react-spinners/ClipLoader";
import cart from '../../../assets/cart.svg';

const Header = () => {
  const { data } = useContext(ProductsContext);

  console.log(data?.states?.categories);
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Store logo" />
        <h1>Fake API Store</h1>
      </div>
      <nav>
        <ul>
          <li>
            <select>
              <option value="" defaultValue="">
                Categories
              </option>
              {data && data.states && data.states.categories ? (
                data?.states?.categories.map(
                  (category: string, index: number) => {
                    return <option key={index}>{category}</option>;
                  }
                )
              ) : (
                <ClipLoader size={150} color={"#FBAE84"} loading />
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
