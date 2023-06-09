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

  useEffect(() => {
    const cartItems = data?.states?.cart ?? [];
    const updatedQuantities = cartItems.reduce((acc, item) => {
      return { ...acc, [item.id]: quantities[item.id] || 1 };
    }, {});
    setQuantities(updatedQuantities);
  }, [data?.states?.cart]);

  const calculateTotal = () => {
    const cartItems = data?.states?.cart ?? [];
    return cartItems.reduce(
      (sum, product) =>
        sum + (product.price || 0) * (quantities[product.id] || 1),
      0
    );
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const removeItemFromCart = (id: number) => {
    const newCart = (data?.states?.cart || []).filter((item) => {
        return item.id !== id
    })
    data?.setters?.setCart(newCart)
  }
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              <button onClick={() => removeItemFromCart(item.id)} className="delete-btn">
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
