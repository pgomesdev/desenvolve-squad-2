const db = require('../models')

class UserController {

  // Lista todos os usuarios
  
  static async listAll(req, res){
      try {
          const listUsers = await db.Users.findAll();
          return res.status(200).json(listUsers);
          
      } catch (error) {
          return res.status(500).json(error.message)
      }

  }

  
}

module.exports = UserController