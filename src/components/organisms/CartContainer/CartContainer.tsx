import { useContext, useEffect, useState } from "react";
import "./CartContainer.scss";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { goToCartPage } from "../../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { ProductObjectType } from "../../../contexts/Products.types";
import useCartCalculator from "../../../Hooks/useCartCalculator";
import QuantitySelect from "../../atoms/QuantitySelect";
import DeleteBtn from "../../atoms/DeleteBtn/DeleteBtn";

const CartContainer = () => {
  const { data } = useContext(ProductsContext);
  const navigate = useNavigate();
  const { quantities, calculateTotal, handleQuantityChange } =
    useCartCalculator(data?.states?.cart);

  return (
    <aside className="cart-wrapper">
      <div className="cart-header">
        <div>
          <h4>Total</h4>
          <p>${calculateTotal().toFixed(2)}</p>
        </div>
        <button
          onClick={() => goToCartPage(navigate)}
          className="go-to-cart-btn"
        >
          Go to Cart
        </button>
      </div>
      {data?.states?.cart?.map((item: ProductObjectType) => {
        const quantity = quantities[Number(item.id)] || 1;
        return (
          <div key={item.id} className="cart-item">
            <div className="price-and-image">
              <img src={item.image} alt="cart-image" className="cart-image" />
              <h4>${(Number(item.price) * quantity).toFixed(2)}</h4>
            </div>
            <div className="cart-cart-footer">
              <QuantitySelect
                quantity={quantity}
                id={item.id}
                handleQuantityChange={handleQuantityChange}
              />
              <DeleteBtn id={Number(item.id)} />
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default CartContainer;
