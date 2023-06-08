import search from '../../../assets/search.svg'
import './SearchInput.scss'

const SearchInput = () => {
  return (
    <div className="search-field">
      <input
        className="search-input"
        type="search"
        name=""
        id=""
        placeholder="Search"
      />
      <img className="search-icon" src={search} alt="search icon" />
    </div>
  );
};

export default SearchInput;
