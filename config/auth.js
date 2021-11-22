const localStrategy = require("passport-local").Strategy;
const usuarios = require("../models/usuarios")
const sequelize = require("../models/db")
require("dotenv").config();

module.exports = (passport) => {
  passport.use(new localStrategy({usernameField : "email", passwordField : "senha"}, (email, senha, done) => {
   usuarios.findOne({
      where : {
        email : email
      }
    })
    .then((usuario) => {
      if (!usuario) {
        return done(null, false, { message : "Usuário não existente" })

      } else {
        sequelize.query(`select cast(aes_decrypt(senha, '${process.env.KEY}') as char) as senha from usuarios where email='${email}'`)
          .then((user) => {
            if (user[0][0].senha == senha) {
              return done(null, usuario)
            
            } else {
              return done(null, false, { message : "Senha incorreta" })
            }
        })
      } 
    }).catch(error => console.log(error))
  }))

  passport.serializeUser((usuario, done) => {
    done(null, usuario.id)
  })

  passport.deserializeUser((id, done) => {
    usuarios.findByPk(id)
      .then((usuario) => {
        if(!usuario) {
          let error = new Error("Não identificado")
          done(error, usuario)

        } else {
          done(null, usuario)
        }
      })
      .catch(error => console.log(error))
  })
}