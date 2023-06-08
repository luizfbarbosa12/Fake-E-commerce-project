import { useContext, useState } from "react";
import "./Main.scss";
import Card from "../../molecules/Card/Card";
import { ProductsContext } from "../../../contexts/ProductsContext";

const Main = () => {
  const {data} = useContext(ProductsContext)
  console.log(data?.states?.products)

  return (
    <div className="wrapper">
      <h2>Featured products</h2>
      <div className="cards-container">
      </div>
    </div>
  );
};

export default Main;
