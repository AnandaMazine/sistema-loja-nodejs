import express from "express";
import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use("/", ProdutosController)
app.use("/", ClientesController)
app.use("/", PedidosController)

app.get("/", (req, res) => {
    res.render("index");
  });

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})