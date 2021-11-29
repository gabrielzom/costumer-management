const usuarios = require('../models/usuarios')
const sequelize = require('../models/db');

module.exports = (req, res) => {

  usuarios
    .findByPk(req.params.id)
    .then((usuario) => {
      sequelize.query(`SELECT CAST(AES_DECRYPT(senha, '${process.env.KEY}') AS CHAR) AS senha FROM usuarios WHERE email='${usuario.email}'`)
        .then((result) => {
          res.render("alterar-senha", {
            senha : result[0][0].senha,
            usuario : usuario,
            message : ''
          })
        })
    })
}