const usuarios = require('../models/usuarios')
const { Op } = require('sequelize');
const sequelize = require('../models/db');
const Sequelize = require('sequelize');
const sendMail = require('../email/sendEmail')
require("dotenv").config()

module.exports = (req, res) => {

  let id = req.params.id - process.env.SHA
  id = id / process.env.SHA

  usuarios
    .update(
      {
        senha : Sequelize.literal(`AES_ENCRYPT("${req.body.senha}","${process.env.KEY}")`)
      },
      {
        where : {
          id : id
        }
      }
    )
    .then(() => {
      console.log("-- correct update on usuario.")
      res.redirect("/usuario/login")
    })
    .catch(error => 
      console.log("-- incorrect update on usuario. " + error)
    ) 
}