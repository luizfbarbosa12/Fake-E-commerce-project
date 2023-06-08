import logo from "../../../assets/logo.svg";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./Header.scss";

const Header = () => {
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
              <option value="" disabled selected>
                Departments
              </option>
              <option>Departments</option>
              <option>Departments</option>
              <option>Departments</option>
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
