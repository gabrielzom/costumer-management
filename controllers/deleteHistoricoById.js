const historico = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  let id_cliente = req.body.id_cliente;

  historico
    .destroy({
      where : {
        id : req.params.id
      }
    })
    .then(() => {
      console.log("-- correct delete historico for edit cliente.")
      return res.redirect(`/clientes/historico/${id_cliente}?`)
    })
    .catch(error => console.log("-- incorrect delete historico for edit cliente. " + error))

}