const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  clientes.create(req.body)
    .then(() => {
      console.log("-- correct insert cliente.")
      return res.redirect("/clientes")
    })
    .catch(error => console.log("-- incorrect insert cliente. " + error))
}