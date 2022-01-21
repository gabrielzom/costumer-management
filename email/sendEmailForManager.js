const nodemailer = require("nodemailer")
require("dotenv").config()

module.exports = (req, res, email, senha) => {

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
          <p>O gerente da aplicação alterou sua senha.</p>
          <p>Sua nova senha é : <strong>${senha}</strong></p>
          
          <a href="http://localhost:9090/usuario/login" target="_blank">
            <button>Fazer login</button>
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