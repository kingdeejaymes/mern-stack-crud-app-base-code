module.exports = app => {
  const tasks = require("../controllers/task.controller");
  const authJwt = require("../utils/authJWT");
  var router = require("express").Router();

  // Create a new Task
  router.post("/", authJwt.verifyToken, tasks.create);
  // Retrieve all Task
  router.get("/", authJwt.verifyToken, tasks.findAll);
  // Update a Task
  // router.put("/:id", authJwt.verifyToken, tasks.update);
  // // Retrieve all published Task
  // router.get("/published", tasks.findAllPublished);
  // // Retrieve a single Task with id
  // router.get("/:id", tasks.findOne);
  // // Update a Task with id
  // router.put("/:id", tasks.update);
  // Delete a Task with id
  router.delete("/:id", tasks.delete);
  // // Create a new Task
  // router.delete("/", tasks.deleteAll);

  // Root URL for Task Endpoint
  app.use('/api/tasks', router);
};