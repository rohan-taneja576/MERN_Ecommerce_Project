const { check, validationResult } = require('express-validator');

exports.validateSignUpRequest = [
  check('firstName').notEmpty().withMessage('firstName is required'),
  check('lastName').notEmpty().withMessage('lastName is required'),
  check('email').isEmail().withMessage('valid email is required'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at lease 5 character long'),
];

exports.validateSignInRequest = [
  check('email').isEmail().withMessage('valid email is required'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at lease 5 character long'),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({
      message: errors.array()[0].msg,
    });
  }
  next();
};
