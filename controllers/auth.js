const Menu = require("../models/Menu");
const Category = require("../models/Category");
const Test = require("../models/Test");

exports.getMenu = (req, res) => {
  console.log(Menu.find())
  Menu.find().then((item) => {
    console.log(item, "menuItem");
    if (!item) {
      return res.status(404).json({
        errors: [{ item: "No Menu Items Found" }],
      });
    } else {
      console.log(item, "menuItem");
      return res.status(200).json({
        success: true,
        result: item,
      });
    }
  }); 
};

exports.getCategory = (req, res) => {
  Category.find().then((item) => {
    if (!item) {
      return res.status(404).json({
        errors: [{ item: "No Categories Found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        result: item,
      });
    }
  });
};

exports.getTest = (req, res) => {
  Test.find().then((item) => {
    if (!item) {
      return res.status(404).json({
        errors: [{ item: "No Categories Found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        result: item,
      });
    }
  });
};
