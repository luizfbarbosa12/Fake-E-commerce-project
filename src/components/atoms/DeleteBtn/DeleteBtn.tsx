import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import "./DeleteBtn.scss"
import trash from "../../../assets/trash.svg"

interface DeleteBtnProps {
  id: number;
}

const DeleteBtn = ({ id }: DeleteBtnProps) => {
  const { data } = useContext(ProductsContext);

  const removeItemFromCart = (id: number) => {
    const newCart = (data?.states?.cart || []).filter((item) => {
      return item.id !== id;
    });
    if (data?.setters?.setCart) data?.setters?.setCart(newCart);
  };

  return (
    <button onClick={() => removeItemFromCart(id)} className="delete-btn">
      <img className="delete-item" src={trash} alt="delete" />
    </button>
  );
};

export default DeleteBtn;
