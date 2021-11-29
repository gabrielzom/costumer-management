const express = require("express");
const send = express.Router();
const sendEmail = require("../email/sendEmail")

send.get("/", sendEmail)

module.exports = send