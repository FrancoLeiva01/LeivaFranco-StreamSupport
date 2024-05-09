import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/global.css";
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import DetailProduct from "./pages/DetailProduct"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detailproduct",
    element: <DetailProduct/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,
);
