import User from '../models/UserModel'
class UserController {
  static async create(user) {
    try {
      const userCreated = await User.create({ fullName: user.fullName, email: user.email })
      return userCreated
    } catch (error) {
      throw new Error(error)
    }
  }
  static async all() {
    try {
      const allUsers = await User.findAll({ order: [['createdAt', 'DESC']] })
      return allUsers
    } catch (error) {
      throw new Error(error)
    }
  }
  static async delete(idUser) {
    console.log(idUser)
    try {
      await User.destroy({
        where: {
          id: idUser
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  }
  // more methods
}
export default UserController
