const express = require("express");
const cliente = express.Router();

const selectClientes = require("../controllers/selectClientes")
const insertCliente = require("../controllers/insertCliente")
const selectClienteById = require("../controllers/selectClienteById")
const updateClienteById = require("../controllers/updateClienteById")
const deleteClienteById = require("../controllers/deleteClienteById")
const selectHistoricoById = require("../controllers/selectHistoricoById")
const insertHistoricoCliente = require("../controllers/insertHistoricoCliente")
const selectClienteForInsertHistorico = require("../controllers/selectClienteForInsertHistorico")
const selectHistoricoForEdit = require("../controllers/selectHistoricoForEdit")
const updateHistorico = require("../controllers/updateHistorico")
const deleteHistoricoById = require("../controllers/deleteHistoricoById")
const { isAdmin } = require("../helpers/isAdmin")

cliente.use(express.static("public"))

cliente.get("/historico/:id", isAdmin, selectHistoricoById)
cliente.get("/historico/incluir/:id", isAdmin, selectClienteForInsertHistorico)
cliente.post("/historico/incluir/:id", isAdmin, insertHistoricoCliente)

cliente.post("/historico/editar/:id", isAdmin, selectHistoricoForEdit)
cliente.put("/historico/editar/:id", isAdmin, updateHistorico)

cliente.get("/editar/:id", isAdmin, selectClienteById)
cliente.put("/editar/:id", isAdmin, updateClienteById)

cliente.delete("/excluir/:id", isAdmin, deleteClienteById)
cliente.delete("/historico/excluir/:id", isAdmin, deleteHistoricoById)

cliente.get("/incluir", isAdmin, (req, res) => {res.render("incluir-cliente")})
cliente.post("/incluir", isAdmin, insertCliente)

cliente.get("/insert-historico/:id", isAdmin, selectClienteForInsertHistorico)


module.exports = cliente;