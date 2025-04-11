import express from "express";

const router = express.Router();

router.get("/pedidos", function(req, res){
    const pedidos = [
        {numeropedido: 101, valor: 300},
        {numeropedido: 102, valor: 200},
        {numeropedido: 103, valor: 250},
        {numeropedido: 104, valor: 150},
        {numeropedido: 105, valor: 300},
        
    ]
    res.render("pedidos", {
        pedidos: pedidos,
      });
    });
  
    export default router;