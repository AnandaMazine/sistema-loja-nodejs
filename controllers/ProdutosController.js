import express from "express";

const router = express.Router();

router.get("/produtos", function(req, res){
    const produtos = [
        {nome: "Turbo Flex", preco: 300, categoria: "Tênis Esportivo", image:"images/esportivo1.png"},
        {nome: "Street Vibe", preco: 200, categoria: "Tênis Casual", image: "images/casual.png"},
        {nome: "Urban Chic", preco: 250, categoria: "Tênis Fashion", image: "images/fashion.png"},
        {nome: "SpeedRun", preco: 150, categoria: "Tênis Running", image: "images/running.png"},
        {nome: "RetroStyle", preco: 300, categoria: "Tênis Retrô", image: "images/retro.png"},
    ]
    res.render("produtos", {
        produtos: produtos,
      });
    });
  
    export default router;