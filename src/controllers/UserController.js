const db = require('../models')

class UserController {
  static async createUser(req, res) {
    const user = req.body

    try {
      const { id, name, nickname, email, company } = await db.Users.create(user)
      return res.status(200).json({ id, name, nickname, email, company })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController