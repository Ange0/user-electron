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
      const allUsers = await User.findAll()
      return allUsers
    } catch (error) {
      throw new Error(error)
    }
  }
  // more methods
}
export default UserController
