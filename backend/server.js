require("dotenv").config();
const express = require("express");
const cors = reuiqre("cors")
const database = require("./database");

//CONFIGS
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: false}));

//ROTAS
const router = require("./apiRoutes");
server.use(router);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando  http://localhost:${process.env.PORT}`);
});