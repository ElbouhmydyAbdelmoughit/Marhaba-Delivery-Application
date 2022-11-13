const express = require("express");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
const tokenVerify = require("../routes/middlewares/verificationToken");
const localStorage = require("local-storage");
const mainFunction = require("./nodemailer");

/* Register User */
const register = async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(401).send("Email already exist");
  const errors = validationResult(req);
  let passwordHash = await bcrypt.hash(req.body.password, 8);
  if (errors.isEmpty()) {
    localStorage("emailCofirmation", req.body.email);
    mainFunction.main();
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    });
    try {
      const userSaved = await user.save();
      res.status(200).send(userSaved);
    } catch (err) {
      console.log(err);
    }
  } else return res.status(404).send(errors);
};

/* Login User */
const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((data) => {
      if (data) {
        if (data.confirm == true) {
          bcrypt.compare(req.body.password, data.password).then((dataLogin) => {
            if (dataLogin) {
              const token = jwt.sign(
                {
                  _id: data._id,
                  name: data.name,
                  role: data.role,
                },
                process.env.TOKEN_SECRET
              );
              localStorage(token);
              res.status(200).send(jwt.verify(token, process.env.TOKEN_SECRET));
            } else res.status(400).send("password incurrect");
          });
        } else return res.status(401).send("Your account is not confirmed");
      } else return res.status(400).send("email incurrect");
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

/* Reset Password */
const reset = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("This Email Not exist");
  }
  try {
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (comparePassword) {
      const newPasswordHash = await bcrypt.hash(req.body.newPassword, 10);

      const newUser = await User.updateOne(
        { email: req.body.email },
        { password: newPasswordHash }
      );
      if (newUser) {
        res.status(200).send("Reset seccussfully");
      }
    } else res.status(400).send("First Password incorrect");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  register,
  login,
  reset,
};
