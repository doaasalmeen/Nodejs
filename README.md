# Nodejs
This is a backend API built with Node.js, Express, and MongoDB for managing users and products. It provides authentication, product CRUD operations, and secure password handling.

Features

    User Authentication: Register and login users with hashed passwords using bcrypt and JWT authentication.

    Product Management: Create, read, update, and delete products. Each product is linked to the user who added it.

    MongoDB Integration: Uses Mongoose for schema definitions and database operations.

    RESTful API: Organized routes for authentication (/auth) and products (/products).

    Secure & Scalable: JWT-based authentication allows stateless sessions, making it suitable for distributed systems.

Technologies Used

    Node.js

    Express.js

    MongoDB + Mongoose

    JWT for authentication

    bcrypt for password hashing

    dotenv for environment variable management

Setup

Clone the repository:

        git clone <repo-url>


Install dependencies:

        npm install


Create a .env file with the following variables:

PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>


Start the server:

        npm start
