const nodemailer = require("nodemailer")
require("dotenv").config()

module.exports = (req, res) => {

  const user = process.env.MAILGUN_SMTP_LOGIN
  const pass = process.env.MAILGUN_SMTP_PASSWORD

  const transporter = nodemailer.createTransport({

    host : process.env.MAILGUN_SMTP_SERVER,
    port : 587,
    auth : {
      user,
      pass
    }  
  })

  transporter.sendMail({
      from : process.env.USER_EMAIL,
      to : process.env.USER_EMAIL,
      replyTo : "gabriel.marombinha@gmail.com",
      subject: "TESTE EMAIL NODEMAILER",
      text : "FODA DEMAIS !!!"
    })

    .then((info) => {
      res.send(info)
    })

    .catch((error) => {
      res.send(error)
    })
}