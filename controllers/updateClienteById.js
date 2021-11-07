const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {
  clientes
  .update(req.body, {
    where : {
      id : req.params.id_cliente
    }
  })
    .then(() => {
      console.log("-- correct update on clientes.")
      return res.redirect("/clientes")
    })
    .catch(error => 
      console.log("-- incorrect update on clientes. " + error))
}