const Category = require('../models/category');
const slugify = require('slugify');

function createCategory(categories, parentID = null) {
  //console.log(categories);
  const categoryList = [];
  let category;
  if (parentID == null) {
    category = categories.filter(items => items.parentID == undefined);
  } else {
    category = categories.filter(items => items.parentID == parentID);
  }
  // console.log(category);
  for (let cat of category) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      children: createCategory(categories, cat._id),
    });
  }
  return categoryList;
}

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.file) {
    categoryObj.categoryImage =
      process.env.API + '/public/' + req.file.filename;
  }
  if (req.body.parentID) {
    categoryObj.parentID = req.body.parentID;
  }

  const cat = new Category(categoryObj);
  cat.save((err, category) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    if (category) {
      return res.status(201).json({
        message: category,
      });
    }
  });
};

exports.getCategory = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      return res.status(400).json({ message: 'error' });
    }
    if (categories) {
      const categoryList = createCategory(categories);
      res.status(200).json({
        categoryList,
      });
    }
  });
};
