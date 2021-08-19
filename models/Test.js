const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "tests",
  }
);

module.exports = mongoose.model("Test", testSchema);