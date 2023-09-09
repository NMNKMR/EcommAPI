const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, //Product Document ID.
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, // Price per item
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, //User Document ID.
  items: [orderItemSchema], //Array Of Objects containing product info.
  orderTotal: { type: Number, required: true }, // Total price for the entire order
  deliveryStatus: { type: String, enum: ['In Progress', 'Shipped', 'Delivered'], default: 'In Progress' },
  paymentMethod: { type: String, required: true },
  deliveryAddress: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  orderDate: { type: Date, default: Date.now },
  deliveryDate: {type: Date}
  // Other relevant dates can be added, like paymentDate, shipmentDate, deliveryDate
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;