import { Router } from 'express'
import asyncHandler from 'express-async-handler'
// import { login } from '../controllers/userControllers.js'
import UserController from '../controllers/UserController.js'

const userController = new UserController;
const router = Router()

router.post('/login', asyncHandler(userController.login))

export default router
