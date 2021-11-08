const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  clientes.findAll({
    where : {
      id : req.params.id
    }
  })
    .then((cliente) => {
      console.log("-- correct select on clientes.")
      return res.render("incluir-historico", {cliente : cliente})
    })
    .catch(error => console.log("-- incorrect select on clientes. " + error))
}