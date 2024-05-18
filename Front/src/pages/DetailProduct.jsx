import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../cart.store";
import { useParams } from "react-router-dom";
import parsePrice from "../functions/parsePrice";

const DetailContainer = styled.div`
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

  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar a:hover {
    background-color: gray;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 63px;
    background-color: #0075f2;
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .barra-nav {
    width: 1300px;
    padding: 10px;
    margin: 10px;
    display: flex;
  }

  .barra {
    width: 1000px;
    padding-left: 5px;
  }

  .navbar {
    display: flex;
    margin-right: 10px;
    justify-content: space-between;
  }

  .logo {
    margin-left: 30px;
  }

  .logo a {
    font-family: "Roboto", "Times New Roman", serif;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
  }

  .navbar a {
    display: block;
    margin: 5px;
    padding: 23px 20px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
  }

  section {
    background-color: #292728;
    display: flex;
    flex-direction: row-reverse;
    padding-left: 45px;
    padding-top: 10px;
    max-width: 3000px;
    gap: 20px;
    justify-content: center;
    margin: auto;
  }

  .tarjeta-product {
    margin-bottom: 50px;
    margin-top: 50px;
    background-color: #3d3b3c;
    border: 2px solid black;
    display: flex;
    justify-content: flex-start;
    width: 1200px;
    height: 700px;
    box-shadow: 3px 3px 10px black;
    padding: 1rem;
    & h3 {
      font-weight: 1200;
      font-family: "Roboto", "Times New Roman", serif;
      font-size: 2rem;
      margin-bottom: 20px;
    }
    & span {
      font-size: 2.5rem;
    }
    & p {
      font-weight: 1200;
      font-size: 1.2rem;
      text-align: center;
      font-family: "Roboto", "Times New Roman", serif;
    }
    & button {
      font-family: "Roboto", "Times New Roman", serif;
      margin-bottom: 10px;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      box-shadow: 3px 3px 10px black;
    }
  }

  .img {
    display: flex;
    width: 600px;
    height: 550px;
    border-radius: 5%;
  }

  .detalles-producto {
    display: flex;
    margin-left: 70px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .medios-pago {
    text-decoration: none;
    color: #0075f2;
  }

  .forma-entrega {
    text-decoration: none;
  }
  .caja-botones {
    height: 300px;
  }

  .tarjeta1 .botones {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .forma-entrega {
    display: flex;
    justify-content: center;
    color: #0075f2;
  }

  .precio-metodospago {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mycheck {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .title-details {
    margin-left: 0;
    margin-right: 0;
    margin-top: 32px;
  }

  .product-relacionado {
    background-color: #292728;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 20px;
    font-family: "Roboto", "Times New Roman", serif;
    font-size: 50px;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
  }

  .ver-todo {
    font-family: "Roboto", "Times New Roman", serif;
    color: #6fa7e3;
    text-decoration: none;
    font-size: 27px;
    display: flex;
    padding-top: 22px;
    padding-left: 10px;
  }

  .tarjetas_container2 {
    padding-top: 10px;
    flex-wrap: wrap;
    max-width: 3000px;
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: auto;
  }

  .tarjeta1 {
    box-shadow: 3px 3px 10px;
    padding: 1rem;
    & h3 {
      font-weight: 900;
      font-size: 1.5rem;
    }
    & p {
      font-weight: 400;
      font-size: 1rem;
      text-align: center;
    }
    & button {
      margin-bottom: 10px;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      box-shadow: 3px 3px 10px black;
    }
  }

  .img2 {
    width: 300px;
    height: 300px;
  }

  .seccion-relacionados {
    background-color: #292728;
  }

  @media (max-width: 768px) {
    .caja-botones {
      margin-left: 20px;
    }

    .img {
      margin-left: 250px;
    }

    .barra {
      width: 520px;
    }

    .tarjeta-product {
      flex-direction: column;
      width: 1200px;
      height: 1400px;
    }

    .detalles-producto {
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: space-around;
    }
  }
`;

const DetailProduct = () => {
  const { id } = useParams();
  const setProductToCart = useStore((state) => state.setProductToCart);
  console.log(id);
  const [productDetail, setProductDetail] = useState([]);
  async function initialData(id) {
    await fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetail(res.data))
      .catch((res) => console.log(res));
  }
  console.log(productDetail);
  useEffect(() => {
    initialData(id);
  }, [id]);
  return (
    <DetailContainer>
      <section className="seccion-container">
        <div className="tarjeta-container" />
        <div className="tarjeta-product">
          <img className="img" src={productDetail.image} alt="Perfil 1" />
          <div className="detalles-producto">
            <h3 className="nombre-producto">{productDetail.product_name}</h3>

            <div className="title-details">
              {productDetail.product_description}
            </div>
            <div>
              <ul>
                {/* <li>{productDetail.product_name}</li>
                <li>Cable de 3m.</li>
                <li>Conector/es de salida:usb.</li>
                <li>Frecuencia máxima: 20kHz.</li>
                <li>Frecuencia mínima: 20Hz.</li>
                <li>Tiene luz LED.</li>
                <li>Incluye: 1 cables.</li>
                <li>Alta resolución.</li> */}
              </ul>
              <br />
              <div className="precio-metodospago">
                <span>$ {parsePrice(productDetail.price)}</span>
                <br />
                <div>
                  <a className="medios-pago" href="#">
                    Ver los medios de pago
                  </a>
                </div>
              </div>
              <br />
              <br />
              <div className="caja-botones">
                <div className="botones">
                  <button onClick={() => setProductToCart(productDetail)}>
                    Añadir al Carrito
                  </button>
                  <button>Comprar Ahora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailContainer>
  );
};

export default DetailProduct;
