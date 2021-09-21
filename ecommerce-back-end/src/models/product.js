const moongoose = require('mongoose');

const productSchema = new moongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    offer: { type: Number },
    productImages: [
      {
        img: {
          type: String,
        },
      },
    ],
    reviews: [
      {
        userId: {
          type: moongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        review: String,
      },
    ],
    category: {
      type: moongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    createdBy: {
      type: moongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = moongoose.model('Product', productSchema);
