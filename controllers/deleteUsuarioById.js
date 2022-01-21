const usuarios = require('../models/usuarios')

module.exports = (req, res) => {
  usuarios
    .destroy({
      where : {
        id : req.params.id
      }
    })
    .then(() => {
      console.log("-- correct delete usuario.")
      return res.redirect(`/usuario/`)
    })
    .catch(error => console.log("-- incorrect delete usuario. " + error))

}