const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    unique: true,
    default: null,
  },
  pdata: {
    type: Date,
    default: new Date(),
  },
  pimg: {
    type: Blob,
    default: null,
  },
  pmanu: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("ProductSchema", productSchema);
