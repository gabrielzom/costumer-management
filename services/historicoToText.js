const fs = require('fs');
const historicos = require('../models/historico');
const clientes = require('../models/clientes');

module.exports = async (req, res) => {
    let date = new Date()
    let month = "";
    let text = "";

    const cliente = await clientes.findByPk(req.params.id)

    date.getMonth() < 10 ? month = "0" + (date.getMonth() + 1).toString() : month = (date.getMonth() + 1).toString();
    date = `${date.getFullYear()}-${month}-${date.getDate()}`
    text+=`${cliente.nome};${date}\n`
    
    const historico = await historicos.findAll({ 
        where: { id_cliente : req.params.id }
    })
    historico.forEach(row => {
        text+=`${row.dataValues.data_pagamento};${row.dataValues.informacoes};${row.dataValues.valor}\n`
    })

    let fileName = `${date}-${cliente.nome}-${cliente.id}.txt`;

    fs.writeFileSync('./history/'+fileName, text, 'utf-8', (error) => {
        if (error) {
            throw error;
        } else {
            console.log("-- complete download on history");
        }
    })
    
    res.type('text').download(`./history/${fileName}`)
    
} 