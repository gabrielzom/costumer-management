const express = require("express");
const home = express.Router();
const selectClientes = require("../controllers/selectClientes")
const { isConsulting } = require("../helpers/isConsulting");
const { isAdmin } = require("../helpers/isAdmin");

const {request, response} = require("express")

home.use(express.static("public"))

home.get("/", isConsulting, (req, res) => { res.render("index") })
home.get("/usuario", isAdmin, (req, res) => { res.render("gerenciar-usuarios") })
home.get("/clientes", isConsulting, selectClientes(""))
home.get("/clientesnotdelete", isConsulting, selectClientes("Não é possível excluir um cliente que contém informações no histórico."))

home.get("/signout", isConsulting, (req, res) => {
  req.logout()
  req.flash("success_msg", "Você foi desconectado da sessão com sucesso")
  res.redirect("/")
})

module.exports = home;