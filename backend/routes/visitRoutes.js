import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import VisitController from '../controllers/VisitController.js'

const visitController = new VisitController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(visitController.getAll))
  .post(checkUserAuth, asyncHandler(visitController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(visitController.getById))
  .put(checkUserAuth, asyncHandler(visitController.update))
  .delete(checkUserAuth, asyncHandler(visitController.delete))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(visitController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(visitController.activate))

export default router
