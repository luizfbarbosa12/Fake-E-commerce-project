import "./card.scss";
import RightArrow from "../../../assets/right-arrow.svg";
import AddToCart from "../../../assets/add-to-cart.svg";

const Card = () => {
  return (
    <div className="card-wrapper">
      <img
        className="product-image"
        src="https://picsum.photos/275/300"
        alt="product image"
      />
      <p className="see-details">
        See details <img src={RightArrow} alt="arrow" />
      </p>
      <div className="card-footer">
        <div className="product-data">
          <h3>Product name</h3>
          <p>$58,50</p>
        </div>
        <button className="add-to-cart">
          <img src={AddToCart} alt="add to cart" />
        </button>
      </div>
    </div>
  );
};

export default Card;
