const { Router, application } = require("express");

const routes = new Router();

const users = [
  {id: 1, "nome": "Homer Simpson", "email": "hsimpsom@teste.com"},
  {id: 2, "nome": "Will Smith", "email": "wsimith@teste.com"},
  {id: 3, "nome": "Sandro Botticellli", "email": "sbotti@teste.com"},
  {id: 4, "nome": "Raimundo Nonato", "email": "rnonato@teste.com"}
]

routes.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});




/* -----------------------------
        Listando usuarios
--------------------------------*/
routes.get('/users', (req, res) => {
  res.status(200).json(users);
})

/* -----------------------------
        Pega usuarios por Id
--------------------------------*/
routes.get('/user/:id', (req, res) => {
  let index = searchUser(req.params.id);
  res.json(users[index]);
});



/* ---------------------------------------------
        Função que percorre o array de usuarios
             e localiza um pelo id
-----------------------------------------------*/
function searchUser(id) {
  return users.findIndex(user => user.id == id);
}

module.exports = routes;
