import BaseController from './BaseController.js';
import Doctor from '../models/doctorModel.js';

class DoctorController extends BaseController {
  constructor() {
    super(Doctor);
  }

 
}

export default DoctorController;
