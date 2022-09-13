module.exports = app => {
    const auth = require("../controllers/auth.controller");
    const signupUtil = require("../utils/signupUtil");
    var router = require("express").Router();
    
    // User Registration
    router.post("/signup", signupUtil.checkDuplicateUsernameOrEmail, auth.signup);
    // User Login
    router.post("/login", auth.signin);

    // Root URL for Task Endpoint
    app.use('/api/auth', router);
  };