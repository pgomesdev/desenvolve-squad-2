const db = require('../models')
const bcrypt = require('bcrypt')

class UserController {
  static async createUser(req, res) {
  
    const { password } = req.body
    const passwordHash = await bcrypt.hash(password, 8)
    req.body.password_hash = passwordHash

    try {
      const { id, name, nickname, email, company } = await db.Users.create(req.body)
      return res.status(200).json({ id, name, nickname, email, company })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController