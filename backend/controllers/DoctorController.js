import BaseController from './BaseController.js';
import Doctor from '../models/doctorModel.js';
import AppointmentConfig from '../models/appointmentConfigModel.js';
import moment from 'moment';

class DoctorController extends BaseController {
  constructor() {
    super(Doctor);

    this.getSessions = this.getSessions.bind(this);
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
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
    const searchRgx = rgx(filterBy);
    const filter = {};
    if (status) {
      filter.status = status;
    }

    if (filterBy) {
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
    const slotConfig = await AppointmentConfig.find({}); //TODO: analizar la configuración de slots por Doctor

    if (slotConfig.length === 0)
      return res
        .status(200)
        .json('There are no sessions configured for the Doctor.');

    const doctor = await this._model.findById(req.params.id).populate({
      path: 'appointments',
    });

    if (!doctor) return res.status(404).json('Doctor not found');

    const doctorAppointments = doctor.appointments;

    const {
      slotHours,
      slotMinutes,
      slotPreparation,
      sessions: timeArr,
    } = slotConfig[0];
    let defaultDate = new Date(req.body.date).toISOString().substring(0, 10);
    let sessions = [];
    let _timeArrStartTime;
    let _timeArrEndTime;
    let _tempSlotStartTime;
    let _endSlot;
    let _startSlot;
    let slotId = 0;
    // Loop over timeArr
    for (var i = 0; i < timeArr.length; i++) {
      let session = { sessionName: timeArr[i].name, slots: [] };

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
          // DateTime object is converted to time with the help of javascript functions
          // If you want 24 hour format you can pass hour12 false
          session.slots.push({
            // timeSlotStart: new Date(_startSlot).toLocaleTimeString('es', {
            //   hour: 'numeric',
            //   minute: 'numeric',
            //   hour12: false,
            // }),
            // timeSlotEnd: _endSlot.toLocaleTimeString('es', {
            //   hour: 'numeric',
            //   minute: 'numeric',
            //   hour12: false,
            // })
            id: slotId,
            startTime: new Date(_startSlot),
            endTime: _endSlot,
            available: moment(_startSlot).isSameOrAfter(moment()) && doctorAppointments.filter(appointment => appointment.isActive && moment(appointment.start).isSame(_startSlot, 'minute')).length === 0
          });
        }

        //preparation time is added in last to maintain the break period
        _tempSlotStartTime = _endSlot.setMinutes(
          _endSlot.getMinutes() + parseInt(slotPreparation)
        );
      }

      sessions.push(session);
    }

    return res.status(200).json(sessions);
  }
}

export default DoctorController;
