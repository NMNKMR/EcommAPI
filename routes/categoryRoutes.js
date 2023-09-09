var express = require("express");
const router = express.Router();
const {getProducts} = require("../controllers/productController"); //Importing Controller to get all Products based on Category.

router.get("/", require("../controllers/categoryController")); //Get Request to view/get all Categories.

router.get("/:categoryId/products", getProducts);

module.exports = router;