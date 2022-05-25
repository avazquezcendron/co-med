import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import AppointmentController from '../controllers/AppointmentController.js'

const appointmentController = new AppointmentController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(appointmentController.getAll))
  .post(checkUserAuth, asyncHandler(appointmentController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(appointmentController.getById))
  .put(checkUserAuth, asyncHandler(appointmentController.update))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(appointmentController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(appointmentController.activate))

export default router
