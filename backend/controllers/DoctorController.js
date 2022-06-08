import BaseController from './BaseController.js';
import Doctor from '../models/doctorModel.js';
import AppointmentConfig from '../models/appointmentConfigModel.js';
import User from '../models/userModel.js';
import moment from 'moment';

class DoctorController extends BaseController {
  constructor() {
    super(Doctor);

    this.getSessions = this.getSessions.bind(this);
  }

  /**
   * @desc   Create <model>
   * @route  POST /api/<model>/:id
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async create(req, res, next) {
    const createModel = new this._model(req.body);
    const savedModel = await createModel.save();
    if (savedModel && req.body.user) {
      const user = await User.findById(req.body.user);
      if (user) {
        user.doctor = savedModel._id;
        await user.save();
      }
    }
    req.params = {
      ...req.params,
      id: savedModel._id,
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
    let model = await this._model.findById(req.params.id);
    if (model) {
      if (model.__v !== req.body.__v) {
        return res
          .status(409)
          .json(
            'El Registro ha sido modificado en otra transacción. Debe recargar la página para ver los cambios.'
          );
      }

      for (const [key, value] of Object.entries(req.body)) {
        model[key] = value;
      }
      await model.save();
      if (model && req.body.user) {
        const user = await User.findById(req.body.user);
        if (user) {
          user.doctor = model._id;
          await user.save();
        }
      }
      return this.getById(req, res, next);
    } else {
      return res.status(404).json('Registro no encontrado.');
    }
  }

  /**
   * @desc   Get All <model>
   * @route  GET /api/<model>
   * @access Private
   *
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  async getAll(req, res, next) {
    const status = req.query.status;
    const filterBy = req.query.filterBy;
    const filter = {};
    if (status) {
      filter.status = status;
    }

    if (filterBy) {
      const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
      const searchRgx = rgx(filterBy);
      const filterByParsed = parseInt(filterBy);
      filter.$or = [
        { firstName: { $regex: searchRgx } },
        { lastName: { $regex: searchRgx } },
        { specialities: { $in: [searchRgx] } },
      ];
      if (filterByParsed) {
        filter.$or.push({ nationalId: filterByParsed });
      }
    }

    let finalFilter = {};
    if (filter.status && filter.$or) {
      finalFilter.$and = [{ status: filter.status }, { $or: filter.$or }];
    } else {
      finalFilter = filter;
    }

    const models = await this._model.find(finalFilter);
    res.status(200).json(models);
  }

  async getSessions(req, res, next) {
    const appointmentsConfig = await AppointmentConfig.find({});
    moment.locale('es');
    if (appointmentsConfig.length === 0)
      return res
        .status(200)
        .json('No hay sesiones de turnos configuradas para el Doctor.');

    const doctor = await this._model.findById(req.params.id).populate({
      path: 'appointments',
    });

    if (!doctor) return res.status(404).json('Doctor no encontrado.');

    const doctorAppointments = doctor.appointments;

    const doctorAppointmentsConfig = appointmentsConfig.filter(
      (x) => x.doctor?.toString() === req.params.id
    );
    const generalAppointmentsConfig = appointmentsConfig.filter(
      (x) => !x.doctor
    );

    let appointmentsConfigFinal = {};
    if (doctorAppointmentsConfig.length > 0) {
      appointmentsConfigFinal = doctorAppointmentsConfig[0];
    } else if (generalAppointmentsConfig.length > 0) {
      appointmentsConfigFinal = generalAppointmentsConfig[0];
    } else {
      return res
        .status(200)
        .json('No hay sesiones de turnos configuradas para el Doctor.');
    }

    const {
      slotHours,
      slotMinutes,
      slotPreparation,
      sessions: timeArr,
    } = appointmentsConfigFinal;
    const serachDate = new Date(new Date(req.body.date).setHours(0, 0, 0, 0));
    let serchDay = serachDate.getDay();
    let defaultDate = serachDate.toISOString().substring(0, 10);
    let sessions = [];
    let _timeArrStartTime;
    let _timeArrEndTime;
    let _tempSlotStartTime;
    let _endSlot;
    let _startSlot;
    let slotId = 0;
    // Loop over timeArr
    for (var i = 0; i < timeArr.length; i++) {
      let session = { sessionName: timeArr[i].sessionType, slots: [] };

      // Creating time stamp using time from timeArr and default date
      _timeArrStartTime = new Date(
        defaultDate + ' ' + timeArr[i].startTime
      ).getTime();
      _timeArrEndTime = new Date(
        defaultDate + ' ' + timeArr[i].endTime
      ).getTime();
      _tempSlotStartTime = _timeArrStartTime;
      // Loop around till _tempSlotStartTime is less end time from timeArr
      while (
        new Date(_tempSlotStartTime).getTime() <
        new Date(_timeArrEndTime).getTime()
      ) {
        _endSlot = new Date(_tempSlotStartTime);
        _startSlot = new Date(_tempSlotStartTime);
        slotId++;

        //Adding minutes and hours from config to create slot and overiding the value of _tempSlotStartTime
        _tempSlotStartTime = _endSlot.setHours(
          parseInt(_endSlot.getHours()) + parseInt(slotHours)
        );
        _tempSlotStartTime = _endSlot.setMinutes(
          parseInt(_endSlot.getMinutes()) + parseInt(slotMinutes)
        );

        // Check _tempSlotStartTime is less than end time after adding minutes and hours, if true push into slotsArr
        if (
          new Date(_tempSlotStartTime).getTime() <=
          new Date(_timeArrEndTime).getTime()
        ) {
          session.slots.push({
            id: slotId,
            startTime: new Date(_startSlot),
            endTime: _endSlot,
            available:
              moment(_startSlot).isSameOrAfter(moment()) &&
              timeArr[i].daysOfWeek[serchDay] === 1 &&
              doctorAppointments.filter(
                (appointment) =>
                  appointment.isActive &&
                  appointment.appointmentType !== 'sobreturno' &&
                  moment(_startSlot).isBetween(
                    appointment.start,
                    appointment.end,
                    'minute',
                    '[)'
                  )
              ).length === 0,
          });
        }

        //preparation time is added in last to maintain the break period
        _tempSlotStartTime = _endSlot.setMinutes(
          _endSlot.getMinutes() + parseInt(slotPreparation)
        );
      }
      sessions.push(session);
    }
    console.log(new Date().toString());
    console.log(new Date().toJSON());
    return res.status(200).json(sessions);
  }
}

export default DoctorController;
