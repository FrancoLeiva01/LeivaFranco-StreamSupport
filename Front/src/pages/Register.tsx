import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className="container-login">
            <div className="tarjeta-login">
                <h3 className="titulo-login">Registrate</h3>
                <input type="text" placeholder="Usuario" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Confirmar Contraseña" />
                <button>Registrarme</button>
                <a className="terminos" href="#">Terminos y Condiciones</a>
                <button type="button" onClick={() => navigate("/login")}>
            Ya tengo cuenta
          </button>
            </div>
        </div>
  )
}

export default Register