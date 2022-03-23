import axios from 'axios';

export const getAllAppointments = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/appointments.json`);
};

export const getAppointmentSlotsConfig = () => {
  return {
    configSlotHours: 0,
    configSlotMinutes: 30,
    configSlotPreparation: 0,
    timeArr: [
      { sessionName: 'Mañana', startTime: '08:30', endTime: '13:00' },
      { sessionName: 'Tarde', startTime: '14:00', endTime: '16:00' },
    ],
  };
};

export const getAppointmentSessions = () => {
  const slotConfig = getAppointmentSlotsConfig();

  const { configSlotHours, configSlotMinutes, configSlotPreparation, timeArr } =
    slotConfig;
  let defaultDate = new Date().toISOString().substring(0, 10);
  let sessions = [];
  let _timeArrStartTime;
  let _timeArrEndTime;
  let _tempSlotStartTime;
  let _endSlot;
  let _startSlot;
  let slotId = 0;
  // Loop over timeArr
  for (var i = 0; i < timeArr.length; i++) {
    let session = { sessionName: timeArr[i].sessionName, slots: [] };

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
        parseInt(_endSlot.getHours()) + parseInt(configSlotHours)
      );
      _tempSlotStartTime = _endSlot.setMinutes(
        parseInt(_endSlot.getMinutes()) + parseInt(configSlotMinutes)
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
          available: i % 2 === 0 ? true : false, //TODO: remove this
        });
      }

      //preparation time is added in last to maintain the break period
      _tempSlotStartTime = _endSlot.setMinutes(
        _endSlot.getMinutes() + parseInt(configSlotPreparation)
      );
    }

    sessions.push(session);
  }

  return sessions;
};
