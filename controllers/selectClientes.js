const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (msg) => {
  return function(req, res) {
    clientes.findAll()
    .then((clientes) => {
      console.log("-- correct select on clientes.")
      return res.render("gerenciar-clientes", {
        clientes : clientes,
        msg : msg
      })
    })
    .catch(error => console.log("-- incorrect select on clientes. " + error))
  }
  
}