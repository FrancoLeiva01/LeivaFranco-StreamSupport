const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const productRouter = require("./routes/productsRoutes");
const categoryRouter = require("./routes/categoryRoutes");

app.use(express.json());
app.use(cors());

app.use("/usuarios", require("./routes/userRoutes"));

app.use("/products", productRouter);

app.use("/categorias", categoryRouter);

app.listen(PORT, () => {
  console.log("server running");
});
