const moongoose = require('mongoose');
const cartSchema = new moongoose.Schema(
  {
    user: {
      type: moongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cartItems: [
      {
        product: {
          type: moongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = moongoose.model('Cart', cartSchema);
