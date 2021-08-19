const express = require("express");
const router = express.Router();

const { getMenu, getCategory, getTest } = require("../controllers/auth");

router.get("/menu", getMenu);
router.get("/category", getCategory);
router.get("/test", getTest);

module.exports = router;
