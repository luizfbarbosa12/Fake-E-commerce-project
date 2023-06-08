import "./card.scss";
import RightArrow from "../../../assets/right-arrow.svg";
import AddToCartBtn from "../../atoms/AddToCartBtn/AddToCartBtn";
import { ProductObjectType } from "../../../contexts/Products.types";
import { goToProductDetails } from "../../../Router/coordinator";
import { useNavigate } from "react-router-dom";

interface CardProps {
  product: ProductObjectType;
}
const Card = ({ product }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      <div className="image-overlay">
        <img
          className="product-image"
          src={product.image}
          alt="product image"
        />
      </div>
      <p
        className="see-details"
        onClick={() => goToProductDetails(navigate, product.id)}
      >
        See details <img src={RightArrow} alt="arrow" />
      </p>

      <div className="card-footer">
        <div className="product-data">
          <h3>{product.title}</h3>
          <p>${product.price?.toFixed(2)}</p>
        </div>
        <AddToCartBtn />
      </div>
    </div>
  );
};

export default Card;
