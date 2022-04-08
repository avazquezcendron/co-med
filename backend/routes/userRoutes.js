import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import UserController from '../controllers/UserController.js'
import { checkUserAuth } from '../middleware/authMiddleware.js'

const userController = new UserController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(userController.getAll))
  .post(checkUserAuth, asyncHandler(userController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(userController.getById))
  .put(checkUserAuth, asyncHandler(userController.update))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(userController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(userController.activate))

export default router
