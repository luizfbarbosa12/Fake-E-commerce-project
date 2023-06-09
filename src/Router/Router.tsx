import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import CartContainer from "../components/organisms/CartContainer/CartContainer";
import CartPage from "../pages/CartPage/CartPage";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Router = () => {
  const {data} = useContext(ProductsContext)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {(data?.states?.cart?.length ?? 0) > 0 && <CartContainer/>}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
