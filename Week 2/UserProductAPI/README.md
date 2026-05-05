# User & Product REST API (In-Memory)

A simple RESTful API built with Node.js and Express to manage Users and Products. This project uses in-memory arrays to simulate database operations (CRUD).

## Features
- **User Management API**:
  - `GET /users` - Retrieve all users.
  - `GET /users/:id` - Retrieve a specific user by ID.
  - `POST /users` - Create a new user.
  - `PUT /users` - Update an existing user.
  - `DELETE /users/:id` - Delete a user by ID.
- **Product Management API**:
  - `GET /products` - Retrieve all products.
  - `GET /products/:brand` - Retrieve a product by its brand.
  - `POST /products` - Create a new product.
  - `PUT /products` - Update an existing product.
  - `DELETE /products/:id` - Delete a product by ID.

## Project Structure
- `server.js`: The main Express application that defines routes and handles the in-memory arrays.
- `req.http`: A file containing HTTP requests (using the REST Client extension) to test all API endpoints easily.

## Usage
1. Install dependencies (Express):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   *(or run `node server.js`)*
3. Use the `req.http` file or tools like Postman/Thunder Client to test the endpoints on `http://localhost:3000`.
