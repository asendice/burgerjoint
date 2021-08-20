const express = require("express");
const router = express.Router();

const { getMenu, getCategory } = require("../controllers/auth");

router.get("/menu", getMenu);
router.get("/category", getCategory);

module.exports = router;
