import { useContext } from "react";
import logo from "../../../assets/logo.svg";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./Header.scss";
import { ProductsContext } from "../../../contexts/ProductsContext";

const Header = () => {
  const {data} = useContext(ProductsContext)

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
              <option value="" defaultValue=''>
                Categories
              </option>
              {data?.states?.categories.map((category: string, index: number) => {
                return <option key={index}>{category}</option>
              })}
            </select>
          </li>
          <li>Most Wanted</li>
        </ul>
      </nav>
      <SearchInput/>
    </header>
  );
};

export default Header;
