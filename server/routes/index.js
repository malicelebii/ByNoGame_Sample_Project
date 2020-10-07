const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/Product");

router.post("/stocks", (req, res) => {
  let newProduct = new Product({
    product_id: req.body.product_id,
    name: req.body.name,
    stock: req.body.stock,
    created_date,
  });

  newProduct
    .save()
    .then((data) =>
      res
        .status(200)
        .json({ code: 0, msg: "Ürün başarıyla eklendi", data: data })
    )
    .catch((err) => res.status(400).json({ code: 1, msg: err }));
});

router.get("/stocks", (req, res) => {
  let products = Product.find()
    .then((products) =>
      res
        .status(200)
        .json({ code: 0, msg: "Ürünler başarıyla listelendi", data: products })
    )
    .catch((err) => res.status(400).json({ code: 1, msg: err }));
});

module.exports = router;
