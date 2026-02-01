# 🎓 StudentHub: Extreme Full-Stack Management System

![Spring Boot](https://img.shields.io/badge/Spring_Boot-F27416?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**StudentHub** is a high-performance, visually stunning academic management portal. Built with a robust Java Spring Boot backend and a highly interactive React frontend, it features state-of-the-art security and role-based experiences.

---

## 🚀 Experience the Dual-Role System

StudentHub automatically transforms its entire interface based on the logged-in user's identity.

### 🎓 The Student Perspective
*   **Intuitive Dashboard**: Personalized greetings and university-wide stats.
*   **Course Discovery**: Browse the academic catalog with advanced search.
*   **Academic Timeline**: Interactive curriculum roadmap and faculty directory.
*   **Read-Only Safety**: Intentional UI design that hides administrative tools to ensure data integrity.

### 🛡️ The Admin Perspective
*   **Power Management**: Full CRUD control over the entire course system.
*   **Instant Creation**: Dedicated "Quick Action" cards and Floating Action Buttons (FAB).
*   **Direct Oversight**: Ability to delete, modify, and manage university assets with one-click efficiency.
*   **Authorized Control**: Exclusive access to sensitive API endpoints via JWT verification.

---

## 🛠️ Tech Stack

### Backend (The Engine)
- **Language**: Java 21
- **Framework**: Spring Boot 3.x
- **Security**: Spring Security + JWT (JSON Web Tokens)
- **Database**: PostgreSQL
- **Build Tool**: Maven

### Frontend (The Interface)
- **Library**: React 18 (Vite)
- **Animations**: Framer Motion (Extreme interactivity)
- **Icons**: Lucide-React
- **Styling**: Vanilla CSS (Custom Glassmorphism Design System)
- **State Management**: Context API

---

## 📦 Installation & Setup

### Prerequisites
- Java JDK 17 or higher
- Node.js (v18+) & npm
- PostgreSQL Database

### 1. Database Configuration
Create a database named `course_db` and update the `Course_app/src/main/resources/application.properties` with your credentials:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/course_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 2. Backend Setup
```bash
cd Course_app
./mvnw clean install
./mvnw spring-boot:run
```
The server will start at `http://localhost:10101`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 🔐 Security & Demo Access

The system uses **JWT Authentication**. All sensitive requests require a Bearer Token in the header.

### Quick Admin Login (Pre-configured)
Need to test the Admin features immediately? Use the **"Demo Access"** button on the login page or enter:
- **Username**: `admin@gmail.com`
- **Password**: `admin@123`

---

## ✨ Key Features
- **Stateless Auth**: JWT-based session management.
- **Micro-animations**: Smooth page transitions and hover effects using Framer Motion.
- **Responsive Layout**: Designed for high-end desktop experiences.
- **Auto-Provisioning**: The system automatically creates a master admin account on first boot.

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for new features or bug fixes.

---

## 📝 License
Built with ❤️ by [Your Name/Team]. Licensed under the MIT License.
