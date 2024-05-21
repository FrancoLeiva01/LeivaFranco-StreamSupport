import React, { useEffect, useState } from "react";
import styled from "styled-components";
import parsePrice from "../functions/parsePrice";
import { useNavigate } from "react-router-dom";

const TarjetasContainer = styled.div`
  .box-1 {
    grid-area: "a";
  }
  .box-2 {
    grid-area: "b";
  }
  .box-3 {
    grid-area: "c";
  }

  .caja-filtro {
    background-color: #292728;
    & h3 {
      font-family: "Roboto", "Times New Roman", serif;
      font-size: 30px;
      color: #ffffff;
      padding-bottom: 20px;
    }
    & select {
      color: #000;
      height: 50px;
      border-color: #000;
      box-shadow: 3px 3px 10px black;
      padding: 0.5rem 1rem;
      background-color: #4a4e51;
      padding-bottom: 10px;
    }
  }

  h3 {
    text-align: center;
    font-size: medium;
  }

  .products-backgound {
    background-color: #292728;
  }

  .productos {
    padding-left: 10px;
    font-family: "Roboto", "Times New Roman", serif;
    font-size: 50px;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
  }

  .ver-todo {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #6fa7e3;
    text-decoration: none;
    font-size: 27px;
    display: flex;
    padding-top: 22px;
    padding-left: 10px;
  }

  .productos-container {
    color: white;
    background-color: #292728;
    display: flex;
    max-width: 600px;
    padding-top: 10px;
    flex-wrap: wrap;
    max-width: 3000px;
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: auto;
  }

  .tarjetas_container {
    max-width: 600px;
    padding-top: 10px;
    flex-wrap: wrap;
    max-width: 3000px;
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: auto;
    grid-template-areas:
      "a a a a a"
      "a a a a a"
      "b b b b b"
      "b b b b b"
      "c c c c c";
  }

  .tarjeta,
  .tarjeta1 {
    background-color: #3d3b3c;
    width: 350px;
    padding: 1rem;
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

  section {
    max-width: 600px;
    width: 90%;
    display: flex;
    flex-direction: row-reverse;
    padding-left: 45px;
    padding-top: 10px;
    max-width: 3000px;
    gap: 20px;
    justify-content: center;
    margin: auto;
  }
  p {
    margin-bottom: 40px;
    font-size: 18px;
    color: white;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 1000;
  }
  .tarjeta,
  .tarjeta1 {
    font-family: "Roboto", "Times New Roman", serif;
    width: 350px;
    box-shadow: 3px 3px 10px black;
    padding: 1rem;
    & h3 {
      font-weight: 900;
      font-size: 1.5rem;
    }
    & p {
      padding-top: 10px;
      font-weight: 900;
      font-size: 1.5rem;
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
  .img {
    width: 100%;
    border-radius: 15%;
  }
  .botones {
    display: flex;
    justify-content: space-around;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/detailproduct");
  }

  const [product, setProduct] = useState([]);
  async function initialData() {
    await fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }
  useEffect(() => {
    initialData();
  }, []);
  console.log(product);
  return (
    <TarjetasContainer>
      <div className="products-backgound">
        <h2 className="productos">
          Productos:
          <a className="ver-todo" href="#">
            Ver todo
          </a>
        </h2>
      </div>
      <div className="caja-filtro">
        <h3>
          Filtrar Por Categorias:{" "}
          <select name="categorias" id="category">
            <option value="Seleccionar-categoria">
              Seleccione una categoria
            </option>
            <option value="Componentes">Componentes</option>
            <option value="computadoras">Pc Armadas</option>
            <option value="notebook">Notebook</option>
            <option value="accesorios">Accesorios</option>
            <option value="perifericos">Perifericos</option>
          </select>
        </h3>
      </div>
      <div className="productos-container">
        {product.length ? (
          product.map((p) => {
            return (
              <div className="tarjeta box-1" key={p.product_name}>
                <img className="img" src={p.image} alt="Perfil 1" />
                <h3>{p.product_name}</h3>
                <p className="precio">$ {parsePrice(p.price)}</p>
                <div className="botones">
                  <button
                    onClick={() => navigate(`/detailproduct/${p.product_id}`)}
                  >
                    Ver
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </TarjetasContainer>
  );
};

export default Home;
