const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    max: 12,
    trim: true,
  },
  role: {
    type: String,
    enum:["client","livreur"],
    default: "client",
  },
  confirm: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
