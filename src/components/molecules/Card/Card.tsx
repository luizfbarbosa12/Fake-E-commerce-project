import "./card.scss";
import RightArrow from "../../../assets/right-arrow.svg";
import AddToCartBtn from "../../atoms/AddToCartBtn/AddToCartBtn";
import { ProductObjectType } from "../../../contexts/Products.types";
import { goToProductDetails } from "../../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { useContext } from "react";

interface CardProps {
  product: ProductObjectType;
}
const Card = ({ product }: CardProps) => {
  const navigate = useNavigate();
  const {data} = useContext(ProductsContext)
  
  const addToCart = (product: ProductObjectType) => {
    const isInCart = data.states?.cart.some((item) => {
      return item.id === product.id
    })
    if(data?.setters?.setCart)
    if(!isInCart) data?.setters?.setCart([...(data?.states?.cart || []), product])
    
  }
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
        <AddToCartBtn onClick={() => addToCart(product)} />
      </div>
    </div>
  );
};

export default Card;
