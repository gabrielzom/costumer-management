const express = require("express");
const cliente = express.Router();

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
const historicoToText = require("../services/historicoToText")
const { isConsulting } = require("../helpers/isConsulting");
const { isOperator } = require("../helpers/isOperator");
const { isManager } = require("../helpers/isManager");

cliente.use(express.static("public"))

cliente.get("/historico/:id", isConsulting, selectHistoricoById)
cliente.get("/historico/totext/:id", isConsulting, historicoToText)
cliente.get("/historico/incluir/:id", isOperator, selectClienteForInsertHistorico)
cliente.post("/historico/incluir/:id", isOperator, insertHistoricoCliente)
cliente.get("/historico/editar/:id", isManager, selectHistoricoForEdit)
cliente.put("/historico/editar/:id", isManager, updateHistorico)
cliente.delete("/historico/excluir/:id", isManager, deleteHistoricoById)

cliente.get("/editar/:id", isManager, selectClienteById)
cliente.get("/incluir", isOperator, (req, res) => {res.render("incluir-cliente")})
cliente.get("/insert-historico/:id", isOperator, selectClienteForInsertHistorico)
cliente.post("/incluir",isOperator, insertCliente)
cliente.put("/editar/:id", isManager, updateClienteById)
cliente.delete("/excluir/:id", isManager, deleteClienteById)

module.exports = cliente;