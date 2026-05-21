# Blog App Backend API

This is the backend API service for the **Blog App** (Full-Stack). Built using Node.js, Express, MongoDB, and Cloudinary, it implements robust role-based access control (RBAC), secure JWT authentication via HTTP-only cookies, file uploading, and full CRUD capabilities for articles and user interaction.

---

## 🛠️ Tech Stack & Core Libraries

- **Runtime & Framework**: [Node.js](https://nodejs.org/) (ES Modules) with [Express](https://expressjs.com/) (v5.x)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/) (v9.x)
- **Authentication**: JWT ([jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)) & [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **File Management**: [Multer](https://github.com/expressjs/multer) & [Cloudinary](https://cloudinary.com/) (for profile image hosting)
- **Utilities**: [cookie-parser](https://github.com/expressjs/cookie-parser), [cors](https://github.com/expressjs/cors), and [dotenv](https://github.com/motdotla/dotenv)

---

## 👥 Role-Based Access Control (RBAC)

The application supports three levels of authorization:
1. **`USER`**: Can view published articles, add comments, and update personal account details.
2. **`AUTHOR`**: Can write, edit, delete (soft delete), and manage their own articles.
3. **`ADMIN`**: Can list and search all users and authors, as well as toggle their active status.

---

## 📁 Directory Structure

```text
blog-app-backend/
├── APIs/
│   ├── AdminAPI.js          # Admin dashboard actions (user lists, activate/deactivate)
│   ├── AuthorAPI.js         # Author actions (CRUD articles)
│   ├── UserAPI.js           # Reader/User actions (view articles, comment)
│   └── CommonAPI.js         # Authentication endpoints (register, login, logout, check-auth)
├── config/
│   ├── cloudinaryUpload.js  # Cloudinary SDK client configuration
│   └── multer.js            # Multer disk/memory storage config for uploads
├── middlewares/
│   └── verifyToken.js       # Role-based JWT validation middleware
├── models/
│   ├── ArticleModel.js      # Article & Comment Mongoose schemas
│   └── UserModel.js         # User/Author/Admin Mongoose schema
├── .env                     # App configurations & secrets (ignored by git)
├── .gitignore               # Files excluded from version control
├── server.js                # Server startup & DB connection
└── package.json             # NPM dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed locally.
- A running [MongoDB](https://www.mongodb.com/) server (or MongoDB Atlas connection string).
- A [Cloudinary](https://cloudinary.com/) account for image uploads.

### 2. Environment Setup
Create a `.env` file in the `blog-app-backend/` root directory:
```env
PORT=6000
DB_URL=mongodb://localhost:27017/blog_app_db
SECRET_KEY=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Installation
Install NPM dependencies:
```bash
npm install
```

### 4. Run Server
Start the Express server:
```bash
npm start
```
> [!NOTE]
> The server listens on the port defined in `.env` (default is `6000`). On success, it outputs `DB connected` and `Server listening on 6000....`.

---

## 📡 API Endpoints

### 🔑 Authentication (`/auth`)

* **Register Account**: `POST /auth/users`
  - Accepts multipart form data with fields: `firstName`, `lastName`, `email`, `password`, `role` (`USER` or `AUTHOR`), and file field `profileImageUrl`.
  - Automatically uploads the image to Cloudinary and saves the CDN link.
* **User Login**: `POST /auth/login`
  - Body: `{ "email": "...", "password": "..." }`
  - Response: Set HTTP-Only Cookie `token` and returns user profile without password.
* **Logout**: `GET /auth/logout`
  - Clears `token` cookie.
* **Session Check**: `GET /auth/check-auth`
  - Validates active session using the `token` cookie.
* **Change Password**: `PUT /auth/password`
  - Body: `{ "currentPassword": "...", "newPassword": "..." }`

---

### 📖 User Endpoints (`/user-api`)
*Requires `USER` role token.*

* **Get Active Articles**: `GET /user-api/articles`
  - Returns all published articles with `isArticleActive: true`.
* **Add Comment**: `PUT /user-api/articles`
  - Body: `{ "articleId": "...", "comment": "..." }`
  - Pushes user comment onto comments array.

---

### ✍️ Author Endpoints (`/author-api`)
*Requires `AUTHOR` role token.*

* **Create Article**: `POST /author-api/articles`
  - Body: `{ "title": "...", "category": "...", "content": "...", "author": "author_id" }`
* **Get My Articles**: `GET /author-api/articles`
  - Returns all articles published by the authenticated Author.
* **Edit Article**: `PUT /author-api/articles`
  - Body: `{ "articleId": "...", "title": "...", "category": "...", "content": "..." }`
* **Delete Article (Soft)**: `PATCH /author-api/articles`
  - Body: `{ "articleId": "...", "isArticleActive": false }`

---

### 👑 Admin Endpoints (`/admin-api`)
*Requires `ADMIN` role token.*

* **Get Users**: `GET /admin-api/users`
  - Lists all users with the `USER` role.
* **Get Authors**: `GET /admin-api/authors`
  - Lists all authors with the `AUTHOR` role.
* **Toggle User State**: `PATCH /admin-api/users`
  - Body: `{ "userId": "...", "isUserActive": false }`

---

## 🛡️ Error Handling Middleware
The server provides a centralized error interceptor that handles:
- **Duplicate Key Errors (`11000`)**: Gracefully informs the user if a resource (e.g. Email) already exists.
- **Validation Errors (`ValidationError`)**: Responds with a `400 Bad Request` outlining the fields that failed Mongoose validation.
- **Cast Errors (`CastError`)**: Captures malformed Object IDs and returns an informative `400` status.
