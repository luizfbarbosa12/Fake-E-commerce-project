import "./card.scss";
import RightArrow from "../../../assets/right-arrow.svg";
import AddToCartBtn from "../../atoms/AddToCartBtn/AddToCartBtn";

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="image-overlay">
        <img
          className="product-image"
          src="https://picsum.photos/275/300"
          alt="product image"
        />
      </div>
      <p className="see-details">
        See details <img src={RightArrow} alt="arrow" />
      </p>

      <div className="card-footer">
        <div className="product-data">
          <h3>Product name</h3>
          <p>$58,50</p>
        </div>
        <AddToCartBtn/>
      </div>
    </div>
  );
};

export default Card;
