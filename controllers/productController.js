const { Product, detailedProduct } = require("../models/product");
const Category = require("../models/category");

//Get Products based upon Category ID (using CID 1st fetching exact category document to get original objectID).
const getProducts = (req, res) => {
    Category.findOne({ cid: req.params.categoryId })
        .then((foundCategory) => {
            Product.find({ category: foundCategory._id })
                .then((products) => res.status(200).json({ "response": products }))
                .catch((err) => res.status(400).json({ error: err }));
        })
}

//Get Detailed Product based upon Product ID (using PID 1st fetching exact product document to get original objectID).
const getdetailedProduct = (req, res) => {
    Product.findOne({ pid: req.params.productId })
        .then((foundProduct) => {
            detailedProduct.find({ product: foundProduct._id })
                .then((detailproduct) => res.status(200).json({ "response": [foundProduct, detailproduct] }))
                .catch((err) => res.status(400).json({ error: err }));
        })
}

module.exports = { getProducts, getdetailedProduct }