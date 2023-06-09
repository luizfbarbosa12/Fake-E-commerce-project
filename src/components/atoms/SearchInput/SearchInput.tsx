import { useContext, useEffect, useState } from "react";
import search from "../../../assets/search.svg";
import "./SearchInput.scss";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { ProductObjectType } from "../../../contexts/Products.types";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useContext(ProductsContext);
  console.log(data?.states?.products);
  // Filtered products based on search query
  const handleSearchQueryChange = (value: string) => {
    setSearchQuery(value);
    filterProducts(value);
  };

  const filterProducts = (query: string) => {
    const filteredProducts = data?.states?.products?.filter(
      (product: ProductObjectType) => {
        return product.title?.toLowerCase().includes(query.toLowerCase());
      }
    );
    if (data?.setters?.setProducts)
      data?.setters?.setProducts(filteredProducts || []);
  };

  useEffect(() => {
    filterProducts(searchQuery);
  }, [searchQuery]);

  return (
    <div className="search-field">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
      />
      <img className="search-icon" src={search} alt="search icon" />
    </div>
  );
};

export default SearchInput;
