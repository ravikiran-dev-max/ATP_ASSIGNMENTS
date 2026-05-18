# 🌐 Express Mini APIs (Users & Products)

This project demonstrates how to build **modular REST APIs** using Express.js.  
It includes two separate routers: one for **users** and one for **products**, each with full CRUD functionality.

---

## 📂 File Structure
APIS
- `usersapi.js` → User API routes
- `productApi.js` → Product API routes
- `server.js` → Main Express server (mounts both routers)

---

## 🚀 Concepts Covered

### User API (`userapp`)
- **GET `/user-api/users`** → Fetch all users.
- **GET `/user-api/users/:id`** → Fetch single user by ID.
- **POST `/user-api/users`** → Create a new user.
- **PUT `/user-api/users/:id`** → Update an existing user by ID.
- **DELETE `/user-api/users/:id`** → Delete user by ID.

### Product API (`productApp`)
- **GET `/product-api/products`** → Fetch all products.
- **GET `/product-api/products/:id`** → Fetch single product by ID.
- **POST `/product-api/products`** → Create a new product.
- **PUT `/product-api/products/:id`** → Update product by ID.
- **DELETE `/product-api/products/:id`** → Delete product by ID.
- **GET `/product-api/products/brand/:brand`** → Filter products by brand.

---

## 📝 Usage

1. Install dependencies:
   ```bash
   npm install express
