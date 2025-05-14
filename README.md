# Internbit Assignment

This is a Node.js + TypeScript backend for user authentication. It provides basic **signup** and **login** functionality with **JWT-based authentication** and **simple logging of login attempts** for auditing purposes.

---

## 🚀 Features

- User Signup & Login
- Password hashing with `bcrypt`
- JWT authentication
- Basic file-based logging (success and failed login attempts)
- Input validation using `zod`
- TypeScript for type safety
- MongoDB with Mongoose

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Auth:** JWT, bcrypt
- **Database:** MongoDB (via Mongoose)
- **Validation:** zod
- **Logging:** fs (logs/auth.log)

---

## 🛠️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)

---

### 📁 Clone and Setup

```bash
git clone https://github.com/sahell0x/internbit-assignment.git
cd internbit-assignment
npm install
npm run dev

