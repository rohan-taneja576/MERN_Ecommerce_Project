const moongoose = require('mongoose');

const categorySchema = new moongoose.Schema(
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
    parentID: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = moongoose.model('Category', categorySchema);
