require('dotenv').config();
//const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

const emailUsername = process.env.EMAIL_USERNAME;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUsername,
    pass: emailPassword
  }
});

const mailOptions = {
  from: emailUsername,
  to: emailUsername,
  subject: 'IMPORTANT: GPUs IN STOCK!!!',
  text: 'LFG' // include screenshot?
};

transporter.sendMail(mailOptions, (error, info) => {
  console.log(emailUsername);
  if (error) {
    console.log(error);
  } else {
    console.log('Email sucessfully sent' + info.response);
  }
});
