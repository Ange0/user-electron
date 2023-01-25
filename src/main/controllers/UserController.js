import User from '../models/UserModel'
class UserController {
  static async create(user) {
    try {
      const ange = await User.create({ firstName: user.firstName, lastName: user.lastName })
      return ange
    } catch (error) {
      throw new Error(error)
    }
  }
  // more methods
}
export default UserController
