import BaseController from './BaseController.js';
import Patient from '../models/patientModel.js';
import HealthRecord from '../models/healthRecordModel.js';

class PatientController extends BaseController {
  constructor() {
    super(Patient);
  }

  /**
   * @desc   Get All patient
   * @route  GET /api/patient
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getAll(req, res, next) {
    const patients = await this._model.find({})
    .populate({
      path: 'healthInsurances.healthInsuranceCompany',
    })
    .populate({
      path: 'healthRecord',
    });
    res.status(200).json(patients);
  }

  /**
   * @desc   Get By ID patient
   * @route  GET /api/patient/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getById(req, res, next) {
    const model = await this._model
      .findById(req.params.id)
      .populate({
        path: 'healthInsurances.healthInsuranceCompany',
      })
      .populate({
        path: 'healthRecord',
      });
    if (model) {
      return res.status(200).json(model);
    } else {
      return res.status(404).json('Record not found');
    }
  }

  /**
   * @desc   Create patient
   * @route  POST /api/patient/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async create(req, res, next) {
    const patient = new this._model(req.body);
    const healthRecordNumber = new Number('549310' + patient.nationalId);
    const healthRecord = new HealthRecord({
      healthRecordNumber: healthRecordNumber,
    });
    patient.healthRecord = healthRecord;
    const savedPatient = await patient.save();
    healthRecord.patient = savedPatient._id;
    await healthRecord.save();
    req.params = {
      ...req.params,
      id: savedPatient._id
    };
    return this.getById(req, res, next);
  }
}

export default PatientController;
