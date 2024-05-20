import React from "react";
import styled from "styled-components";

const ConfirmContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "Roboto", "Times New Roman", serif;
  }

  body {
    background: url(../img/escritorio.jpg) no-repeat center;
  }
  button {
    background-color: #0056b3;
    border: none;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
  }

  .button {
    margin-top: 20px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }

  .titulo-confirm {
    padding-bottom: 20px;
    text-align: center;
    color: #0056b3;
    font-size: 50px;
  }

  .container-confirm {
    padding-top: 20px;
    border-top-width: 10px;
    padding-bottom: 20px;
    background-color: #3d3b3c;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tarjeta-confirm {
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
  h2 {
    text-align: center;
    color: #4485ca;
    margin-bottom: 50px;
    font-size: 70px;
    font-weight: 100px;
  }
`;

const ConfirmBuy = () => {
  return (
    <ConfirmContainer>
      <div class="container-confirm">
        <div>
          <h2>Stream Support</h2>
        </div>
        <div class="tarjeta-confirm">
          <h3 class="titulo-confirm">Confirmacion de Compra</h3>
          <div>Detalles del producto</div>
          <p>Precio total</p>
          <p>Envio</p>
          <p>Datos de Envio al Usuario</p>
          <button>Confirmar Compra</button>
        </div>
      </div>
    </ConfirmContainer>
  );
};

export default ConfirmBuy;
