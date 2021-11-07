require("dotenv").config();
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.HOST_USERNAME, process.env.HOST_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:'mysql'
})

sequelize
    .authenticate()
    .then(() => console.log('-- connection estabilished'))
    .catch(() => console.log('-- connection not found'))

sequelize.sync()

module.exports = sequelize