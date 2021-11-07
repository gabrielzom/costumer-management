const sequelize = require('./db')
const DataTypes = require('sequelize')

const cliente = sequelize.define('cliente', {
    nome: DataTypes.STRING(40),
    cnpj_cpf: DataTypes.STRING(14),
    telefone: DataTypes.STRING(16),
    email: DataTypes.STRING(50),
    contato: DataTypes.STRING(20),
    ativo : DataTypes.STRING(4),
    data_cadastro : DataTypes.DATEONLY
})

module.exports = cliente