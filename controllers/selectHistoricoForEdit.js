const historico = require('../models/historico')
const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  historico
    .findByPk(req.params.id)
    .then((historico) => {
      clientes
        .findByPk(historico.id_cliente)
        .then((cliente) => {
          return res.render("editar-historico", {
            cliente : cliente,
            historico : historico
          })
        })
    })
}
