module.exports = (app) => {
  const products = require("../controllers/product.controller.js"),
    router = require("express").Router();

  router.get("/find", products.findOne);

  // router.post("/create", products.create);
  router.get("/findAll", products.findAll);
  // router.delete("/delete/:id", isAuthenticated, users.delete);

  app.use("/api/products", router);
};
