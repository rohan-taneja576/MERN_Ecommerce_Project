const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/auth');
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);

module.exports = router;
