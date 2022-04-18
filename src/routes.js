const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = new Router();

routes.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});


routes.get("/users", (req, res) => UserController.listAll(req, res));

routes.get("/users/:id", (req, res) => UserController.getUserById(req, res));


module.exports = routes;
