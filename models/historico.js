const sequelize = require('./db')
const DataTypes = require('sequelize')

const historico = sequelize.define('historico', {
    id_cliente:{ 
        type : DataTypes.INTEGER,
        references : {
            model: "clientes",
            key : "id"
        }
    },
    
    informacoes: DataTypes.STRING(100),
    data_pagamento: DataTypes.DATEONLY,
    valor: DataTypes.DECIMAL(10,2),
})

module.exports = historico