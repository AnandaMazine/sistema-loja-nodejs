import express from "express";

const router = express.Router();

router.get("/clientes", function(req, res){
    const clientes = [
        {nome: "João", CPF: "123.456.789-00", endereco: "Rua dos Bobos, 0"},
        {nome: "Ana", CPF: "001.234.567-89", endereco: "Rua Um, 2"},
        {nome: "Maria", CPF: "112.345.678.90", endereco: "Rua Dois, 3"},
        {nome: "José", CPF: "234.567.890-11", endereco: "Rua Tres, 4"},
        {nome: "Carlos", CPF: "345.678.110-99", endereco: "Rua Quatro, 4"},
    ]
    res.render("clientes", {
        clientes: clientes,
      });
    });
  
    export default router;