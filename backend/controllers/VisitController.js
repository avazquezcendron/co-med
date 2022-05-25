import BaseController from './BaseController.js';
import Visit from '../models/visitModel.js';

class VisitController extends BaseController {
  constructor() {
    super(Visit);
  }
  
}

export default VisitController;