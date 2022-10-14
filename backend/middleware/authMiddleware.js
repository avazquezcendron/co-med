import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const checkUserAuth = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id.userId)

      next()
    } catch (err) {
      res.status(401)
      if (err.name === 'TokenExpiredError') {
        res.json('Sesión expirada. Por favor vuelva a loguearse.')
      } else {
        res.json('Acceso no autorizado. Contacte al administrador.')
      }
    }
  }

  if (!token) {
    res.status(401)
    res.json('Acceso no autorizado. Contacte al administrador.')
  }
})

export { checkUserAuth }
