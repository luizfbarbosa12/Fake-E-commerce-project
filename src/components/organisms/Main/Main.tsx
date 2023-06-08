import { useContext } from "react";
import "./Main.scss";
import Card from "../../molecules/Card/Card";
import { ProductsContext } from "../../../contexts/ProductsContext";
import ClipLoader from "react-spinners/ClipLoader";
import { ProductObjectType } from "../../../contexts/Products.types";
import CardsContainer from "../../molecules/CardsContainer";

const Main = () => {
  const { data } = useContext(ProductsContext);

  return (
    <div className="main-wrapper ">
      <h2>Featured products</h2>
      <CardsContainer>
        {data && data.states && data.states?.products ? (
          data.states?.products.map((product: ProductObjectType) => {
            return <Card key={product.id} product={product} />;
          })
        ) : (
          <ClipLoader size={40} color={"#FBAE84"} loading />
        )}
      </CardsContainer>
    </div>
  );
};

export default Main;
