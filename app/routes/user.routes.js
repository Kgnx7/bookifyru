module.exports = (app) => {
  const users = require("../controllers/user.controller.js"),
    router = require("express").Router(),
    isAuthenticated = require("../middleware/isAuthenticated");

  router.get("/find/:id", isAuthenticated, users.findOne);
  router.delete("/delete/:id", isAuthenticated, users.delete);

  app.use("/api/users", router);
};
