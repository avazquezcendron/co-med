import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import PatientController from '../controllers/PatientController.js'

const patientController = new PatientController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(patientController.getAll))
  .post(checkUserAuth, asyncHandler(patientController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(patientController.getById))
  .put(checkUserAuth, asyncHandler(patientController.update))

router
  .route('/:id/healthRecord')
  .get(checkUserAuth, asyncHandler(patientController.getHealthRecord))
  .put(checkUserAuth, asyncHandler(patientController.updateHealthRecord))

router
  .route('/:id/visit')
  .get(checkUserAuth, asyncHandler(patientController.getVisits))
  // .put(checkUserAuth, asyncHandler(patientController.updateVisit))//NO VISIT UPDATE FOR THE MOMENT
  .post(checkUserAuth, asyncHandler(patientController.createVisit))

router
  .route('/:id/prescription')
  .get(checkUserAuth, asyncHandler(patientController.getPrescriptions))
  // .post(checkUserAuth, asyncHandler(patientController.createVisit))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(patientController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(patientController.activate))

export default router
