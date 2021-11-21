const express = require("express");
const home = express.Router();
const selectClientes = require("../controllers/selectClientes")
const { isAdmin } = require("../helpers/isAdmin")

home.use(express.static("public"))

home.get("/", (req, res) => {res.render("index")})
home.get("/usuarios", isAdmin, (req, res) => {res.render("gerenciar-usuarios")})
home.get("/clientes", isAdmin, selectClientes)

home.get("/signout", isAdmin, (req, res) => {
  req.logout()
  req.flash("success_msg", "Você foi desconectado da sessão com sucesso")
  res.redirect("/")
})

module.exports = home;