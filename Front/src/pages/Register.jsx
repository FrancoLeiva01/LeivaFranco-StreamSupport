import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthStore } from "../store/auth.store";

const RegisterContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "Roboto", "Times New Roman", serif;
  }

  .tarjeta-login {
    margin-right: 10px;
    max-width: 600px;
    width: 90%;
    height: 640px;
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
    background: url(../img/escritorio.jpg) no-repeat center;
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

  button,
  .submit-button {
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
    text-align: center;
    color: #4485ca;
    margin-bottom: 50px;
    font-size: 70px;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Add gap between form elements */
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const isAuth = useAuthStore((state) => state.isAuth);
  const [newUser, setNewUser] = useState({
    user: "",
    password: "",
    email: "",
  });

  const onChangeNewUser = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("newUser", newUser);
    fetch("http://localhost:3000/usuarios/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <RegisterContainer>
      <div className="container-login">
        <div>
          <h2>Stream Support</h2>
        </div>
        <div className="tarjeta-login">
          <form onSubmit={handleRegister}>
            <h3 className="titulo-login">Registrate</h3>
            <input
              required
              type="text"
              name="user"
              placeholder="Usuario"
              onChange={onChangeNewUser}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={onChangeNewUser}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={onChangeNewUser}
            />
            <input
              className="submit-button"
              type="submit"
              value="Registrarme"
            />
          </form>
          <a className="terminos" href="#">
            Terminos y Condiciones
          </a>
          <button type="button" onClick={() => navigate("/login")}>
            Ya tengo cuenta
          </button>
        </div>
      </div>
    </RegisterContainer>
  );
};

export default Register;
