import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import NursingServiceController from '../controllers/NursingServiceController.js'

const nursingServiceController = new NursingServiceController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(nursingServiceController.getAll))
  .post(checkUserAuth, asyncHandler(nursingServiceController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(nursingServiceController.getById))
  .put(checkUserAuth, asyncHandler(nursingServiceController.update))
  .delete(checkUserAuth, asyncHandler(nursingServiceController.delete))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(nursingServiceController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(nursingServiceController.activate))

export default router
