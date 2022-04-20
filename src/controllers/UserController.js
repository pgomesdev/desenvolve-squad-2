const db = require("../models");

class UserController {
  static async createUser(req, res) {
    const user = req.body;

    try {
      const createdUser = await db.Users.create(user);
      return res.status(200).json(createdUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { name, nickname, email, phone } = req.body;
    const newInfo = { name, nickname, email, phone };
    try {
      await db.Users.update(newInfo, { where: { id: Number(id) } });
      const updatedUser = await db.Users.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await db.Users.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Id ${id} deleted!` });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }
}

module.exports = UserController;
