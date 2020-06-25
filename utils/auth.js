import jwt from 'jsonwebtoken'
import config from '../config/config.json'

/**
 * This functions acts as a middleware for express. It takes the request
 * object and checks for a token in the header
 * If a token is present it verifies it against the secret in the config file
 * After verifying the token, it returns the user data for further use
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'] || req.headers['authorization']

  if (!token) {
    return res.status(403).send({ auth: null, message: 'No token.' })
  }

  jwt.verify(token, config.jwtSecret, (err, decode) => {
    if (err) {
      console.log(err)
      return res.send({ auth: false, message: 'Authentication failed!' })
    }

    Object.assign(req, decode)
    next()
  })
}

/**
 * This method signs a jwt token and includes data in the payload
 * It sets the jwt to expire in 1 hour
 * @param {Object} user
 */
export function signToken(user) {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      country: user.country,
    },
    config.jwtSecret,
    {
      expiresIn: 3600,
    }
  )
  return token
}
