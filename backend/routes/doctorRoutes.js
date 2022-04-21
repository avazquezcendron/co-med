import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import DoctorController from '../controllers/DoctorController.js'

const doctorController = new DoctorController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(doctorController.getAll))
  .post(checkUserAuth, asyncHandler(doctorController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(doctorController.getById))
  .put(checkUserAuth, asyncHandler(doctorController.update))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(doctorController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(doctorController.activate))

router
  .route('/:id/sessions')
  .post(checkUserAuth, asyncHandler(doctorController.getSessions))

export default router
