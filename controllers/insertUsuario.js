const usuarios = require('../models/usuarios')
const sequelize = require('sequelize');
require("dotenv").config()

module.exports = (req, res) => {
  
  usuarios
    .findOne({
      where : {
        email : req.body.email
      } 
    })
    .then((usuario) => {
      if (usuario) {
        res.render("incluir-usuario", { message : "Este endereço de e-mail já está sendo usado." })

      } else  {
        if (req.body.senha != req.body.confirmar_senha) {
          res.render("incluir-usuario", { message : "As senhas não coincidem." })

        } else {
          usuarios
            .create({
              nome : req.body.nome,
              email : req.body.email,
              senha : sequelize.literal(`AES_ENCRYPT("${req.body.senha}","${process.env.KEY}")`),
              permissao : req.body.permissao,
              admin : 0
            })
            .then(() => {
              console.log("-- correct insert usuario.")
              return res.redirect("/usuario")
            })
            .catch(error => console.log("-- incorrect insert usuario: " + error))
        }
      }    
    })
}