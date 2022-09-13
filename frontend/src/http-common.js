import axios from "axios";

export default axios.create({
  // working on MONGODB REALM
  //baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-evuay/service/restaurants/incoming_webhook/",
  // working on HEROKU
  //baseURL: "https://mern-be-todo.herokuapp.com/api/", 
  // working on LOCAL
  baseURL: "http://localhost:3001/api/",
  headers: {
    "Content-type": "application/json"
  }
});