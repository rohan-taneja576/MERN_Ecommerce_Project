const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        messsage: 'Admin already registered',
      });
    }

    const { firstName, lastName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
      role: 'admin',
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: 'something went wrong',
        });
      }
      if (data) {
        return res.status(201).json({
          message: 'Admin created successfully',
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(400).json({ err });
    if (user) {
      if (user.authenticate(req.body.password) && user.role === 'admin') {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: '1h',
          }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: 'Invalid Password',
        });
      }
    } else {
      return res.status(400).json({ message: 'something went wrong ' });
    }
  });
};
