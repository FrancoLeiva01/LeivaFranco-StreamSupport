import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
{/* <Routes>
<Route path="/" element={<Home />} />


</Routes> */}
      <Footer />
    </>
  );
}

export default App;
