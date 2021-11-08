const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  clientes
    .findByPk(req.params.id)
    .then((cliente) => {
      console.log("-- correct select for edit cliente.")
      return res.render("editar-cliente", {
        cliente : cliente
      })
    })
    .catch(error => console.log("-- incorrect select for edit cliente. " + error))
}