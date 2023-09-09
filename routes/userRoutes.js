const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken'); //JWT to Create Token.
//Importing UserModel and Cart.
const UserModel = require('../models/user');
const Cart = require('../models/cart');

router.post('/register', (req, res, next) => {
    //Creating User.
    const user = new UserModel({
        email: req.body.username,
        password: req.body.password,
    })

    user.save()
        .then((saveUser) => {
            const userCart = new Cart({
                user: saveUser._id,
                items: [],
            })

            userCart.save() //Creating Cart with Empty Items for Registered User (1st time).

            res.json({
                message: "Signup Successfull",
                user: saveUser,
                cart: userCart,
            });
        }).catch((err) => console.log(err))
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => { //Passport Authentication for Login Route.
        if (err) {
            return res.status(500).json({ error: 'An error occurred while attempting to log in.' });
        }

        if (!user) {
            return res.status(401).json({ error: info }); // Custom error message
        }

        // If authentication is successful, generate and return a JWT token
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, 'ecommapitokenbyjsonwebtokenandpj');
        return res.json({token});
    })(req, res, next);
});


module.exports = router;