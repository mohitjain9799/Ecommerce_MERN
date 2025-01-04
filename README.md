
# Ecommerce Project

This project is a full-stack e-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. It includes a frontend for users and admins to interact with the platform and a backend API to handle business logic and database operations.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Technologies Used](#technologies-used)
5. [Environment Variables](#environment-variables)
6. [Scripts](#scripts)
7. [License](#license)

---

## Features

### User Features
- Product browsing and search functionality
- Add products to cart
- Secure user authentication and profile management
- Order placement and tracking
- Payment processing integration

### Admin Features
- Dashboard with charts and analytics
- Manage products, orders, customers, and discounts
- Custom coupon creation and discount management
- Role-based access control for admin functionalities

---

## Project Structure

### Root Directory
```plaintext
├── README.md
├── Ecommerce-Frontend/
└── Ecommerce-backend/
```

### Frontend Structure
```plaintext
Ecommerce-Frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── style/
│   ├── types/
│   └── utils/
├── .env_sample
├── package.json
└── vite.config.ts
```

### Backend Structure
```plaintext
Ecommerce-backend/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── types/
│   └── utils/
├── .env_sample
├── package.json
└── tsconfig.json
```

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- A package manager (npm or yarn)

### Frontend Setup
1. Navigate to the `Ecommerce-Frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env_sample` and update the environment variables.
4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the `Ecommerce-backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env_sample` and update the environment variables (e.g., MongoDB URI).
4. Start the server:
   ```bash
   npm run dev
   ```

---

## Technologies Used

### Frontend
- React.js
- TypeScript
- Redux Toolkit
- SCSS for styling
- Vite for development and build tool

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose for ORM)
- TypeScript
- Firebase for authentication

---

## Environment Variables

Both the frontend and backend require a `.env` file. Use the provided `.env_sample` files as a template.

### Frontend `.env`
```plaintext
VITE_API_BASE_URL=<backend-api-url>
VITE_FIREBASE_API_KEY=<firebase-api-key>
```

### Backend `.env`
```plaintext
MONGO_URI=<mongo-database-url>
PORT=5000
```

---

## Scripts

### Frontend
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run lint`: Lint the codebase

### Backend
- `npm run dev`: Start the development server
- `npm run build`: Transpile TypeScript to JavaScript
- `npm run start`: Start the production server

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Mohit Jain

mohitjain7424@gmail.com
