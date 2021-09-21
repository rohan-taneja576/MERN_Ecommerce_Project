const Product = require('../models/product');
const slugify = require('slugify');

exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.files, body: req.body });
  const { name, price, description, quantity, category, createdBy } = req.body;
  let productImages = [];
  if (req.files.length > 0) {
    productImages = req.files.map(file => {
      return { img: file.filename };
    });
  }
  //   console.log({ productImages });
  const product = new Product({
    name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productImages,
    category,
    createdBy: req.user._id,
  });
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (product) {
      return res.status(201).json({ product });
    }
  });
};
