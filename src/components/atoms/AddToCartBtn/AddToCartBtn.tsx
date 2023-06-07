import { ReactNode } from "react";
import AddToCart from "../../../assets/add-to-cart.svg";
import './AddToCartBtn.scss'


interface AddToCartBtnProps {
    image?: ReactNode
}
const AddToCartBtn = ({image}: AddToCartBtnProps) => {
  return (
    <button className="add-to-cart">
      <img src={AddToCart} alt="add to cart" />
    </button>
  );
};

export default AddToCartBtn;
