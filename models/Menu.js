const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    // },
    // price: {
    //   type: String,
    //   required: true,
    // },
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
