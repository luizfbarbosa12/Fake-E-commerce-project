import './AddToCartLargeBtn.scss'
import cart from "../../../assets/cart.svg";


const AddToCartLargeBtn = () => {
  return (
    <button className="large-btn">
      Buy <img src={cart} alt="cart icon" />
    </button>
  );
};

export default AddToCartLargeBtn;
