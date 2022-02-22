const fs = require('fs');
const historicos = require('../models/historico');
const clientes = require('../models/clientes');
const http = require('http');
var path = require('path');
var mime = require('mime');

module.exports = async (req, res) => {
    let date = new Date()
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    let text = "";

    const historico = await historicos.findAll({ 
        where: {
            id_cliente : req.params.id
        }
    })

    const cliente = await clientes.findByPk(req.params.id)
    text+=`${cliente.nome};${date}\n`
    
    historico.forEach(row => {
        text+=`${row.dataValues.data_pagamento};${row.dataValues.informacoes};${row.dataValues.valor}\n`
    })

    console.log(text);

    let fileName = date+'-historico-'+cliente.nome;

    fs.writeFile(fileName, text, (error) => {
        if (error) {
            throw error;
        } else {
            console.log("success !");
        }
    })

    res.sendFile(path.resolve('./', fileName))
} 