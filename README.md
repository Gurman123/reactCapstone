# MERN E-commerce Project

## Description
This project is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to browse products, add them to their cart, and proceed to checkout securely.

## Features
- User authentication and authorization
- Product listing and search functionality
- Shopping cart management
- Secure payment processing
- Admin panel for product management
- Responsive UI

## Tech Stack
- **Frontend:** React.js, Redux, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Others:** Mongoose, JWT, Bootstrap

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Gurman123/reactCapstone.git
   cd reactCapstone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```bash
   MONGO_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Run the application:
   ```bash
   npm run dev
   ```

## Project Structure
```
reactCapstone/
├── client/          # Frontend code
│   ├── src/        # React source files
│   ├── public/     # Static files
├── server/          # Backend code
│   ├── routes/     # API routes
│   ├── models/     # Mongoose models
│   ├── config/     # Configuration files
├── .env             # Environment variables
├── README.md        # Project documentation
└── package.json     # Project metadata
```