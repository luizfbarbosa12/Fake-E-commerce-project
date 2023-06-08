import axios from "axios";
import "./ProductDetails.scss";
import { BASE_URL } from "../../constants/URL";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { ProductObjectType } from "../../contexts/Products.types";
import AddToCartLargeBtn from "../../components/atoms/AddToCartLargeBtn";

const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState<ProductObjectType>();
  const params = useParams();

  const getASingleProduct = (id: number) => {
    axios
      .get(`${BASE_URL}/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getASingleProduct(Number(params.id)), [params.id]);
  return (
    <div className="details-wrapper">
      <img className="product-details-image" src={singleProduct?.image} alt="" />
      <div className="product-details">
        <div>
          <h1>{singleProduct?.title}</h1>
          <p className="price">${singleProduct?.price}</p>
          <p>{singleProduct?.description}</p>
        </div>
        <div>
          <p className="rating">Rating {singleProduct?.rating?.rate}</p>
          <StarRatings
            rating={singleProduct?.rating?.rate}
            starDimension="25px"
            starSpacing="15px"
            starRatedColor={"#FBAE84"}
          />
        </div>
        <AddToCartLargeBtn/>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
