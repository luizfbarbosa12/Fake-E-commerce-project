import {  ReactNode } from "react";
import AddToCart from "../../../assets/add-to-cart.svg";
import './AddToCartBtn.scss'


interface AddToCartBtnProps {
    image?: ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const AddToCartBtn = ({onClick}: AddToCartBtnProps) => {

  return (
    <button onClick={onClick} className="add-to-cart">
      <img src={AddToCart} alt="add to cart" />
    </button>
  );
};

export default AddToCartBtn;
