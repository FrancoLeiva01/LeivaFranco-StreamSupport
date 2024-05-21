import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthStore } from "../store/auth.store";

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

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Add gap between form elements */
  }
`;

const Login = () => {
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const setUsername = useAuthStore((state) => state.setUsername);
  const setToken = useAuthStore((state) => state.setToken);
  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: user,
      password: password,
    };
    console.log(data);
    fetch("http://localhost:3000/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message || "Error en el inicio de sesión");
          });
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setToken(result.token);
        setUsername(user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error en el inicio de sesión:", error);
        alert(error.message);
      });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  return (
    <LoginContainer>
      <div className="container-login">
        <div>
          <h2>Stream Support</h2>
        </div>
        <div className="tarjeta-login">
          <h3 className="titulo-login">Iniciar Sesion</h3>
          <form onSubmit={handleLogin}>
            <input
              required
              onChange={() => {
                setUser(event.target.value);
              }}
              className="inputs"
              type="text"
              placeholder="Usuario"
            />
            <input
              required
              onChange={() => {
                setPassword(event.target.value);
              }}
              className="inputs"
              type="password"
              placeholder="Contraseña"
            />
            <input
              className="submit-button"
              type="submit"
              value="Iniciar Sesion"
            />
          </form>
          {/* <a className="olvidaste">¿Olvidaste Tu Contraseña?</a> */}

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
