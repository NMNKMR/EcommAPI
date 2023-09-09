var express = require("express");
const router = express.Router();
const {getdetailedProduct} = require("../controllers/productController");

router.get("/:productId", getdetailedProduct); //Get Request to view Detailed Product Details based upon Product ID.

module.exports = router;