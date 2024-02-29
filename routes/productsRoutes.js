const express = require('express');
const { addProducts, getProducts, getProductById, updateProduct } = require('../controllers/productsController');
const productsRouter = express.Router();

productsRouter.post("/", addProducts)

productsRouter.get("/", getProducts )

productsRouter.get("/:id", getProductById);

productsRouter.put("/:id",updateProduct);

module.exports = productsRouter;