const nodemailer = require("nodemailer")
require("dotenv").config()

module.exports = (req, res) => {

  const transporter = nodemailer.createTransport({

    host : process.env.SMTP_HOST,
    port : 465,
    auth : {
      user : process.env.USER_EMAIL,
      pass : process.env.PASS_EMAIL
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