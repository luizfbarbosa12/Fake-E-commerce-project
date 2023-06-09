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
    };
    setters?: {
      setCart?: React.Dispatch<React.SetStateAction<ProductObjectType[]>>;
    };
  };
}

export const ProductsContext = createContext<ContextTypes>({
  data: {
    states: {
      products: undefined,
      categories: undefined,
      cart: [],
    },
  },
});
