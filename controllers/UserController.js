'use strict'

import UserService from '../services/UserService'
import * as auth from '../utils/auth'

/**
 * This class implements a controller for the User model
 * It handles registration and log in by generating a JSON
 * Web Token.
 */
export default class UserController {
  /**
   * This method logs in a user. It verifies that the credentials are correct
   * and if so - it signs in a JWT
   * @param {Object} req
   * @param {Object} res
   */
  static async loginUser(req, res, next) {
    try {
    } catch (err) {
      return next(err)
    }
    const username = req.body.username
    const password = req.body.password
    const user = await UserService.getOne(username)
    if (!user) {
      const error = new Error('User with such username does not exist.')
      error.status = 403
      return next(error)
    }

    const passwordMatches = await user.checkPassword(password);

    if(passwordMatches) {
      const token = auth.signToken(user)
      return res
        .status(200)
        .send({ auth: true, token, message: 'User Authenticated! ' })
    } else {
      const error = new Error('Password authentication failed!')
      error.status = 403
      return next(error)
    }
  }
}
