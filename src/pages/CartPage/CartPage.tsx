import { useContext } from "react";
import "./CartPage.scss";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartCard from "../../components/molecules/CartCard";

const CartPage = () => {
  const { data } = useContext(ProductsContext);

  const handleClickSettle = () => {
    if (data?.states?.cart.length > 0) toast("Thank you for choosing us");
    data?.setters?.setCart([]);
  };
  return (
    <>
      {data?.states?.cart?.length > 0 ? (
        <>
          <h1 className="h1-margin">Shopping Cart</h1>
          <div className="cart-page-wrapper">
            {data?.states?.cart?.map((item) => {
              return <CartCard key={item.id} product={item} />;
            })}
            <h2>Total Price</h2>
            <p>${data?.states?.cartTotalPrice?.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <h1 className="h1-margin">You haven't selected any items</h1>
      )}
      <div className="h1-margin">
        <button onClick={() => handleClickSettle()} className="large-btn">
          Settle accouts
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default CartPage;
