import { createContext } from "react";
import {
  CategoriesProps,
  ProductObjectType,
  ProductsArrayProps,
} from "./Products.types";

export interface ContextTypes {
  data?: {
    states?: {
      products?: ProductsArrayProps;
      categories?: CategoriesProps;
      cart?: ProductObjectType[];
      cartTotalPrice?: number
    };
    setters?: {
      setProducts?: React.Dispatch<React.SetStateAction<ProductObjectType[]>>;
      setCart?: React.Dispatch<React.SetStateAction<ProductObjectType[]>>;
      setCartTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
    };
  };
}

export const ProductsContext = createContext<ContextTypes>({
  data: {
    states: {
      products: undefined,
      categories: undefined,
      cart: [],
      cartTotalPrice: 0
    },
  },
});
