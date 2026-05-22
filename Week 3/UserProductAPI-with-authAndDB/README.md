# User & Product API (with Authentication & MongoDB)

This is a comprehensive REST API built with Node.js, Express, and MongoDB. It extends basic CRUD functionality by introducing robust database persistence and secure user authentication using JSON Web Tokens (JWT) stored in HTTP-Only cookies.

---

## 🛠️ Tech Stack & Dependencies

- **Runtime Environment**: [Node.js](https://nodejs.org/) (ES Modules)
- **Web Framework**: [Express](https://expressjs.com/) (v5.x)
- **Database Engine**: [MongoDB](https://www.mongodb.com/)
- **ODM (Object Document Mapper)**: [Mongoose](https://mongoosejs.com/)
- **Authentication**: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) (JWT) & [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Utilities**: [cookie-parser](https://github.com/expressjs/cookie-parser)

---

## 📁 Project Structure

```text
UserProductAPI-with-authAndDB/
├── APIs/
│   ├── ProductAPI.js        # Controller & routes for products
│   └── UserAPI.js           # Controller & routes for users and auth
├── middlewares/
│   └── verifyToken.js       # JWT validation middleware for protected routes
├── models/
│   ├── ProductModel.js      # Mongoose schema for Products
│   └── UserModel.js         # Mongoose schema for Users
├── req.http                 # Sample HTTP requests for testing endpoints
├── server.js                # Application entry point & DB connection setup
└── package.json             # NPM dependencies & scripts
```

---

## 📋 Schema Definitions

### 1. User Schema (`models/UserModel.js`)
| Field | Type | Required | Unique | Validation |
| :--- | :--- | :---: | :---: | :--- |
| `username` | `String` | Yes | Yes | Length: 4-6 chars |
| `email` | `String` | Yes | Yes | None |
| `password` | `String` | Yes | No | Hashed using bcryptjs |
| `age` | `Number` | No | No | None |

### 2. Product Schema (`models/ProductModel.js`)
| Field | Type | Required | Unique | Validation |
| :--- | :--- | :---: | :---: | :--- |
| `productId` | `Number` | Yes | No | Used for querying, not Mongo `_id` |
| `productName` | `String` | Yes | No | None |
| `price` | `Number` | Yes | No | Min: 10000, Max: 50000 |
| `brand` | `String` | Yes | No | None |

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed locally.
- A running [MongoDB](https://www.mongodb.com/) server. By default, the application connects to `mongodb://localhost:27017/manojdb2`.

### 2. Installation
Install the project dependencies:
```bash
npm install
```

### 3. Running the Server
Start the development server:
```bash
npm start
```
> [!NOTE]
> The server listens on port `3000` and attempts to connect to the local MongoDB database. If successful, you will see `DB connected successfully` and `Your server is running in port 3000...` in the console.

---

## 📡 API Reference

### 🔐 Authentication Flow
This application uses **HTTP-Only Cookies** for secure token storage. When a user logs in successfully, a JWT is signed and returned in a cookie named `token`. This cookie is automatically sent by the browser or REST client for all subsequent requests to protected routes.

### 👤 User Endpoints (`/user-api`)

| Method | Endpoint | Description | Protected | Request Body / Params |
| :--- | :--- | :--- | :---: | :--- |
| `POST` | `/users` | Create a new user | ❌ | `{ username, email, password, age }` |
| `POST` | `/auth` | Login user & issue JWT | ❌ | `{ email, password }` |
| `GET` | `/users` | Get all users | 🔒 | None |
| `GET` | `/users/:id` | Get user by MongoDB ObjectId | 🔒 | Param: `id` (Mongo `_id`) |
| `PUT` | `/users/:id` | Update user by ObjectId | 🔒 | `{ username, email, password, age }` |
| `DELETE` | `/users/:id` | Delete user by ObjectId | 🔒 | Param: `id` (Mongo `_id`) |

### 📦 Product Endpoints (`/product-api`)

| Method | Endpoint | Description | Protected | Request Body / Params |
| :--- | :--- | :--- | :---: | :--- |
| `POST` | `/products` | Create a new product | ❌ | `{ productId, productName, price, brand }` |
| `GET` | `/products` | Get all products | 🔒 | None |
| `GET` | `/products/:id` | Get product by custom ID | 🔒 | Param: `id` (`productId`) |
| `PUT` | `/products/:id` | Update product by custom ID | 🔒 | `{ productId, productName, price, brand }` |
| `DELETE`| `/products/:id` | Delete product by custom ID | 🔒 | Param: `id` (`productId`) |

> [!IMPORTANT]
> The Product endpoints rely on a custom `productId` field (`Number`) for targeting single resources (`GET`, `PUT`, `DELETE`), rather than the auto-generated MongoDB `_id` (`ObjectId`), which is used for targeting User resources.

---

## 🛡️ Error Handling Middleware
The server includes a global Express error handler in `server.js` that intercepts thrown exceptions and returns uniform JSON responses:

* **Mongoose validation error (`ValidationError`)**: Returns a `400 Bad Request` with custom messages defining which schema rule was violated.
* **Mongoose ID Cast Error (`CastError`)**: Returns a `400 Bad Request` when an invalid MongoDB ObjectID format is passed to a parameter.
* **Fallback server error**: Returns `500 Internal Server Error` with error descriptions.
