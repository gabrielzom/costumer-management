const express = require("express");
const methodOverride = require("method-override");
const selectClientes = require("./controllers/selectClientes")
const insertCliente = require("./controllers/insertCliente")
const selectClienteById = require("./controllers/selectClienteById")
const updateClienteById = require("./controllers/updateClienteById")
const deleteClienteById = require("./controllers/deleteClienteById")
const selectHistoricoById = require("./controllers/selectHistoricoById")

require("dotenv").config();

const app = express();
let port

app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs')
app.set('views', ('./views'))

app.get("/", (req, res) => {res.render("index")})
app.get("/usuarios", (req, res) => {res.render("gerenciar-usuarios")})
app.get("/clientes", selectClientes)
app.get("/historico", (req, res) => {res.render("gerenciar-clientes-historico")})
app.get("/incluir-cliente", (req, res) => {res.render("incluir-cliente")})
app.get("/incluir-historico", (req, res) => {res.render("incluir-historico")})
app.get("/:id_cliente", selectClienteById)

app.post("/:id_cliente_historico", selectHistoricoById)
app.put("/atualizar-cliente/:id_cliente", updateClienteById)
app.post("/incluir-cliente", insertCliente)
app.delete("/:id_cliente", deleteClienteById)

if (!process.env.PORT) {
  port = 1200
} else {
  port = process.env.PORT
}

app.listen(port, () => {
  console.log(`App listen in port: http://localhost:${port}`)
})