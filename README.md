# E-Commerce Management System (ReactJS + Laravel)

## Introduction

This project is an **e-commerce management system** built with a **separated frontend–backend architecture**.
The **Laravel backend** exposes RESTful APIs, while the **ReactJS frontend** consumes these APIs to display data and manage user interactions.

The backend handles business logic, data validation, and database operations with **MySQL**, while the frontend focuses on providing a responsive and interactive user interface.

The goal of this project is to simulate the core functionalities of a modern **e-commerce platform** while practicing **API integration, state management, and full-stack communication**.

---

# Features

## Product Management

* Create, update, delete, and retrieve products
* Display product list
* View product details

## Product Search & Filtering

* Search products by keyword
* Filter products by category or attributes

## Shopping Cart

* Add products to cart
* Update product quantity
* Remove products from cart

## Order Processing

* Create and manage orders
* Display order information

## Blog Reviews

* Add ratings and comments for blogs
* Display customer feedback

---

# System Architecture

This project follows a **separated frontend–backend architecture**.

```
ReactJS (Frontend)
        |
        |  HTTP Requests (REST API)
        |
Laravel Backend
        |
        |
MySQL Database
```

### Backend (Laravel)

* Provides RESTful APIs
* Handles business logic
* Performs database queries
* Validates user input
* Processes orders and cart data

### Frontend (ReactJS)

* Fetches data from APIs
* Displays products and UI components
* Handles user interactions
* Sends data to backend APIs

---

# Tech Stack

### Frontend

* ReactJS
* Axios (API communication)
* React Hooks
* CSS / Bootstrap (or your UI library)

### Backend

* Laravel
* RESTful API

### Database

* MySQL

---

# API Communication Flow

1. ReactJS sends a request to the Laravel API.
2. Laravel processes the request and interacts with the MySQL database.
3. The API returns a JSON response.
4. ReactJS updates the UI based on the received data.

---

# Future Improvements

* User authentication (JWT / Laravel Sanctum)
* Admin dashboard
* Payment integration
* Product recommendation system
* Performance optimization

---

# Author

**La Dang Huy**

Frontend Developer (ReactJS) / Backend Developer (Laravel)
