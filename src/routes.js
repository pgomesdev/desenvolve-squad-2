const { Router } = require("express");
const UserController = require('./controllers/UserController')

const routes = new Router();

routes.post("/users", UserController.createUser)

module.exports = routes;
