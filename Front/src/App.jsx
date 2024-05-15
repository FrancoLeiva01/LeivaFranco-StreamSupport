import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayoutRoutes from "./MainLayoutRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<MainLayoutRoutes />} />
      </Routes>
    </>
  );
}

export default App;
