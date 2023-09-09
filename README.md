# EcommAPI
Ecommerce API to handle all operations such as category view, products listing, cart management, order management and user authentication.

# Ecommerce Backend API Documentation

## Introduction

Welcome to the Ecommerce Backend API documentation. This guide provides detailed information on how to interact with the Ecommerce Backend API, which enables the management of products, categories, user accounts, shopping carts, and orders.

## Table of Contents

1. [Authentication](#authentication)
2. [API Endpoints](-endpoints)
3. [Request and Response Format](#request-and-response-format)
4. [Error Handling](#error-handling)
5. [API Endpoints](-endpoints)
    - [Category Listing](#category-listing)
    - [Product Listing](#product-listing)
    - [Product Details](#product-details)
    - [Cart Management](#cart-management)
    - [Order Placement](#order-placement)
    - [Order History](#order-history)
    - [Order Details](#order-details)
    - [User Registration and Login](#user-registration-and-login)
6. [Database Integration](#database-integration)
7. [Authentication Middleware and Security](#authentication-middleware-and-security)
8. [User Authentication](#user-authentication)
9. [Sample Data](#sample-data)
10. [Additional Features (Optional)](#additional-features-optional)

## Authentication

The Ecommerce Backend API uses JSON Web Tokens (JWT) for user authentication. To access protected endpoints, you must include a valid JWT token in the `Authorization` header of your HTTP requests.

## Request and Response Format

All API requests should be made using the HTTP protocol. JSON is used for both request payloads and response data. The API accepts JSON-formatted data in the request body for POST and PUT requests.

Responses from the API are also in JSON format and include appropriate HTTP status codes.

## Error Handling

The API returns meaningful error messages and standard HTTP status codes to indicate the success or failure of a request. Refer to the specific endpoint documentation for details on possible errors.

## API Endpoints

### Category Listing

- **Endpoint**: `/categories`
- **Method**: GET
- **Description**: Retrieve a list of product categories.

- **Response**: 200 OK:- Successful request.
![Alt text](image.png)

[Full Documentation](#)

### Product Listing

- **Endpoint**: `/categories/:categoryId/products`
- **Method**: GET
- **Description**: Retrieve a list of products based on the category ID.

- **Example GET Request**: `/categories/cat1/products`
- **Response**: 200 OK:- Successful request.
![Alt text](image-1.png)

[Full Documentation](#)

### Product Details

- **Endpoint**: `/products/:productId`
- **Method**: GET
- **Description**: Retrieve detailed information about a specific product by its ID.

- **Example GET Request**: `/products/prod1`
- **Response**: 200 OK:- Successful request. 
                Detailed Product Document.

[Full Documentation](#)

### Cart Management

- **Endpoint**: `/cart`
- **Method**: GET
- **Description**: View the items in the user's shopping cart.

- **Response**: 200 OK:- Successful request.
                1. Cart is Empty:
                ![Alt text](image-2.png)

                2. Cart Items:
                ![Alt text](image-4.png)

                400 Bad Request: {"error": "user cart not found"}
                
- **Endpoint**: `/cart/add/:productId`
- **Method**: POST
- **Description**: Add products to the user's shopping cart.

- **Example POST Request**: `/cart/add/prod1`
- **Response**: 200 OK:- Successful request. 
![Alt text](image-3.png)

- **Endpoint**: `/cart/update/:productId`
- **Method**: PUT
- **Description**: Update the quantity of a product in the user's cart.

- **Example PUT Request**: `/cart/update/prod1?update=increase` or `/cart/update/prod1?update=decrease`
- **Response**: 200 OK:- Successful request. 
![Alt text](image-5.png)

- **Endpoint**: `/cart/remove/:productId`
- **Method**: DELETE
- **Description**: Remove a product from the user's cart.

- **Example DELETE Request**: `/cart/remove/prod1`
- **Response**: 200 OK:- Successful request. 
![Alt text](image-6.png)

[Full Documentation](#)

### Order Placement

- **Endpoint**: `/orders/place`
- **Method**: POST
- **Description**: Place an order with products from the user's cart.

- **Example POST Request**: `/orders/place`
- **Request Body**:
![Alt text](image-7.png)

- **Response**: 200 OK:- Successful request. 
![Alt text](image-8.png)

[Full Documentation](#)

### Order History

- **Endpoint**: `/orders/history`
- **Method**: GET
- **Description**: Retrieve the order history for authenticated auth.

- **Response**: 200 OK:- Successful request. 
![Alt text](image-9.png) ![Alt text](image-10.png)

[Full Documentation](#)

### Order Details

- **Endpoint**: `/orders/:orderId`
- **Method**: GET
- **Description**: Retrieve detailed information about a specific order by its ID.

- **Example GET Request**: `/orders/64fc6d1f73ef02f78822fdda`
- **Response**: 200 OK:- Successful request. 
![Alt text](image-11.png)

[Full Documentation](#)

### User Registration and Login

- **Endpoint**: `/auth/register`
- **Method**: POST
- **Description**: Register a new user account.
- **Request Body**:
![Alt text](image-12.png)

- **Response**: 200 OK:- Successful request.
![Alt text](image-13.png)

- **Endpoint**: `/auth/login`
- **Method**: POST
- **Description**: Log in and obtain a JWT token for API authentication.

- **Request Body**:
![Alt text](image-12.png)

- **Response**: 200 OK:- Successful request. 
Token Received
![Alt text](image-14.png)

                401 Unauthorized:-
1. User Not Found
![Alt text](image-15.png)
2. Wrong Password
![Alt text](image-16.png)


[Full Documentation](#)

## Database Integration

The Ecommerce Backend API is integrated with MongoDB to store and manage product data, user cart information, and order details. The API interacts with the database to perform CRUD operations on products, cart items, and orders.

## Authentication Middleware and Security

Authentication middleware is implemented to secure sensitive API endpoints, such as cart management and order placement. Only authenticated auth are allowed to access these endpoints.

## User Authentication

User authentication is achieved using JSON Web Tokens (JWT). Users can register, log in, and obtain a token to authenticate API requests.

## Sample Data

For testing purposes, sample data can be provided using seed.js for categories and products. We can add or modify this data as needed.
Also, MongoDB URL is used as local, need to be change for Cloud URL. Both URL and Secret Key need to placed in .env file.

[Sample Data Documentation](#)

## Additional Features (Optional)

- Rate Limiting: Optional rate limiting can be added to prevent abuse and maintain server stability.

