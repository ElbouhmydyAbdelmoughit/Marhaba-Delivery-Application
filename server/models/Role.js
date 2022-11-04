const mongoose = require("mongoose");

const schemaRole = new mongoose.Schema({
  role: {
    type: String,
  },
});

module.exports = mongoose.model("Role", schemaRole);
