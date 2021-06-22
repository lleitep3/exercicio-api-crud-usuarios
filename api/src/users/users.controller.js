const UserService = require('./users.service')

class UserController {
  static async findAll (req, res) {
    const users = await UserService.findAll()

    res.json(users)
  }

  static findById (req, res) {
    const { id } = req.params

    const user = UserService.findById(id)

    res.json(user)
  }

  static async create (req, res) {
    const newUser = {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      senha: req.body.senha
    }

    const user = await UserService.create(newUser)
    res.json(user)
  }

  static async update (req, res) {
    try {
      const { id } = req.params

      const userData = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        status: req.body.status
      }

      const userUpdated = await UserService.update(id, userData)

      res.json(userUpdated)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async remove (req, res) {
    const { id } = req.params

    const result = await UserService.remove(id)

    res.json({ success: result })
  }
}

module.exports = UserController
