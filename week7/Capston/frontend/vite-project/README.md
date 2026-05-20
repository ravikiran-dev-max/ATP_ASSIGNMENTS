# 🎨 CAPSTON Frontend

The **frontend** of CAPSTON is built with **React + Vite + TailwindCSS**.  
It provides a responsive, role‑based interface for **Users, Authors, and Admins** to interact with the platform.

---

## 📂 Files & Folders

- **src/components/** → Reusable UI components (Navbar, Footer, Forms)   
- **vite.config.js** → Vite configuration  
- **tailwind.config.js** → TailwindCSS setup  

---

## 🔗 components & Routes

### User Pages
- **Signup/Login** → Register or authenticate as User  
- **Articles** → View published articles  
- **Comments** → Add comments on articles  

### Author Pages
- **Signup/Login** → Register or authenticate as Author  
- **Dashboard** → Create, edit, delete, and re‑upload own articles  
- **Article Editor** → Rich text editor for writing articles  

### Admin Pages
- **Login** → Authenticate as Admin  
- **User Management** → Activate/deactivate users & authors  
- **Article Moderation** → Manage articles across the platform  

---

## 🎨 Styling

- **TailwindCSS** for utility‑first responsive design  

---

## 🌐 Overview

- Frontend sends requests to backend APIs (`/user-api`, `/author-api`, `/admin-api`)  
- Displays data dynamically with **React hooks & context**  
- Manages authentication state with **JWT tokens** stored securely  
- Provides role‑based UI (User, Author, Admin)  

---

## ⚙️ Setup Instructions

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
