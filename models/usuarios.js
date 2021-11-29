const sequelize = require('./db')
const DataTypes = require('sequelize')

const usuarios = sequelize.define('usuarios', {
  nome : DataTypes.STRING(50),
  email: DataTypes.STRING(50),
  senha: DataTypes.BLOB,
  admin: {
    type : DataTypes.BOOLEAN,
    default : 0
  },
  permissao: DataTypes.INTEGER
})

module.exports = usuarios