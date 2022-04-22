import BaseController from './BaseController.js';
import Appointment from '../models/appointmentModel.js';
import Patient from '../models/patientModel.js';
import Doctor from '../models/doctorModel.js';
import AppointmentConfig from '../models/appointmentConfigModel.js';
import moment from 'moment';

class AppointmentController extends BaseController {
  constructor() {
    super(Appointment);

    this._checkDoctorAvailability = this._checkDoctorAvailability.bind(this);
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
        path: 'doctor',
      })
      .populate({
        path: 'patient',
        populate: { path: 'healthInsurances.healthInsuranceCompany' },
      })
      .populate({
        path: 'patient',
        populate: { path: 'healthRecord' },
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
        path: 'doctor',
      })
      .populate({
        path: 'patient',
      });
    if (model) {
      return res.status(200).json(model);
    } else {
      return res.status(404).json('Turno no encontrado.');
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
    const doctor = await Doctor.findById(req.body.doctor.id).populate({
      path: 'appointments',
    });
    if (!this._checkDoctorAvailability(doctor, req.body.start)) {
      return res
        .status(409)
        .json('El doctor no tiene disponibilidad para el slot seleccionado.');
    }

    const appointment = new this._model(req.body);
    const patient = await Patient.findById(appointment.patient._id);
    const savedappointment = await appointment.save();
    patient.appointments.push(savedappointment._id);
    doctor.appointments.push(savedappointment._id);
    await patient.save();
    await doctor.save();
    req.params = {
      ...req.params,
      id: savedappointment._id,
    };
    return this.getById(req, res, next);
  }

  /**
   * @desc   Update <model>
   * @route  PUT /api/<model>/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async update(req, res, next) {
    const doctor = await Doctor.findById(req.body.doctor.id).populate({
      path: 'appointments',
    });
    if (!this._checkDoctorAvailability(doctor, req.body.start, req.params.id)) {
      return res
        .status(409)
        .json('El doctor no tiene disponibilidad para el slot seleccionado.');
    }

    let appointment = await this._model.findById(req.params.id);
    if (appointment) {
      if (appointment.__v !== req.body.__v) {
        return res
          .status(409)
          .json(
            'El turno ha sido modificado en otra transacción. Debe recargar la página de turnos.'
          );
      }

      if (appointment.doctor._id.toString() !== req.body.doctor.id.toString()) {
        doctor.appointments.push(appointment._id);
        doctor.save();

        const oldDoctor = await Doctor.findById(appointment.doctor._id);
        oldDoctor.appointments = oldDoctor.appointments.filter(
          (x) => !x._id.equals(appointment._id)
        );
        oldDoctor.save();
      }

      for (const [key, value] of Object.entries(req.body)) {
        appointment[key] = value;
      }
      await appointment.save();

      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Turno no encontrado.');
    }
  }

  _checkDoctorAvailability(doctor, appointmentStart, appointmentId) {
    const docAppointmentsInSameSlot = doctor.appointments.filter(
      (docAppointment) =>
        docAppointment._id.toString() !== appointmentId.toString() &&
        docAppointment.isActive &&
        moment(docAppointment.start).isSame(appointmentStart, 'minute')
    );
    const slotIsAvailable = docAppointmentsInSameSlot.length === 0;
    return slotIsAvailable;
  }
}

export default AppointmentController;
