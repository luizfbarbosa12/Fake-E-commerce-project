import { useState } from "react";
import "./Main.scss";
import Card from "../../molecules/Card/Card";

const Main = () => {
  const [products, setProducts] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="wrapper">
      <h2>Featured products</h2>
      <div className="cards-container">
        {products.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
};

export default Main;
