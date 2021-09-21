const Cart = require('../models/cart');

exports.addCartItems = (req, res) => {
  Cart.findOne({ user: req.user._id }, (err, cart) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (cart) {
      //if cart already exists update card by quantity
      let product = req.body.cartItems.product;
      const item = cart.cartItems.find(c => c.product == product);
      let condition, update;
      if (item) {
        condition = { user: req.user._id, 'cartItems.product': product };
        update = {
          $set: {
            'cartItems.$': {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          },
        };
      } else {
        condition = { user: req.user._id };
        update = {
          $push: {
            cartItems: req.body.cartItems,
          },
        };
      }

      Cart.findOneAndUpdate(condition, update, (err, _cart) => {
        if (err) {
          return res.status(400).json({ err });
        }
        if (_cart) {
          return res.status(201).json({ _cart: _cart });
        }
      });
    } else {
      //if cart not exist then create a new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((err, cart) => {
        if (err) {
          return res.status(400).json({ err });
        }
        if (cart) {
          return res.status(201).json({ cart: cart });
        }
      });
    }
  });
};
