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
  // more methods
}
export default UserController
