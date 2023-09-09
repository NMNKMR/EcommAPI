const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  pid: {type: String, required: true},
  description: { type: String },
  availability: { type: Boolean, default: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});
  
const Product = mongoose.model('Product', productSchema);

const detailedProductSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    detail: {}// fields for detailed Product information
});

const detailedProduct = mongoose.model('DetailedProduct', detailedProductSchema);

module.exports = {detailedProduct, Product};