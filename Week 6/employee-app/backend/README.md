# Employee App Backend API

This is the backend API service for the Employee App (Full-Stack). Built using Node.js, Express, and MongoDB (via Mongoose), it provides a robust REST API for managing employee records, complete with schema validation and error-handling middleware.

---

## 🛠️ Tech Stack & Dependencies

- **Runtime Environment**: [Node.js](https://nodejs.org/) (ES Modules)
- **Web Framework**: [Express](https://expressjs.com/) (v5.x)
- **Database Engine**: [MongoDB](https://www.mongodb.com/)
- **ODM (Object Document Mapper)**: [Mongoose](https://mongoosejs.com/) (v9.x)
- **Cross-Origin Resource Sharing**: [CORS](https://github.com/expressjs/cors)
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Directory Structure

```text
backend/
├── APIs/
│   └── EmployeeAPI.js       # Employee controller & routes
├── models/
│   └── EmployeeModel.js     # Mongoose schema and model definition
├── .env                     # Local environment configurations (ignored by git)
├── .gitignore               # Files excluded from source control
├── req.http                 # HTTP request client draft for manual testing
├── server.js                # Core entry point (server initialization & DB connection)
└── package.json             # Project metadata & dependencies
```

---

## 📋 Schema Definition

### Employee Schema (`models/EmployeeModel.js`)

| Field | Type | Required | Unique | Validation |
| :--- | :--- | :---: | :---: | :--- |
| `name` | `String` | Yes | No | Required field |
| `email` | `String` | Yes | Yes | Must be unique |
| `mobile` | `Number` | Yes | No | Required field |
| `designation` | `String` | Yes | No | Required field |
| `companyName` | `String` | Yes | No | Required field |

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A running [MongoDB](https://www.mongodb.com/) instance (local or Atlas cluster).

### 2. Environment Configuration
Create a `.env` file in the root of the `backend/` directory:
```env
PORT=3000
DB_URL=mongodb://localhost:27017/employee_db
```

### 3. Installation
Install the project dependencies:
```bash
npm install
```

### 4. Running the Server
Start the development server:
```bash
npm start
```
> [!NOTE]
> The server connects to the database specified in `DB_URL` before starting the HTTP listener. If successful, you will see `DB connected successfully` and `Your server is running in port 3000...` in the console.

---

## 📡 API Reference

All routes are prefixed with `/emp-api`.

### 1. Create Employee
- **Endpoint**: `POST /emp-api/employees`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "mobile": 9876543210,
    "designation": "Software Engineer",
    "companyName": "Tech Corp"
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "message": "Employee Created"
  }
  ```

### 2. Get All Employees
- **Endpoint**: `GET /emp-api/employees`
- **Response (200 OK)**:
  ```json
  {
    "message": "All employees",
    "payload": [
      {
        "_id": "60c72b2f9b1d8b2344ef1a2b",
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "mobile": 9876543210,
        "designation": "Software Engineer",
        "companyName": "Tech Corp",
        "__v": 0
      }
    ]
  }
  ```

### 3. Update Employee
- **Endpoint**: `PUT /emp-api/employees/:id`
- **Request Body**: Partial or full fields to update.
- **Response (200 OK)**:
  ```json
  {
    "message": "Employee updated",
    "payload": {
      "_id": "60c72b2f9b1d8b2344ef1a2b",
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "mobile": 9876543211,
      "designation": "Senior Software Engineer",
      "companyName": "Tech Corp",
      "__v": 0
    }
  }
  ```
- **Response (404 Not Found)**:
  ```json
  {
    "message": "Employee not found"
  }
  ```

### 4. Delete Employee
- **Endpoint**: `DELETE /emp-api/employees/:id`
- **Response (200 OK)**:
  ```json
  {
    "message": "Employee Deleted",
    "payload": {
      "_id": "60c72b2f9b1d8b2344ef1a2b",
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "mobile": 9876543211,
      "designation": "Senior Software Engineer",
      "companyName": "Tech Corp",
      "__v": 0
    }
  }
  ```
- **Response (404 Not Found)**:
  ```json
  {
    "message": "Employee not found"
  }
  ```

---

## 🛡️ Error Handling Middleware
The server includes a global, robust express error handler in `server.js` that intercepts thrown exceptions and returns clean, uniform JSON responses:

* **Mongoose validation error (ValidationError)**: Returns a `400 Bad Request` with custom messages defining which schema rule was violated.
* **Mongoose ID Cast Error (CastError)**: Returns a `400 Bad Request` when an invalid MongoDB ObjectID is requested.
* **Fallback server error**: Returns `500 Internal Server Error` with error descriptions.
