const Menu = require("../models/Menu");
const Category = require("../models/Category");

exports.getMenu = (req, res) => {
  Menu.find().then((item) => {
    if (!item) {
      return res.status(404).json({
        errors: [{ item: "No Menu Items Found" }],
      });
    } else {
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

