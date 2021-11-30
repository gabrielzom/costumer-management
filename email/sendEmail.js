const nodemailer = require("nodemailer")
const mg = require('nodemailer-mailgun-transport')
require("dotenv").config()

module.exports = (req, res) => {

  let auth = {
    auth : {
      api_key : "f5321727ba69fbfbe9b15f821e1e23a3",
      domain : "sandbox1c8e049178cf41a787cc6193ccee55fd.mailgun.org"
    }
  }

  const transporter = nodemailer.createTransport({

    host : process.env.SMTP_HOST,
    port : 587,
    auth : {
      user : process.env.USER_EMAIL,
      pass : process.env.PASS_EMAIL
    }
    
  })

  transporter.sendMail({
      from : "gabrielnascimento_17@hotmail.com",
      to : "gabrielnascimento_17@hotmail.com",
      replyTo : process.env.USER_EMAIL,
      subject : "no reply",
      html :  
        `
        <!DOCTYPE HTML>
        <html>
        <head>
        </head>
        <body>
          <a href="https://costumer-management.herokuapp.com/usuario/login" target="_blank">
            <button>Confirmar e-mail e fazer Login</button>
          </a>
        </body>
        </html>
        
        `
    })

    .then((info) => {
      res.send(info)
    })

    .catch((error) => {
      res.send(error)
    })
}