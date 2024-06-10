const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    unique: true,
    default: null,
  },
  pdate: {
    type: Date,
    default: new Date(),
  },
  // pimg: {
  //   type: String,
  //   default: null,
  // },
  pmanu: {
    type: String,
    default: null,
  },
  role: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model("Products", productSchema);
