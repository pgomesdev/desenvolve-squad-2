const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = new Router();

routes.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

routes.post("/users", (req, res) => UserController.createUser(req, res));

routes.put("/users/:id", (req, res) => UserController.updateUser(req, res));

routes.delete("/users/:id", (req, res) => UserController.deleteUser(req, res));

module.exports = routes;
