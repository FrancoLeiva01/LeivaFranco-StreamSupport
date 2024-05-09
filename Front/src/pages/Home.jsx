import React, { useEffect, useState } from 'react'



const Home = () => {
  const [product, setProduct] = useState()
  async function initialData () {
    await fetch("http://localhost:3000/products/") 
    .then(res => res.json())
    .then(res => setProduct(res.data))
    .catch(res => console.log(res)) 

  }
  useEffect(() => {
initialData()
  }, [] )
  return (
    <div>
      {product.map((p) => {
return (
  <div class="tarjeta box-1">
  <img class="img"
  src={p.img}
  alt="Perfil 1"
  />
  <h3>{p.nombre}</h3>
  <p class="precio">
    {p.precio}</p>
  <div class="botones">
      <button>Ver</button>
  </div>
</div> 
)
      })}
    </div>
  )
}

export default Home