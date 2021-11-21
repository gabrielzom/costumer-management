const express = require("express");
const usuario = express.Router();
const passport = require("passport")


usuario.use(express.static("public"))

usuario.get("/login", (req, res) => {
  res.render("login")
})

usuario.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect : "/",
    failureRedirect : "/usuario/login",
    failureFlash : true
  })(req, res, next)
})

module.exports = usuario