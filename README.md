# Baseline Code for MERN Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

3. Run server using Nodemon

### `nodemon server`

# Running the Front End

1. Run script

### `npm start`
