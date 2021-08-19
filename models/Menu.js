const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    calories: {
      type: String,
    },
    img: {
      type: String,
    },
    ingredients: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "MenuItem",
  }
);

module.exports = mongoose.model("Menu", menuSchema);
