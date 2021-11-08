const express = require("express");
const cliente = require("./routes/cliente")
const home = require("./routes/home")
const methodOverride = require("method-override");

require("dotenv").config();

const app = express();
let port

app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/clientes", cliente)
app.use("/clientes/historico", cliente)
app.use("/clientes/historico/incluir", cliente)
app.use("/clientes/historico/editar", cliente)
app.use("/clientes/historico/excluir", cliente)
app.use("/clientes/editar", cliente)
app.use("/clientes/excluir", cliente)


app.use("/", home)

app.set('view engine', 'ejs')
app.set('views', ('./views'))

if (!process.env.PORT) {
  port = 1200
} else {
  port = process.env.PORT
}

app.listen(port, () => {
  console.log(`App listen in port: http://localhost:${port}`)
})