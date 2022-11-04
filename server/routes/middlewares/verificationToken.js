const jwt = require("jsonwebtoken");
const localStorage = require("local-storage");

module.exports = (req, res, next) => {
  const token = localStorage("token");
  if (!token) {
    return res.status(401).send("token not valid");
  }
  try {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
