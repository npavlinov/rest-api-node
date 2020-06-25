'use strict'
import User from '../database/models/UserModel'

/**
 * This class implements a service for the User controller
 * The service will perform all operations on the database and if any other
 * controller or service needs to perform CRUD operations on the User model,
 * it will have to go through this class.
 */
export default class UserService {
  /**
   * This method gets a single user based on username
   * @param {username}
   */
  static async getOne(username) {
    return await User.findOne({ username })
  }
}
