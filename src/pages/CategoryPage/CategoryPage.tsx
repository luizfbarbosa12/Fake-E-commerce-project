import { useParams } from "react-router-dom";
import './CategoryPage.scss'
import CardsContainer from "../../components/molecules/CardsContainer/CardsContainer";
import { BASE_URL } from "../../constants/URL";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/molecules/Card/Card";
import { ProductObjectType } from "../../contexts/Products.types";
import ClipLoader from "react-spinners/ClipLoader";
import { returnCategoryDescription } from "../../utils/returnCategoryDescription";

const CategoryPage = () => {
  const params = useParams();
  const [productsByCategory, setProductByCategory] = useState([])


  const getProductsInCategory = () => {
    axios
      .get(`${BASE_URL}/category/${params.category}`)
      .then((res) => {
        
        setProductByCategory(res.data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProductsInCategory();
  }, [params.category]);

  return (
    <div className="category-wrapper">
      <h1>
        Everything in{" "}
        {params?.category?.charAt(0).toUpperCase() + params?.category?.slice(1)}
      </h1>
      <p>{returnCategoryDescription(params.category)}</p>
      <CardsContainer>
        {productsByCategory ? productsByCategory.map((product: ProductObjectType) => {
            return <Card key={product.id} product={product}/>
        }) : <ClipLoader loading={productsByCategory && productsByCategory} color={'#FBAE84'} size={45}/>}
      </CardsContainer>
    </div>
  );
};

export default CategoryPage;
