const nodemailer = require("nodemailer")
require("dotenv").config()

module.exports = (req, res, senha, email) => {

  console.log(req.originalHandler)

  const transporter = nodemailer.createTransport({

    host : process.env.SMTP_HOST,
    port : 587,
    auth : {
      user : process.env.USER_EMAIL,
      pass : process.env.PASS_EMAIL
    }
    
  })

  transporter.sendMail({
      from : "noreply@costumermanagement.online.com",
      to : email,
      replyTo : process.env.USER_EMAIL,
      subject : "Alteração de Senha",
      html :  
        `
        <!DOCTYPE HTML>
        <html>
        <head>
        </head>
        <body>
          <p>Olá, caro usuário.</p>
          <p>Sua senha de acesso ao nosso sistema foi alterada.</p>
          <p>Sua nova senha é: <h5>${senha}</strong></h5>
          <a href="https://costumer-management.herokuapp.com/usuario/login" target="_blank">
            <button>Fazer Login</button>
          </a>
        </body>
        </html>
        
        `
    })

    .then((info) => {
      console.log("Enviado com sucesso." + info)
    })

    .catch((error) => {
      console.log(error)
    })
}