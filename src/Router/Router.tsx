import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
