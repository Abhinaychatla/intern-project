# 🚀 Frontend Developer Intern Assignment

A full-stack scalable web application built with authentication, protected routes, and a dashboard with CRUD operations.

---

## 📌 Project Overview

This project is a scalable web application that includes:

- User Authentication (JWT-based)
- Protected Dashboard
- CRUD operations on a sample entity (Tasks)
- Client-side & Server-side validation
- Secure password hashing
- RESTful API integration
- Responsive UI design

---

## 🛠️ Tech Stack

### Frontend
- React.js / Next.js
- Tailwind CSS / Bootstrap / Material UI
- Axios
- React Router (if React)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (password hashing)
- CORS & dotenv

---

## 🔐 Features Implemented

### Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected routes
- Logout functionality

### Dashboard
- Fetch logged-in user profile
- Create, Read, Update, Delete tasks
- Search & filter functionality
- Responsive design

### Security
- Password hashing using bcrypt
- JWT token validation middleware
- Environment variable usage
- Proper error handling

## 📂 Project Structure
intern-project/
│
├── client/                        # Frontend (React / Next)
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/                 # Page-level components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │
│   │   ├── services/              # API calls (Axios)
│   │   │   └── api.js
│   │   │
│   │   ├── context/               # Auth context (if used)
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── utils/                 # Helper functions
│   │   │   └── validators.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js (or next.config.js)
│
│
├── backend/                       # Backend (Node + Express)
│   │
│   ├── config/
│   │   └── db.js                  # Database connection
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── controllers/               # Business logic
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
│
├── README.md
└── .gitignore

