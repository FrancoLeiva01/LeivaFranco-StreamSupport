import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/header";
import MainLayoutRoutes from "./MainLayoutRoutes";
import Home from "./pages/Home";
import { useAuthStore } from "./store/auth.store";
import Navbar from "./components/navbar";
import DetailProduct from "./pages/DetailProduct";
import Footer from "./components/footer";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const location = useLocation();

  // Verifica si la ruta actual es /login o /register
  const isLoginOrRegister =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <Navbar />
      {!isLoginOrRegister && isAuth && <Header />}
      {/* Renderiza Header solo si no es /login o /register y el usuario está autenticado */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailproduct/:id" element={<DetailProduct />} />
        <Route path="*" element={<MainLayoutRoutes isAllowed={isAuth} />} />
      </Routes>
      {!isLoginOrRegister && isAuth && <Footer />}
    </>
  );
}

export default App;
