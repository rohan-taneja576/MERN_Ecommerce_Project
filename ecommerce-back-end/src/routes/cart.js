const express = require('express');
const { userMiddleware, requireSignin } = require('../common-middleware');
const { addCartItems } = require('../controller/cart');
const router = express.Router();

router.post(
  '/user/cart/addtocart',
  requireSignin,
  userMiddleware,
  addCartItems
);

module.exports = router;
