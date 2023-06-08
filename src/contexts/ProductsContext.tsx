import { createContext } from "react";
import { CategoriesProps, ProductsArrayProps } from "./Products.types";

export interface ContextTypes {
    data?: {
        states?: {
            products?: ProductsArrayProps,
            categories?: CategoriesProps
        }
    }
  }

export const ProductsContext = createContext<ContextTypes>({
    data: {
        states: {
            products: undefined,
            categories: undefined
        }
    }
});
