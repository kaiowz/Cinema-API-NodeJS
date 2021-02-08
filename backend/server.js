require("dotenv").config();
const express = require("express");
const database = require("./database");

//CONFIGS
const server = express();

server.use(express.json());

//ROTAS
const router = require("./apiRoutes");
server.use(router);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});