import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import BaseEntityController from '../controllers/BaseEntityController.js'

const baseEntityController = new BaseEntityController();
const router = Router()

router
  .route('/:entity')
  .get(checkUserAuth, asyncHandler(baseEntityController.getAll))
  .post(checkUserAuth, asyncHandler(baseEntityController.create))

router
  .route('/:entity/:id')
  .get(checkUserAuth, asyncHandler(baseEntityController.getById))
  .put(checkUserAuth, asyncHandler(baseEntityController.update))
  .delete(checkUserAuth, asyncHandler(baseEntityController.delete))

router
  .route('/:entity/:id/inactivate')
  .get(checkUserAuth, asyncHandler(baseEntityController.inactivate))

router
  .route('/:entity/:id/activate')
  .get(checkUserAuth, asyncHandler(baseEntityController.activate))

export default router
