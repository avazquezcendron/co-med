import BaseController from './BaseController.js';
import HealthInsuranceCompany from '../models/healthInsuranceCompanyModel.js';

class HealthInsuranceCompanyController extends BaseController {
  constructor() {
    super(HealthInsuranceCompany);
  }
  
}

export default HealthInsuranceCompanyController;