const usuarios = require('../models/usuarios')
const { Op } = require('sequelize');
const sequelize = require('../models/db');
const Sequelize = require('sequelize');
const sendEmailForManager = require('../email/sendEmailForManager');
require("dotenv").config()

module.exports = (req, res) => {

  if (req.body.senha != req.body.confirmar_senha) {
    usuarios
      .findOne({
        where : {
          email : req.body.email
        }
      })
      .then((usuario) => {
        sequelize.query(`SELECT CAST(AES_DECRYPT(senha, '${process.env.KEY}') AS CHAR) AS senha FROM usuarios WHERE email='${usuario.email}'`)
          .then((result) => {
            return res.render("alterar-senha", {
              senha : result[0][0].senha,
              usuario : usuario,
              message : "As senhas não coincidem."
            })
          })
      })
  } else {
    usuarios
      .update(
        {
          senha : Sequelize.literal(`AES_ENCRYPT("${req.body.senha}","${process.env.KEY}")`)
        }, 
        {
          where : {
            id : req.params.id
          }
        }
      )
      .then(() => {
        console.log("-- correct update on usuario.")
        sendEmailForManager(req, res, req.body.email, req.body.senha)
        res.redirect("/usuario")
      })
      .catch(error => 
        console.log("-- incorrect update on usuario. " + error))
    } 
}