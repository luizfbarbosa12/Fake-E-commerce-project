import './AddToCartLargeBtn.scss'
import cart from "../../../assets/cart.svg";


type AddToCartLargeBtnProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const AddToCartLargeBtn = ({onClick}: AddToCartLargeBtnProps) => {
  return (
    <button onClick={onClick} className="large-btn">
      Buy <img src={cart} alt="cart icon" />
    </button>
  );
};

export default AddToCartLargeBtn;
