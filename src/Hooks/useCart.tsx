import { useContext } from "react";
import { ProductObjectType } from "../contexts/Products.types";
import { ProductsContext } from "../contexts/ProductsContext";


const useCart = () => {
  const { data } = useContext(ProductsContext);

  const addToCart = (product: ProductObjectType) => {
    const isInCart = data?.states?.cart?.some((item) => {
      return item.id === product.id;
    });
    if (!isInCart) {
      if(data?.setters?.setCart)
      data?.setters?.setCart([...(data?.states?.cart || []), product]);
    }
  };

  return {
    addToCart
  };
};

export default useCart;