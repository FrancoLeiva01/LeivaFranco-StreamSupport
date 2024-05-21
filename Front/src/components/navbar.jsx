import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthStore } from "../store/auth.store";

const NavContainer = styled.nav`
header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 63px;
    background-color: #0075f2;
    z-index: 100;
  }
  
  .navbar {
    display: flex;
    margin-right: 10px;
    justify-content: space-between;
  }
  
  .logo {
    margin-left: 30px;
    font-family: "Roboto", "Times New Roman", serif;
  }
  
  .logo a {
    font-family: "Courier New", Courier, monospace;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
  }
  
  .navbar a {
    display: block;
    margin: 5px;
    padding: 23px 20px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
  }
  .navbar a:hover {
    background-color: gray;
  }
  
  .header {
    width: 100%;
    background-color: white;
    background: url(../img/escritorio.jpg) no-repeat center;
    background-size: cover;
  }

  .barra-nav {
    height: 40px;
    min-width: 400px;
    padding: 10px;
    margin: 10px;
    display: flex;
  }
  
  .barra {
    padding-left: 10px;
    width: 100%;
  }

  @media (max-width: 768px) {
    /* .barra {
      width: 554px;

    } */
    .head {
      flex-direction: column;
      padding: 20px 0;
    }
  
    .navbar {
      flex-direction: column;
      margin: 0;
    }
  
    .header {
      width: 100%;
    }

    @media (min-width: 1024px) {
        .barra-nav {
          min-width: 600px;
        }
      
`;

function Navbar() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/cart");

    function handleClick() {
      navigate("/register");
    }
  }
  return (
    <NavContainer>
      <div className="head">
        <div className="logo">
          <a onClick={() => navigate("/")}>Stream Support</a>
        </div>

        <nav className="navbar">
          {isAuth && (
            <div className="barra-nav">
              <input
                className="barra"
                type="search"
                id="site-search"
                name="buscador"
                placeholder="Buscar..."
              />

              <button>Buscar</button>
            </div>
          )}
          {isAuth && <a onClick={handleClick}>Carrito</a>}

          {!isAuth ? (
            <a onClick={() => navigate("/login")}>Acceder</a>
          ) : (
            <a
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </a>
          )}
        </nav>
      </div>
    </NavContainer>
  );
}

export default Navbar;
