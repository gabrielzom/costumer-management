const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  clientes
    .destroy({
      where: {
        id : req.params.id
      }
    })
    .then(() => {
      console.log("-- correct delete for edit cliente.")
      return res.redirect("/clientes")
    })
    .catch(error => console.log("-- incorrect delete for edit cliente. " + error))
}