import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
   
    </BrowserRouter>
  )
}

export default Router