const express = require("express");
const app = express();
const PORT = 3000;
const productRouter = require("./routes/productsRoutes");
const categoryRouter = require("./routes/categoryRoutes");

app.use(express.json());

app.use("/usuarios", require("./routes/userRoutes"));

app.use("/products", productRouter);

app.use("/categorias", categoryRouter);

app.listen(PORT, () => {
  console.log("server running");
});
