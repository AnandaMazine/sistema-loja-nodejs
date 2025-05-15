import express from "express";

import connection from "./config/sequelize-config.js";
import ProdutosController from "./controllers/ProdutosController.js";
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";

const app = express();

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS loja;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
