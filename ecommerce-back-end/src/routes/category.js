const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();
const { addCategory, getCategory } = require('../controller/category');

router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getCategory', getCategory);

module.exports = router;
