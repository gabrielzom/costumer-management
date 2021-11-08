const clientes = require('../models/clientes')
const historico = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  historico
    .destroy({
      where : {
        id_cliente : req.params.id
      }
    })

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