const express = require("express");
const Role = require("../models/Role");

const addRole = async (req, res) => {
  const role = new Role({
    role: req.body.role,
  });
  try {
    const roleSaved = await role.save();
    res.status(200).send(roleSaved);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = addRole;
