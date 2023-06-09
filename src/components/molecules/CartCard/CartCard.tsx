import { ProductObjectType } from "../../../contexts/Products.types";
import "./CartCard.scss"

type CartCardProps = {
    product?: ProductObjectType
}


const CartCard = ({product}: CartCardProps) => {
  return (
    <div key={product?.id} className="item-in-cart">
      <img src={product?.image} alt="" />
      <div>
        <h3>{product?.title}</h3>
        <p>{product?.description}</p>
        <p>${product?.price?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartCard;
