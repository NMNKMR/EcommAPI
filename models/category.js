const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }, //Category Name
  cid: {type: String, requires: true} //CID to send over API call (dynamic routes).
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;