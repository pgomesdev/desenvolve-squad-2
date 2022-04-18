const db = require('../models')

class UserController {

    // Lista todos os usuarios

    static async listAll(req, res) {
        try {
            const listUsers = await db.Users.findAll();
            return res.status(200).json(listUsers);

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async getUserById(req, res) {

        const { id } = req.params
        try {
            const oneUser = await db.Users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(oneUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

}




module.exports = UserController