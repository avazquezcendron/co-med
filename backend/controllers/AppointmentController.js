import BaseController from './BaseController.js';
import Appointment from '../models/appointmentModel.js';

class AppointmentController extends BaseController {
  constructor() {
    super(Appointment);

  }

  /**
   * @desc   Get All appointment
   * @route  GET /api/appointment
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getAll(req, res, next) {
    const appointments = await this._model
      .find({})
      .populate({
        path: 'healthInsurances.healthInsuranceCompany',
      })
      .populate({
        path: 'healthRecord',
      });
    res.status(200).json(appointments);
  }

  /**
   * @desc   Get By ID appointment
   * @route  GET /api/appointment/:id
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
      })
      .populate({
        path: 'healthRecord',
        populate: { path: 'prescriptions.drugs', populate: { path: 'drugs.drug'} }
      });
    if (model) {
      return res.status(200).json(model);
    } else {
      return res.status(404).json('Record not found');
    }
  }

  /**
   * @desc   Create appointment
   * @route  POST /api/appointment/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async create(req, res, next) {
    const appointment = new this._model(req.body);
    const healthRecordNumber = new Number('549310' + appointment.nationalId);
    const healthRecord = new HealthRecord({
      healthRecordNumber: healthRecordNumber,
    });
    appointment.healthRecord = healthRecord;
    const savedappointment = await appointment.save();
    healthRecord.appointment = savedappointment._id;
    await healthRecord.save();
    req.params = {
      ...req.params,
      id: savedappointment._id,
    };
    return this.getById(req, res, next);
  }

}

export default AppointmentController;
