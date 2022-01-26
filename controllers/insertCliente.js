const clientes = require('../models/clientes')
const { Op } = require('sequelize');
const sequelize = require('sequelize');

module.exports = (req, res) => {

  let cnpjCpfWithMaskArray = null;
  let cnpjCpfWithOutMaskArray = null;
  let cnpjCpfWithOutMask = '';

  cnpjCpfWithMaskArray = (req.body.cnpj_cpf).split("");
  cnpjCpfWithOutMaskArray = cnpjCpfWithMaskArray.filter(isFinite);

  cnpjCpfWithOutMaskArray.forEach(digit => {
    cnpjCpfWithOutMask += digit;
  });

  clientes.create({
    nome : req.body.nome,
    cnpj_cpf : cnpjCpfWithOutMask,
    telefone : req.body.telefone,
    email : req.body.email,
    contato : req.body.contato,
    ativo : req.body.ativo,
    data_cadastro : req.body.data_cadastro

  })

    .then(() => {
      console.log("-- correct insert cliente.")
      return res.redirect("/clientes")
    })
    .catch(error => console.log("-- incorrect insert cliente. " + error))
}