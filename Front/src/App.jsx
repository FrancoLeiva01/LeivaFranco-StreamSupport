import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <>
    <div>HOLA</div>
      <Navbar />
      <Header/>
      <Footer /> 
    </>
  );
}

export default App;
