const nodemailer = require("nodemailer")
require("dotenv").config()

module.exports = (req, res, email, id) => {
  id = Number(id)
  id *= Number(process.env.SHA)
  id += Number(process.env.SHA)

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
          <p>Você solicitou a redefinição de senha.</p>
          <p>Clique no botão abaixo para redefinir sua senha :</p>
          <a href="https://costumer-management.herokuapp.com/usuario/redefinir/${id}" target="_blank">
            <button>Alterar senha</button>
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