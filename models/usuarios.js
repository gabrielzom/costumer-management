const sequelize = require('./db')
const DataTypes = require('sequelize')

const usuarios = sequelize.define('usuarios', {
  nome : DataTypes.STRING(50),
  email: DataTypes.STRING(50),
  senha: DataTypes.BLOB,
  admin: DataTypes.BOOLEAN,
  permissao: DataTypes.INTEGER
})

module.exports = usuarios