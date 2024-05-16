import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "Roboto", "Times New Roman", serif;
  }

  .olvidaste {
    text-align: center;
  }

  .tarjeta-login {
    margin-right: 10px;
    max-width: 600px;
    width: 90%;
    height: 540px;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  body {
    font-family: "Roboto", "Times New Roman", serif;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 3px solid #ddd;
    border-radius: 5px;
  }

  button {
    background-color: #0056b3;
    border: none;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  .titulo-login {
    font-weight: 600;
    font-family: "Roboto", "Times New Roman", serif;
    text-align: center;
    color: #0056b3;
    font-size: 50px;
  }

  .container-login {
    background: url(../img/escritorio.jpg) no-repeat center;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .crear-cuenta {
    text-align: center;
  }

  .terminos {
    text-align: center;
    font-size: 18px;
  }

  h2 {
    font-family: "Roboto", "Times New Roman", serif;
    text-align: center;
    color: #4485ca;
    margin-bottom: 50px;
    font-size: 70px;
    font-weight: 600;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <div className="container-login">
        <div>
          <h2>Stream Support</h2>
        </div>
        <div className="tarjeta-login">
          <h3 className="titulo-login">Iniciar Sesion</h3>
          <input
            className="inputs"
            type="email"
            placeholder="Usuario o E-mail"
          />
          <input className="inputs" type="password" placeholder="Contraseña" />
          <button onClick={() => navigate("/home")}>Iniciar Sesion</button>
          <a className="olvidaste">¿Olvidaste Tu Contraseña?</a>

          <div className="crear-cuenta">
            ¿No tienes Cuenta?{" "}
            <button type="button" onClick={() => navigate("/register")}>
              Crea Una
            </button>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
