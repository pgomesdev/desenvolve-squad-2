const WrongSizeException = require('../exceptions/WrongSizeException')
const db = require('../models')
const bcrypt = require('bcrypt')

class UserController {
  static async createUser(req, res) {

    try {
      const { password } = req.body

      if (password.length < 6) {
        throw new WrongSizeException('Password must have at least 6 characters')
      }

      const passwordHash = await bcrypt.hash(password, 8)
      req.body.password_hash = passwordHash

      const { id, name, nickname, email, company } = await db.Users.create(req.body)
      return res.status(201).json({ id, name, nickname, email, company })
    } catch (error) {
      if (error instanceof WrongSizeException) {
        return res.status(400).json(error.message)  
      }
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController