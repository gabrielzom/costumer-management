const express = require("express");
const usuario = express.Router();
const passport = require("passport");
const selectUsuarios = require("../controllers/selectUsuarios")
const insertUsuario = require("../controllers/insertUsuario")
const selectUsuarioById = require("../controllers/selectUsuarioById")
const updateSenhaUsuario = require("../controllers/updateSenhaUsuario")
const { isManager } = require("../helpers/isManager");

usuario.use(express.static("public"))

usuario.get("/", isManager, selectUsuarios)
usuario.get("/incluir", isManager, (req, res) => { res.render("incluir-usuario", { message : '' }) })
usuario.post("/incluir", isManager, insertUsuario)
usuario.get("/login", (req, res) => {res.render("login")})
usuario.get("/alterar-senha/:id", isManager, selectUsuarioById)
usuario.put("/alterar-senha/:id", isManager, updateSenhaUsuario)

usuario.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect : "/",
    failureRedirect : "/usuario/login",
    failureFlash : true
  })(req, res, next)
})

module.exports = usuario