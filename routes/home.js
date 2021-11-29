const express = require("express");
const home = express.Router();
const selectClientes = require("../controllers/selectClientes")
const { isConsulting } = require("../helpers/isConsulting");

home.use(express.static("public"))

home.get("/", (req, res) => { res.render("index") })
home.get("/usuarios", isConsulting, (req, res) => { res.render("gerenciar-usuarios") })
home.get("/clientes", isConsulting, selectClientes)

home.get("/signout", isConsulting, (req, res) => {
  req.logout()
  req.flash("success_msg", "Você foi desconectado da sessão com sucesso")
  res.redirect("/")
})

module.exports = home;