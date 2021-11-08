const historico = require('../models/historico')
const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  historico
    .findAll({
      where : {
        id_cliente : req.params.id
      }
    })
    .then((historico) => {
      clientes
        .findAll({
          where : {
            id: req.params.id
          }
        })
        .then((cliente) =>{
          console.log("-- correct select historico for cliente.")
          return res.render("index-teste", {
            cliente : cliente,
            historico : historico
          })
        })
        
    })
    .catch(error => console.log("-- incorrect select historico for cliente. " + error))
}