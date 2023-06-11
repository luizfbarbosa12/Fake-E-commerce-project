import { useContext, useEffect, useState } from "react";
import "./CartContainer.scss";
import { ProductsContext } from "../../../contexts/ProductsContext";
import trash from "../../../assets/trash.svg";
import { goToCartPage } from "../../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { ProductObjectType } from "../../../contexts/Products.types";
const CartContainer = () => {
  const [quantities, setQuantities] = useState({});
  const { data } = useContext(ProductsContext);
  const navigate = useNavigate();

  //try to fix the useCartCalculator() hook later
  useEffect(() => {
    const cartItems = data?.states?.cart ?? [];
    const updatedQuantities = cartItems.reduce((acc, item) => {
      return { ...acc, [item.id]: quantities[item.id] || 1 };
    }, {});
    setQuantities(updatedQuantities);
  }, [data?.states?.cart]);

  const calculateTotal = () => {
    const cartItems = data?.states?.cart ?? [];
    const total = cartItems.reduce(
      (sum, product) =>
        sum + (product.price || 0) * (quantities[product.id] || 1),
      0
    );
    if (data?.setters?.setCartTotalPrice)
      data?.setters?.setCartTotalPrice(total); // Update the state with the calculated total
    return total;
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const removeItemFromCart = (id: number) => {
    const newCart = (data?.states?.cart || []).filter((item) => {
      return item.id !== id;
    });
    if (data?.setters?.setCart) data?.setters?.setCart(newCart);
  };
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
        const quantity = quantities[item.id] || 1;
        return (
          <div key={item.id} className="cart-item">
            <div className="price-and-image">
              <img src={item.image} alt="cart-image" className="cart-image" />
              <h4>${(item.price * quantity).toFixed(2)}</h4>
            </div>
            <div className="cart-cart-footer">
              <select
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className="delete-btn"
              >
                <img className="delete-item" src={trash} alt="delete" />
              </button>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default CartContainer;
