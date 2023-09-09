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
- ![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/c28ec0cd-757c-45b2-b1be-bdadb51243e4)

[Full Documentation](#)

### Product Listing

- **Endpoint**: `/categories/:categoryId/products`
- **Method**: GET
- **Description**: Retrieve a list of products based on the category ID.

- **Example GET Request**: `/categories/cat1/products`
- **Response**: 200 OK:- Successful request.
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/3e0e9b28-79d1-46a9-9bcf-d6ef46d22acf)

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
- 1. Cart is Empty:
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/c5f5fe73-f634-4e35-a874-3a4a55d086af)

- 2. Cart Items:
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/7443fa88-b59c-4f7a-ba95-98ae6277baed)

400 Bad Request: {"error": "user cart not found"}
                
- **Endpoint**: `/cart/add/:productId`
- **Method**: POST
- **Description**: Add products to the user's shopping cart.

- **Example POST Request**: `/cart/add/prod1`
- **Response**: 200 OK:- Successful request. 
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/9c8b5de1-d1ae-49e8-a4c1-80d3129fb629)

- **Endpoint**: `/cart/update/:productId`
- **Method**: PUT
- **Description**: Update the quantity of a product in the user's cart.

- **Example PUT Request**: `/cart/update/prod1?update=increase` or `/cart/update/prod1?update=decrease`
- **Response**: 200 OK:- Successful request. 
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/b97c54fc-4898-4e4f-b3d6-77a89f509284)

- **Endpoint**: `/cart/remove/:productId`
- **Method**: DELETE
- **Description**: Remove a product from the user's cart.

- **Example DELETE Request**: `/cart/remove/prod1`
- **Response**: 200 OK:- Successful request. 
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/89a80d20-2c62-4f84-b9de-1a8dd363e7bb)

[Full Documentation](#)

### Order Placement

- **Endpoint**: `/orders/place`
- **Method**: POST
- **Description**: Place an order with products from the user's cart.

- **Example POST Request**: `/orders/place`
- **Request Body**:
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/f0184dc3-13ff-478b-8f8a-aadef0392274)

- **Response**: 200 OK:- Successful request. 
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/91505d05-70cc-4dcd-95f0-d2cd51195963)

[Full Documentation](#)

### Order History

- **Endpoint**: `/orders/history`
- **Method**: GET
- **Description**: Retrieve the order history for authenticated auth.

- **Response**: 200 OK:- Successful request. 
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/f9236892-9a09-4e6b-8d0a-bc9e8479827a)
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/90fa6b06-2409-420a-9773-1e3a4d7ca649)

[Full Documentation](#)

### Order Details

- **Endpoint**: `/orders/:orderId`
- **Method**: GET
- **Description**: Retrieve detailed information about a specific order by its ID.

- **Example GET Request**: `/orders/64fc6d1f73ef02f78822fdda`
- **Response**: 200 OK:- Successful request. 
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/da919920-db9f-43e8-ac2b-b9475dadfc99)

[Full Documentation](#)

### User Registration and Login

- **Endpoint**: `/auth/register`
- **Method**: POST
- **Description**: Register a new user account.
- **Request Body**:
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/a2736143-b681-4146-9ca5-691d3d305e60)

- **Response**: 200 OK:- Successful request.
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/feaaec16-7492-455f-a7c5-ab19207bed77)

- **Endpoint**: `/auth/login`
- **Method**: POST
- **Description**: Log in and obtain a JWT token for API authentication.

- **Request Body**:
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/a2736143-b681-4146-9ca5-691d3d305e60)

- **Response**: 200 OK:- Successful request. 
Token Received
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/db170c4e-3d3f-488b-9026-de066ab96960)

401 Unauthorized:-
1. User Not Found
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/5ed01552-c9ce-4397-97d4-7a433749fa45)

2. Wrong Password
![image](https://github.com/NMNKMR/EcommAPI/assets/89262829/09bc3b4c-6897-454d-820c-498d06afc748)


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

