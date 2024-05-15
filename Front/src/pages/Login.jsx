import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div classNameName="container-login">
      <div>
        <h2>Stream Support</h2>
      </div>
      <div classNameName="tarjeta-login">
        <h3 classNameName="titulo-login">Iniciar Sesion</h3>
        <input
          classNameName="inputs"
          type="email"
          placeholder="Usuario o E-mail"
        />
        <input
          classNameName="inputs"
          type="password"
          placeholder="Contraseña"
        />
        <button onClick={() => navigate("/home")}>Iniciar Sesion</button>
        <a classNameName="olvidaste">¿Olvidaste Tu Contraseña?</a>

        <div classNameName="crear-cuenta">
          ¿No tienes Cuenta?{" "}
          <button type="button" onClick={() => navigate("/register")}>
            Crea Una
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
