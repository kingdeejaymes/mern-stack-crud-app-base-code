# Baseline Code for MERN Stack

These includes the following:

BACKEND
- bcryptjs (for password encryption/decryption)
- dotenv
- jsonwebtoken
- mongoose

FRONTEND
- react
- bootstrap
- bootswatch
- axios

## Available Scripts

Go inside the project directory of either backend or frontend to run. You can open two separated terminal:

### `cd backend`

### `cd frontend`

First, install all package dependencies if not yet installed for both directory. This will read all the package dependencies from package.json

### `npm install`

# Running the Back End. 

BE was also based on this tutorial https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

1. Setup Mongo DB Atlas account in https://cloud.mongodb.com/ and create Free service DB

2. Create the `.env` file under backend directory and paste the details for DB connections string based on your created MongoDB atlas 

### `DB=mongodb+srv://deej:mernstack2022@cluster0.vzroueu.mongodb.net/mern_db?retryWrites=true&w=majority`
### `PORT=3001`

3. Export the deployable static/frontend files then copy all of the contents of `build` dir of frontend to `views` dir of backend

### `npm run build`

4. Run server using Nodemon

### `nodemon server`

# Running the Front End separately (Optional)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Run script

### `npm start`

# Building the production code

### `npm run build`

# TODO on FrontEnd Routes

Implement Route Guards for Authenticated and Unauthenticated Access

# REFERRENCES
React.js + Node.js + Express + MongoDB example: MERN stack CRUD App

https://www.bezkoder.com/react-node-express-mongodb-mern-stack/

Node.js, Express & MongoDb: Build a CRUD Rest Api example

https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

Integrate React with Node.js Express on same Server/Port

https://www.bezkoder.com/integrate-react-express-same-server-port/

React + Node.js Express + MySQL: CRUD example

https://bezkoder.com/react-node-express-mysql/

React + Node.js Express + PostgreSQL: CRUD example

https://bezkoder.com/react-node-express-postgresql/

React + Node.js Express + MySQL/PostgreSQL: JWT Authentication example

https://bezkoder.com/react-express-authentication-jwt/

React + Node.js Express + MongoDB: JWT Authentication example

https://bezkoder.com/react-node-mongodb-auth/


