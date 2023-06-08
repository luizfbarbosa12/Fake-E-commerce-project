import './AddToCartLargeBtn.scss'
import cart from "../../../assets/cart.svg";


const AddToCartLargeBtn = () => {
  return (
    <button>
      Buy <img src={cart} alt="cart icon" />
    </button>
  );
};

export default AddToCartLargeBtn;
