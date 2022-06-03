import moment from 'moment';

import sendMail from '../utils/nodemailer.js';
import notifyNewAppointment from '../utils/notifications.js';
import BaseController from './BaseController.js';
import Appointment from '../models/appointmentModel.js';
import Patient from '../models/patientModel.js';
import Doctor from '../models/doctorModel.js';
import AppointmentConfig from '../models/appointmentConfigModel.js';

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
    let filterAppointments = {};
    if (!req.user.isAdmin && req.user.isDoctor) {
      filterAppointments = { doctor: req.user.doctor?._id };
    } else {
      if (req.query.doctorId) {
        filterAppointments = { doctor: req.query.doctorId };
      }
    }
    const appointments = await this._model
      .find(filterAppointments)
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
    const doctor = await Doctor.findById(req.body.doctor.id)
      .populate({
        path: 'appointments',
      })
      .populate({
        path: 'user',
      });
    if (
      req.body.appointmentType !== 'sobreturno' &&
      !this._checkDoctorAvailability(doctor, req.body.start)
    ) {
      return res
        .status(409)
        .json('El doctor no tiene disponibilidad para el slot seleccionado.');
    }

    const appointment = new this._model(req.body);
    const savedappointment = await appointment.save();
    doctor.appointments.push(savedappointment._id);
    await doctor.save();
    if (appointment.patient) {
      const patient = await Patient.findById(appointment.patient._id).populate({
        path: 'healthInsurances.healthInsuranceCompany',
      });
      const appointmentData = { ...req.body, doctor: doctor, patient: patient };
      if (patient.email) {
        sendMail(
          patient.email,
          `Co-Med | Nuevo Turno día ${new Date(
            appointment.start
          ).toLocaleString('es', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })} hs`,
          'html',
          'newAppointment',
          appointmentData
        );
      }

      notifyNewAppointment(appointmentData);
    }
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
    if (
      req.body.appointmentType !== 'sobreturno' &&
      !this._checkDoctorAvailability(doctor, req.body.start, req.params.id)
    ) {
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
            `El ${appointment.appointmentType === 'bloqueo' ? 'bloqueo de agenda' : 'turno'} ha sido modificado en otra transacción. Debe recargar la página de turnos.`
          );
      }

      if (appointment.appointmentType === 'bloqueo' && req.body.status === 'cancelled') {
        const oldDoctor = await Doctor.findById(appointment.doctor._id);
        oldDoctor.appointments = oldDoctor.appointments.filter(
          (x) => !x._id.equals(appointment._id)
        );
        oldDoctor.save();

        return this.delete(req, res, next);

      } else if (appointment.doctor._id.toString() !== req.body.doctor.id.toString()) {
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

  async inactivate(req, res, next) {
    let model = await this._model.findById(req.params.id);
    if (model) {
      if (model.appointmentType === 'bloqueo') {
        return this.delete(req, res, next);
      } else {
        model.status = 'inactive';
        const updatedModel = await model.save();
        return res.status(200).json(updatedModel);
      }      
    } else {
      return res.status(404).json('Registro no encontrado.');
    }
  }

  _checkDoctorAvailability(doctor, appointmentStart, appointmentId) {
    const docAppointmentsInSameSlot = doctor.appointments.filter(
      (docAppointment) =>
        docAppointment._id.toString() !== appointmentId?.toString() &&
        docAppointment.isActive &&
        moment(appointmentStart).isBetween(
          docAppointment.start,
          docAppointment.end,
          'minute',
          '[)'
        )
    );
    const slotIsAvailable = docAppointmentsInSameSlot.length === 0;
    return slotIsAvailable;
  }
}

export default AppointmentController;
