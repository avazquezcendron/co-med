import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { checkUserAuth } from '../middleware/authMiddleware.js'
import HealthInsuranceCompanyController from '../controllers/HealthInsuranceCompanyController.js'

const healthInsuranceCompanyController = new HealthInsuranceCompanyController();
const router = Router()

router
  .route('/')
  .get(checkUserAuth, asyncHandler(healthInsuranceCompanyController.getAll))
  .post(checkUserAuth, asyncHandler(healthInsuranceCompanyController.create))

router
  .route('/:id')
  .get(checkUserAuth, asyncHandler(healthInsuranceCompanyController.getById))
  .put(checkUserAuth, asyncHandler(healthInsuranceCompanyController.update))
  .delete(checkUserAuth, asyncHandler(healthInsuranceCompanyController.delete))

router
  .route('/:id/inactivate')
  .get(checkUserAuth, asyncHandler(healthInsuranceCompanyController.inactivate))

router
  .route('/:id/activate')
  .get(checkUserAuth, asyncHandler(healthInsuranceCompanyController.activate))

export default router
