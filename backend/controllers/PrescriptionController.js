import BaseController from './BaseController.js';
import Prescription from '../models/prescriptionModel.js';
import HealthRecord from '../models/healthRecordModel.js';

class PrescriptionController extends BaseController {
  constructor() {
    super(Prescription);
  }

  async getAll(req, res, next) {
    const filter = req.query.frequents ? { frequent: true } : {};
    if (filter) {
      const models = await this._model
        .find(filter)
        .sort({ createdAt: 'desc' })
        .populate({ path: 'drugs', populate: { path: 'drug' } })
        .populate({ path: 'doctor' })
        .populate({ path: 'healthRecord', populate: { path: 'patient',   populate: { path: 'healthInsurances.healthInsuranceCompany' }} });
      res.status(200).json(models);
    }
  }

  async create(req, res, next) {
    const createModel = new this._model(req.body);
    const savedModel = await createModel.save();

    const healthRecord = await HealthRecord.findById(
      req.body.healthRecord._id
    );
    healthRecord.prescriptions.push(savedModel);
    await healthRecord.save();

    req.params = {
      ...req.params,
      id: savedModel._id
    };
    return this.getById(req, res, next);
  }
}

export default PrescriptionController;
