const express = require("express");
//const path = __dirname + '/views/';
const path = require('path');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// parse requests of content-type - application/json
// same as like the body parser
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect to the database from the .env file containing the DB details
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
      console.log('Error in MongoDb connection: ' + err);
      process.exit();
  });

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

//Handle CORS Issue when FE access BE APIs
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Access-Token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Backend Working..." });
// });

// Serve the static files generated from Frontend(ReactJS) in 'views' dir
// app.use(express.static(path));
// app.get('/', function (req,res) {
//   res.sendFile(path + "index.html");
// });

require("./routes/auth.route")(app); // login and registration
require("./routes/task.route")(app);

// Serve frontend from build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


try {
    // set port, listen for requests
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
} catch(ex) {

}
