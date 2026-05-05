# User & Product API (with Authentication & MongoDB)

A fully-featured REST API built with Node.js, Express, and MongoDB. This project extends basic CRUD functionality by introducing database persistence and secure user authentication.

## Key Features
- **Database Integration (MongoDB)**: Uses Mongoose ODM to define structured schemas for `Users` and `Products`, ensuring data validation and persistence.
- **User Authentication**: Secure user registration and login workflows.
- **Protected Routes**: Middleware integration to secure sensitive endpoints, requiring valid authentication.
- **Structured Architecture**: Clear separation of concerns with dedicated folders for routing, schemas, and custom logic.

## Project Structure
- `server.js`: Application entry point and database connection setup.
- `APIs/`: Contains route handlers (`UserAPI.js`, `ProductAPI.js`).
- `models/`: Mongoose schemas (`UserModel.js`, `ProductModel.js`).
- `middlewares/`: Custom Express middlewares (e.g., for token verification and error handling).
- `req.http`: Sample HTTP requests for testing the API endpoints using the REST Client extension.

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Ensure you have your MongoDB connection string configured (if required in `server.js`).
3. Start the server:
   ```bash
   npm start
   ```
   *(or use `node server.js`)*
