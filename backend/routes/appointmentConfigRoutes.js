import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import AppointmentConfigController from '../controllers/AppointmentConfigController.js'

const appointmentConfigController = new AppointmentConfigController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(appointmentConfigController.getAll))
  .post(checkUserAuth, asyncHandler(appointmentConfigController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(appointmentConfigController.getById))
  .put(checkUserAuth, asyncHandler(appointmentConfigController.update))
  .delete(checkUserAuth, asyncHandler(appointmentConfigController.delete))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(appointmentConfigController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(appointmentConfigController.activate))

export default router
