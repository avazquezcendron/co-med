import { Router } from 'express'
import { create, update, inactivate, activate, getById, getAll } from '../controllers/userControllers.js'
import { checkUserAuth } from '../middleware/authMiddleware.js'
const router = Router()

router
  .route('/')
  .get(checkUserAuth, getAll)
  .post(checkUserAuth, create)

router
  .route('/:id')
  .get(checkUserAuth, getById)
  .put(checkUserAuth, update)

router
  .route('/:id/inactivate')
  .get(checkUserAuth, inactivate)

router
  .route('/:id/activate')
  .get(checkUserAuth, activate)

export default router
