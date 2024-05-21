import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer";
import Cart from "./pages/Cart";
import ConfirmBuy from "./pages/ConfirmBuy";

const MainLayoutRoutes = ({ isAllowed }) => {
  if (!isAllowed) return <Navigate to="/login" />;

  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<ConfirmBuy />} />
      </Routes>
    </>
  );
};

export default MainLayoutRoutes;
