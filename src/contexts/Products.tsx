import { useEffect, useState } from "react";
import { ContextTypes, ProductsContext } from "./ProductsContext";
import { BASE_URL } from "../constants/URL";
import axios from "axios";
import {
  CategoriesProps,
  ProductsArrayProps,
  ProductsProps,
} from "./Products.types";

const Products = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<ProductsArrayProps | undefined>(
    undefined
  );
  const [categories, setCategories] = useState<CategoriesProps | undefined>(
    undefined
  );

  const getAllProducts = () => {
    axios
    .get(`${BASE_URL}`)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => console.error(err));
  }

  const getCategories = () => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllProducts()
    getCategories()
  }, []);

  const states = { products, categories };
  const data: ContextTypes = { data: { states } };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default Products;
