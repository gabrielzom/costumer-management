const usuarios = require('../models/usuarios')

module.exports = (req, res) => {
  usuarios.findAll()
    .then((usuarios) => {
      console.log("-- correct select on usuarios.")
      return res.render("gerenciar-usuarios", { usuarios : usuarios })
    })
    .catch(error => console.log("-- incorrect select on usuarios. " + error))
}