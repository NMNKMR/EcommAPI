const express = require('express');
const router = express.Router();
//Importing Order Controllers.
const {placeOrder, orderDetails, orderHistory} = require('../controllers/orderController');

router.post('/place', placeOrder); //Post Request to place order, {body of Post Request contains all product details.}

router.get('/history', orderHistory); //Get Request to View order history.

router.get('/:orderId', orderDetails); //Get Request to view particular order based upon Order ID.

module.exports = router;