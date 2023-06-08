import { useContext } from "react";
import "./Main.scss";
import Card from "../../molecules/Card/Card";
import { ProductsContext } from "../../../contexts/ProductsContext";
import ClipLoader from "react-spinners/ClipLoader";
import { ProductObjectType } from "../../../contexts/Products.types";

const Main = () => {
  const { data } = useContext(ProductsContext);

  return (
    <div className="wrapper">
      <h2>Featured products</h2>
      <div className="cards-container">
        {data && data.states && data.states?.products ? (
          data.states?.products.map((product: ProductObjectType) => {
            return <Card key={product.id} product={product} />;
          })
        ) : (
          <ClipLoader size={40} color={"#FBAE84"} loading />
        )}
      </div>
    </div>
  );
};

export default Main;
