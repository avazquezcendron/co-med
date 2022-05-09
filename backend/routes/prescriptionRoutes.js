import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import PrescriptionController from '../controllers/PrescriptionController.js'

const prescriptionController = new PrescriptionController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(prescriptionController.getAll))
  .post(checkUserAuth, asyncHandler(prescriptionController.create))

export default router
