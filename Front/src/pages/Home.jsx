import React, { useEffect, useState } from "react";
import styled from "styled-components";
import parsePrice from "../functions/parsePrice";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/cart.store";

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
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    padding-top: 10px;
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

  h3 {
    padding-left: 10px;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/detailproduct");
  }

  const [products, setProducts] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaseleccionada] = useState("0");
  const [precioSeleccionado, setPrecioSeleccionado] = useState("0");
  const searchTerm = useStore((state) => state.searchTerm);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function initialProducts() {
    await fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch((res) => console.log(res));
  }

  async function initialCategorias() {
    await fetch("http://localhost:3000/categorias/")
      .then((res) => res.json())
      .then((res) => setCategorias(res.data))
      .catch((res) => console.log(res));
  }

  useEffect(() => {
    initialProducts();
    initialCategorias();
  }, []);

  useEffect(() => {
    let productosFiltradosPorCategoria = products;
    if (categoriaSeleccionada !== "0") {
      productosFiltradosPorCategoria = products.filter(
        (product) =>
          product.id_category.toString() === categoriaSeleccionada.toString()
      );
    }

    let productosFiltradosPorPrecio = productosFiltradosPorCategoria;
    if (precioSeleccionado !== "0") {
      const [min, max] = precioSeleccionado.split("-");
      productosFiltradosPorPrecio = productosFiltradosPorCategoria.filter(
        (product) =>
          product.price >= parseFloat(min) && product.price <= parseFloat(max)
      );
    }

    setProductosFiltrados(productosFiltradosPorPrecio);
  }, [categoriaSeleccionada, precioSeleccionado, products]);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductosFiltrados(filteredProducts);
  }, [searchTerm]);

  const handleChangeCategoria = (event) => {
    setCategoriaseleccionada(event.target.value);
  };

  const handleChangePrecio = (event) => {
    setPrecioSeleccionado(event.target.value);
  };

  return (
    <TarjetasContainer>
      <div className="products-backgound">
        <h2 className="productos">Productos:</h2>
      </div>
      <div className="caja-filtro">
        <h3>
          Filtrar Por Categorias:{" "}
          <select
            name="categorias"
            id="category"
            onChange={handleChangeCategoria}
          >
            <option value="0">Ver Todas</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_category} value={categoria.id_category}>
                {categoria.name}
              </option>
            ))}
          </select>
        </h3>
        <h3>
          Filtrar Por Precio:{" "}
          <select name="precios" id="price" onChange={handleChangePrecio}>
            <option value="0">Ver Todos</option>
            <option value="0-50">0 - 50</option>
            <option value="5-900">50 - 900</option>
            <option value="200000-400000">200000 - 400000</option>
          </select>
        </h3>
      </div>
      <div className="productos-container">
        {productosFiltrados.length ? (
          productosFiltrados.map((p) => {
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
