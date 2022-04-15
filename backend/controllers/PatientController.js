import BaseController from './BaseController.js';
import Patient from '../models/patientModel.js';
import HealthRecord from '../models/healthRecordModel.js';

class PatientController extends BaseController {
  constructor() {
    super(Patient);

    this.updateHealthRecord = this.updateHealthRecord.bind(this);
    this.getHealthRecord = this.getHealthRecord.bind(this);
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
    const patients = await this._model
      .find({})
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
        populate: { path: 'drugsInfo.drugs' }
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
      id: savedPatient._id,
    };
    return this.getById(req, res, next);
  }

  /**
   * @desc   Get patient health record
   * @route  GET /api/patient/:id/healthRecord
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getHealthRecord(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      const healthRecord = await HealthRecord.findById(patient.healthRecord.id);
      if (healthRecord) {
        return res.status(200).json(healthRecord);
      } else {
        return res.status(404).json('Health Record not found');
      }
    } else {
      return res.status(404).json('Patient not found');
    }
  }

  /**
   * @desc   Update patient helath record
   * @route  PUT /api/patient/:id/healthRecord
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async updateHealthRecord(req, res, next) {
    const patient = await this._model.findById(req.params.id);
    if (patient) {
      if (patient.__v !== req.body.patientVersion) {
        res.status(409);
        res.json('The Patient has been modified by another transaction.');
        return;
      }
      const healthRecord = await HealthRecord.findById(req.body.id);
      if (healthRecord.__v !== req.body.__v) {
        res.status(409);
        res.json('The Health Record has been modified by another transaction.');
        return;
      }
      for (const [key, value] of Object.entries(req.body)) {
        healthRecord[key] = value;
      }
      await healthRecord.save();
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Record not found');
    }
  }
}

export default PatientController;
