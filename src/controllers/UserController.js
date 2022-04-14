const db = require('../models')

class UserController {
  static async createUser(req, res) {
    const user = req.body

    console.log(req)
    console.log(user)

    try {
      const createdUser = await db.Users.create(user)
      return res.status(200).json(createdUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController