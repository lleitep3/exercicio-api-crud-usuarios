const { Usuarios } = require('../database/models')

class UserService {
  static findAll () {
    return Usuarios.findAll()
  }

  static findById (userId) {
    const user = userList.find(user => user.id == userId)

    return user
  }

  static create (userToSave) {
    return Usuarios.create(userToSave)
  }

  static async update (userId, userData) {
    const user = await Usuarios.findByPk(userId)

    Object.assign(user, userData)
    await user.save()

    return user
  }

  static remove (userId) {
    return Usuarios.destroy({
      where: {
        id: userId
      }
    })
  }
}

module.exports = UserService
