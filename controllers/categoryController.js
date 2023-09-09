const category = require("../models/category");

//View All Categories.
module.exports = getCategories = (req, res)=> {
    category.find()
    .then((categories)=> res.status(200).json({"response": categories}))
    .catch((err)=> res.status(400).json({error: err}));
}