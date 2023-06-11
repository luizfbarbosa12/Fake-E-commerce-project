import { ChangeEvent, useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

type CategorySelectProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategorySelect = ({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectProps) => {

 const { data } = useContext(ProductsContext);
 const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <select
      className="header-select"
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e)}
    >
      <option className="header-select" value="" defaultValue="">
        Categories
      </option>
      {data &&
        data?.states &&
        data?.states?.categories &&
        data?.states?.categories.map((category: string, index: number) => {
          return <option key={index}>{category}</option>;
        })}
    </select>
  );
};

export default CategorySelect;
