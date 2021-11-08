const historico = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  historico.create({
    id_cliente : req.params.id,
    informacoes : req.body.informacoes,
    data_pagamento : req.body.data_pagamento,
    valor : req.body.valor
  })
    .then(() => {
      console.log("-- correct insert historico.")
      return res.redirect(`/clientes/historico/${req.params.id}?`)
    })
    .catch(error => console.log("-- incorrect insert historico. " + error))
}