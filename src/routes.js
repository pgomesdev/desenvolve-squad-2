const { Router } = require("express");
const UserController = require('./controllers/UserController')

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

routes.post("/users", UserController.createUser)

module.exports = routes;
