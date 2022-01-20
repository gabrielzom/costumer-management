const historico = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  var valor = null;

  if (req.body.valor == "" || req.body.valor == null) {
    valor = 0.00;

  } else {
    valor = (req.body.valor).replace(".","")
    valor = valor.replace(",",".")
    valor = Number(valor)

  }

  historico.create({
    id_cliente : req.params.id,
    informacoes : req.body.informacoes,
    data_pagamento : req.body.data_pagamento,
    valor : valor
  })
    .then(() => {
      console.log("-- correct insert historico.")
      return res.redirect(`/clientes/historico/${req.params.id}?`)
    })
    .catch(error => console.log("-- incorrect insert historico. " + error))
}