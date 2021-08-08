const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Category = require('../models/category');

router.post('/category/create', (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentID) {
    categoryObj.parentID = req.body.parentID;
  }

  const cat = new Category(categoryObj);
  cat.save((err, category) => {
    if (err) {
      return res.status(400).json({
        message: 'error',
      });
    }
    if (category) {
      return res.status(201).json({
        message: category,
      });
    }
  });
});

module.exports = router;
