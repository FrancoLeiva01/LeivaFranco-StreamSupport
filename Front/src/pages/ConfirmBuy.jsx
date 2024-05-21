import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "../store/cart.store";
import parsePrice from "../functions/parsePrice";

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
    height: 740px;
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

  h3 {
    color: #4485ca;
    text-align: center;
  }

  .envio {
    color: rgb(67, 184, 67);
    font-size: 20px;
  }
  .separator {
    background: rgba(0, 0, 0, 0.1);
    height: 1px;
    margin: 0;
    width: 100%;
  }
`;

const ConfirmBuy = () => {
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
  const productsCart = useStore((state) => state.productsCart);

  if (productsCart.length === 0) {
    return (
      <ConfirmContainer>
        <div className="container-confirm">
          <div className="tarjeta-confirm">
            <h3 className="titulo-confirm">Tu Carrito está Vacío</h3>
            <p>No tienes compras pendientes</p>
          </div>
        </div>
      </ConfirmContainer>
    );
  }

  const totalPrice = productsCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleConfirmPurchase = () => {
    // Aquí agregaria la lógica adicional para enviar la información de la compra al servidor
    setPurchaseConfirmed(true);
  };

  return (
    <ConfirmContainer>
      <div className="container-confirm">
        <div>
          <h2>Stream Support</h2>
        </div>
        <div className="tarjeta-confirm">
          <h3 className="titulo-confirm">Confirmación de Compra</h3>
          <div>
            {productsCart.map((product) => (
              <div key={product.product_id}>
                <h3>Detalles del Producto:</h3>
                <h4>{product.product_name}</h4>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: $ {parsePrice(product.price * product.quantity)}</p>
              </div>
            ))}
          </div>
          <div className="separator"></div>
          <div className="envio">
            <p>Envío Gratis</p>
          </div>
          <div className="separator"></div>
          <p>Precio Total: $ {parsePrice(totalPrice)}</p>
          <div>
            <p>
              Dirección de entrega: Calle Evergreen Terrace 742 en Springfield
            </p>
          </div>
          <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
          {purchaseConfirmed && (
            <p style={{ color: "green" }}>¡Compra realizada exitosamente!</p>
          )}
        </div>
      </div>
    </ConfirmContainer>
  );
};

export default ConfirmBuy;
