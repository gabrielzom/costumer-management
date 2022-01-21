const usuarios = require('../models/usuarios')
const sendMail = require('../email/sendEmail')

module.exports = (req, res) => {
  usuarios.findAll({
    where: {
      email : req.body.email
    }
  })
    .then((usuario) => {

      if(usuario.length > 0) {
        console.log("-- correct select on usuarios by alter password.")
        sendMail(req, res, usuario[0].email, usuario[0].id)
        return res.redirect("/usuario/sucesso")

      } else {
        console.log("-- correct select on usuarios by alter password.")
        return res.render("recuperar-senha", {msg : "Usuário inexistente."})
      } 
      
    })
    .catch(error => console.log("-- incorrect select on usuarios. " + error))
}