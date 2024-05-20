import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import ConfirmBuy from "./pages/ConfirmBuy";

const MainLayoutRoutes = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detailproduct/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<ConfirmBuy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainLayoutRoutes;
