const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
