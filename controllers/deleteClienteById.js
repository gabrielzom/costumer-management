const clientes = require('../models/clientes')
const historicos = require('../models/historico')
const { Op } = require('sequelize');
const sequelize = require('sequelize');


module.exports = (req, res) => {

  let status = null;

  historicos
    .findAll({
      where : {
        id_cliente : Number(req.params.id)
      }
    })
    .then(historico => {
      if(historico.length != 0) {
        res.redirect("/clientesnotdelete")
          
      } else {
        clientes
          .destroy({
            where: {
              id : req.params.id
            }
          })
          .then(() => {
            status = 200;
            console.log("-- correct delete for edit cliente.")
            return res.redirect("/clientes", )
          })
          .catch(error => {
            status = 400;
            console.log("-- incorrect delete for edit cliente. " + error)
          })
            }
          })

}