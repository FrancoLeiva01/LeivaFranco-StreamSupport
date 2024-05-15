import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerCart = styled.section`
  section .container-cart {
    background-color: #292728;
    min-width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div .container-cart2 {
    background-color: #292728;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tarjeta-cart {
    max-width: 100rem;
    width: 90%;
    height: 350px;
    background-color: #3d3b3c;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tarjeta-cart img {
    width: 300px;
    height: 250px;
  }
  .detalles-product {
    display: flex;
    font-size: 27px;
  }

  .detalles-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
  }
  .detalles-cart ul {
    display: flex;
    list-style: none;
  }

  h3 {
    margin-bottom: 20px;
    font-weight: 1rem;
  }

  .detalles-cart ul li {
    margin: 0 2px;
  }

  .detalles-cart ul li a {
    color: rgb(193, 201, 207);
    font-size: 18px;
    text-transform: capitalize;
    padding: 2px 18px;
  }

  .detalles-cart p {
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .tarjeta-login {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 90%;
    height: 250px;
    background-color: #3d3b3c;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    gap: 1rem;
  }

  .resumen-cart {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }

  .resumen-cart2 {
    color: rgb(67, 184, 67);
    font-size: 20px;
  }

  .titulo-login {
    color: #0056b3;
  }

  .button-cart {
    font-size: 20px;
    margin-bottom: 10px;
    padding: 1rem 5rem;
    background-color: #007bff;
    color: white;
    box-shadow: 3px 3px 10px black;
  }

  .precio {
    font-size: 40px;
  }

  .count-price {
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    gap: 10rem;
  }
  form input {
    width: 60px;
    height: 30px;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
  }
  .count-price h4 {
    font-size: 1.4rem;
  }
`;

const ResumenCart = styled.div`
  .resumen-cart {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }

  .resumen-cart2 {
    color: rgb(67, 184, 67);
    font-size: 20px;
  }

  .titulo-login {
    color: #0056b3;
  }

  .button-cart {
    font-size: 20px;
    margin-bottom: 10px;
    padding: 1rem 5rem;
    background-color: #007bff;
    color: white;
    box-shadow: 3px 3px 10px black;
  }

  .precio {
    font-size: 40px;
  }

  .count-price {
    display: flex;
    flex-direction: row;
    gap: 10rem;
  }
  form input {
    width: 60px;
    height: 30px;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
  }
  .count-price h4 {
    font-size: 1.4rem;
  }
`;

const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  async function initialData() {
    await fetch("http://localhost:3000/products/4")
      .then((res) => res.json())
      .then((res) => setProductCart(res.data))
      .catch((res) => console.log(res));
  }
  useEffect(() => {
    initialData();
  }, []);
  console.log(productCart);
  return (
    <ContainerCart>
      <section>
        <div className="container-cart">
          <div className="tarjeta-cart">
            <div className="detalles-product">
              <img src={productCart.image} alt="" />
              <div className="detalles-cart">
                <h3>{productCart.product_name}</h3>
                <ul>
                  <li>
                    <a href="#">Eliminar</a>
                  </li>
                  <li>
                    <a href="#">Comprar</a>
                  </li>
                  <li>
                    <a href="#">Modificar</a>
                  </li>
                </ul>
                <div className="precio">
                  <p>{productCart.price}</p>
                </div>
                <div className="count-price">
                  <form action="product-count">
                    <label for="count">Cantidad: </label>
                    <input type="number" name="count" min="1" max="10" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResumenCart>
        <div className="container-cart2">
          <div className="tarjeta-login">
            <h3 className="titulo-login">Resumen de Compra</h3>
            <div className="resumen-cart">
              <p>Productos (1)</p>
              <p>{productCart.price}</p>
            </div>
            <div className="resumen-cart2">
              <p>Envio Gratis</p>
            </div>
            <button className="button-cart">Comprar</button>
          </div>
        </div>
      </ResumenCart>
    </ContainerCart>
  );
};

export default Cart;
