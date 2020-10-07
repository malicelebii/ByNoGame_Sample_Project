const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: { type: Number, required: true },
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  created_date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", productSchema);
