const Product = require("../models").Product;

// funciona (preguntar como hacer q permita $ y . en el price)
const addProducts = async (req, res) => {
  const { product_name, price, id_category, product_description, stock } = req.body;
  const user = await Product.create({
    product_name,
    price,
    id_category,
    product_description,
    stock,
  });
  res.json({ msg: "Producto agregado exitosamente", data: user });
};

// funciona, me habia dado error porque no habia una columna stock en la tabla de mysql
const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json({ msg: "Productos", data: products });
};

// funciona
const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  res.json({ msg: `Producto con id ${id}`, data: product });
};

// funciona
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  await Product.update(product, {
    where: {
        product_id: id,
    },
  });
  res.json({ msg: "Producto actualizado correctamente" });
};

// funciona pero me tira msg como "Executing (default): DELETE FROM `productos` WHERE `product_id` = '2'"
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { product_id: id } });
  res.json({ msg: "Producto eliminado correctamente" });
};
module.exports = {
  addProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
