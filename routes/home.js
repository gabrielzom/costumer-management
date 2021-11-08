const express = require("express");
const home = express.Router();
const selectClientes = require("../controllers/selectClientes")

home.use(express.static("public"))

home.get("/", (req, res) => {res.render("index")})
home.get("/usuarios", (req, res) => {res.render("gerenciar-usuarios")})
home.get("/clientes", selectClientes)

module.exports = home;