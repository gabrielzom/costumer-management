const historico = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  let valor = (req.body.valor).replace(".","")
  valor = valor.replace(",",".")
  valor = Number(valor)

  let id_cliente = req.body.id_cliente;

  historico
  .update({
    informacoes : req.body.informacoes,
    data_pagamento : req.body.data_pagamento,
    valor : valor
    
    },
    { 
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