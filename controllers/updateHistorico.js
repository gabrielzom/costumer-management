const historico = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  let id_cliente = req.body.id_cliente;

  historico
  .update(req.body, {
    where : {
      id : req.params.id
    }
  })
    .then((historico) => {
      console.log("-- correct update on clientes.")
      return res.redirect(`/clientes/historico/${id_cliente}?`)
    })
    .catch(error => 
      console.log("-- incorrect update on clientes. " + error))
}