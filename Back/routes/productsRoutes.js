const express = require("express");
const {
  addProducts, getProducts, getProductById, updateProduct, deleteProduct
} = require("../controllers/productsController");
const {
  productConditions,
  productValidationRules,
} = require("../middlewares/productValidator");
const productsRouter = express.Router();

productsRouter.post(
  "/",
  productConditions,
  productValidationRules,
  addProducts
);

productsRouter.get("/", getProducts);

productsRouter.get("/:id", getProductById);

productsRouter.put("/:id", updateProduct);

productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
