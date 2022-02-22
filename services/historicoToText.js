const fs = require('fs');
const historicos = require('../models/historico');
const clientes = require('../models/clientes');


module.exports = async (req, res) => {
    let date = new Date()
    let month = "";

    date.getMonth() < 10 ? month = "0" + (date.getMonth() + 1).toString() : month = (date.getMonth() + 1).toString();

    date = `${date.getFullYear()}-${month}-${date.getDate()}`
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

    let fileName = date+'-'+cliente.nome+'-'+cliente.id+'.txt';

    fs.writeFile('./history/'+fileName, text, 'utf-8', (error) => {
        if (error) {
            throw error;
        } else {
            console.log(text);
        }
    })
    
    res.type('text').download(`./history/${fileName}`)
    
} 