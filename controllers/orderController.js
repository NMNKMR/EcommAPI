const Cart = require('../models/cart');
const Orders = require('../models/order');

//Place Order
const placeOrder = async (req, res) => {
    //Request Body contains Cart (Items to be purchased, can be more than one)
    const cartItems = req.body.cart;
    //Extracting only product id, it's price and quantity to create separate array of items.
    const orderItems = cartItems.map((item) => {
        return { product: item.product._id, quantity: item.quantity, price: item.product.price }
    })

    //Calculating Order Total Price.
    const orderTotal = orderItems.reduce((total, current) => total + (current.quantity * current.price), 0);
    //Extracting Product Id of all purchased Products and storing into separate array.
    const productIds = orderItems.map((product) => product.product);

    const newOrder = new Orders({ //Creating New Order.
        user: req.user._id,
        items: orderItems,
        orderTotal: orderTotal,
        paymentMethod: req.body.payment,
        deliveryAddress: req.body.address,
    })

    newOrder.save()
        .then(async (savedOrder) => {
            //In Cart DB : Using productIds, removing only purchased products from user cart.
            await Cart.findOneAndUpdate(
                { user: req.user._id },
                { $pull: { items: { product: { $in: productIds } } } },
            )

            res.status(200).json({ message: "Order Placed Successfully", order: savedOrder })

        })
        .catch(error => res.status(500).json({ error }));

}

//View Order History.
//Returning only required details about orders.
const orderHistory = async (req, res) => {
    try {
        const orders = await Orders.find({ user: req.user._id }).populate('items.product');

        //Creating Customized Order Object to return only few details about each order.
        const ordersHistory = orders.map(order => ({
            orderId: order._id,
            orderTotal: order.orderTotal,
            deliveryStatus: order.deliveryStatus,
            items: order.items.map(item => ({
                product: item.product.title, // Replace product ID with title
                quantity: item.quantity,
                price: item.price,
            })),
            orderDate: order.orderDate
        }));

        res.status(200).json({ orders: ordersHistory });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error occured while fetching Order History" })
    }
}

//View Particular Order Details.
const orderDetails = async (req, res) => {
    try {
        //Fetching Particular Order using OrderID and replacing product id to whole product document.
        const orderById = await Orders.findById(req.params.orderId).populate('items.product');

        //Creating Custom Object by spreading and changing items array (mainly replacing product document with it's title only.)
        const detailedOrder = {
            ...orderById.toObject(), //Converting to JS Object bcoz, orderById is mongoose document not JS Object.
            items: orderById.items.map(item => {
                return { ...item.toObject(), product: item.product.title }
            })
        }

        res.status(200).json({ orderDetail: detailedOrder })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error occured while fetching Order Details" })
    }
}

module.exports = { placeOrder, orderDetails, orderHistory };