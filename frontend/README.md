# 🎨 StudentHub Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

This is the interactive frontend for the StudentHub Management System. It features a modern, glassmorphic design system and extreme micro-interactivity.

## ✨ Highlights
- **Role-Based UI**: Dynamic rendering based on JWT user roles (Admin vs Student).
- **Smooth Navigation**: Page transitions and staggered animations via `framer-motion`.
- **Stateless Connectivity**: Fully integrated with the Spring Boot JWT authentication system.
- **Premium Aesthetics**: Curated color palettes, modern typography, and responsive layouts.

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   The app is pre-configured to point to `http://localhost:10101` for API requests. Ensure the backend is running.

3. **Development Mode**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure
- `/src/context`: Auth state management.
- `/src/components`: Reusable UI components (Dashboard, Catalog, Login).
- `/src/App.jsx`: Main routing and protected page logic.

## 🔑 Login Guide
Use the **"Demo Access"** section on the login page to quickly switch between Admin and Student perspectives.
