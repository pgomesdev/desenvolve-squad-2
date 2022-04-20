const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = new Router();

routes.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

routes.post("/users", UserController.createUser);

routes.put("/users/:id", UserController.updateUser);

routes.delete("/users/:id", UserController.deleteUser);

module.exports = routes;
