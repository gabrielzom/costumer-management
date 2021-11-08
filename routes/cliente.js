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

cliente.use(express.static("public"))

cliente.get("/historico/:id", selectHistoricoById)
cliente.get("/historico/incluir/:id", selectClienteForInsertHistorico)
cliente.post("/historico/incluir/:id", insertHistoricoCliente)

cliente.post("/historico/editar/:id", selectHistoricoForEdit)
cliente.put("/historico/editar/:id", updateHistorico)

cliente.get("/editar/:id", selectClienteById)
cliente.put("/editar/:id", updateClienteById)

cliente.delete("/excluir/:id", deleteClienteById)
cliente.delete("/historico/excluir/:id", deleteHistoricoById)

cliente.get("/incluir", (req, res) => {res.render("incluir-cliente")})
cliente.post("/incluir", insertCliente)

cliente.get("/insert-historico/:id", selectClienteForInsertHistorico)





module.exports = cliente;