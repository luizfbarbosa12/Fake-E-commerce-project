import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
