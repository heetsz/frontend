require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "heets4307@gmail.com",
    pass: process.env.GMAIL   //app password
  }
});

async function sendMail(to, subject, text, html) {
  const info = await transporter.sendMail({
    from: '"Cars Marketplace" <heets4307@gmail.com>', 
    to, // list of receivers
    subject,
    text, 
    html 
  });
}


module.exports = {sendMail}