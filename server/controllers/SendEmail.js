const nodemailer = require("nodemailer");
const localStorage = require("local-storage");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/User");

/* Send Email  */
const main = () => {
  const email = localStorage("emailCofirmation");
  const token = jsonwebtoken.sign({ email }, process.env.TOKEN_SECRET);
  const link = "http://localhost:8080/api/auth/confirmation/" + token;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "elbouhmydyabdelmoughit@gmail.com",
      pass: "ecpyfthmfryhwqex",
    },
    secure: true,
  });

  let info = transporter.sendMail({
    from: "'ElbouhmydyAbdelmoughit'<elbouhmydyabdelmoughit@gmail.com>",
    to: localStorage("emailCofirmation"),
    subject: "Confirmation Password",
    text: "Hello world",
    html: "<b>Hello <a href=" + link + ">confirm it</a></b>",
  });
};

/* Confirmation Register */
const confirmation = (req, res) => {
  const token = req.params.token;
  const tokenVerif = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
  console.log(tokenVerif);
  User.findOneAndUpdate({ email: tokenVerif.email }, { confirm: true })
    .then(() => {
      res.status(201).send("Your account is confirmed");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { main, confirmation };
