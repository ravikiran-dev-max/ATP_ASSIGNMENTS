# ⚙️ CAPSTON Backend

The **backend** of CAPSTON is built with **Node.js + Express + MongoDB**.  
It handles authentication, role‑based access, and CRUD operations for **Users, Authors, and Admins**.

---

## 📂 Files & Folders

- **APIs/** → Route handlers for User, Author, Admin, and Common operations  
- **config/** → Database connection and environment setup  
- **middlewares/** → JWT verification & role‑based authorization  
- **models/** → Mongoose schemas for Users and Articles  
- **server.js** → Entry point, initializes server & connects to database  

---

## 🔗 APIs

### USER API
- Manages **CRUD operations** for users  
- Endpoints: `POST`, `PUT`, `DELETE`, `GET`  

### ADMIN API
- Manages **Users & Authors**  
- Endpoints: `GET`, `PUT`, `DELETE`  
- Can **delete users and authors**  

### COMMON API
- Handles **authentication & login** for both Users and Admins  

### AUTHOR API
- Manages **CRUD operations** for articles  
- Endpoints: `POST`, `PUT`, `DELETE`  

---

## 🛡️ Middlewares

- Verifies **JWT tokens**  
- Allocates features based on **roles (USER, AUTHOR, ADMIN)**  
- Protects routes from unauthorized access  

---

## 🌐 Server

- Creates the **Express server**  
- Connects to **MongoDB Atlas**  
- Mounts API routes under `/api/...`  

---

## 📖 Overview

- Accepts requests from the **frontend client**  
- Responds according to **API routes**  
- Stores all updates made by Users or Authors in the **database**  
- Ensures **secure, role‑based operations**  

---

## ⚙️ Setup Instructions

1. **Install dependencies**
   ```bash
   cd backend
   npm install
