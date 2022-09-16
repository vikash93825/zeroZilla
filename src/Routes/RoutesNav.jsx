import React, { useEffect } from "react";
import ProductPage from "../Containers/ProductPage";
import ProductItem from "../Containers/ProductItem";
import Navbar from "../Components/Navbar";
import Cart from "../Containers/Cart";
import { Route, Routes, useNavigate } from "react-router-dom";

const RoutesNav = () => {
  const shouldRedirect = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/products");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default RoutesNav;
