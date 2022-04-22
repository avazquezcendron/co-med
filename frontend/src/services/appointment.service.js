import axios from 'axios';
import { toast } from 'react-toastify';

export const getAll = async (loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/appointment`,
    config
  );
  return data;
};

export const save = async (appointmentData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.PUBLIC_URL}/api/appointment`,
      appointmentData,
      config
    );
    toast.success('Turno dado de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al dar de alta el Turno. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const update = async (appointmentData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.PUBLIC_URL}/api/appointment/${appointmentData.id}`,
      appointmentData,
      config
    );
    toast.success('Turno actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al actualizar el Turno. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const getBussinesHoursBySlot = (slotConfig) => {
  return [
    {
      daysOfWeek: slotConfig.sessions[0].daysOfWeek,
      startTime: slotConfig.sessions[0].startTime, //'08:30',
      endTime: slotConfig.sessions[0].endTime,
    },
    {
      daysOfWeek: slotConfig.sessions[1].daysOfWeek,
      startTime: slotConfig.sessions[1].startTime, //'08:30',
      endTime: slotConfig.sessions[1].endTime,
    },
  ];
};

export const getBussinesHours = async (loggedUser) => {
  const slotConfig = await getAppointmentSlotsConfig(loggedUser);
  if (slotConfig?.length === 0) return [];

  return getBussinesHoursBySlot(slotConfig[0]);
};

export const getAppointmentSlotsConfig = async (loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/appointmentconfig/`,
      config
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al obtener la configuración de los turnos. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const getAppointmentSessions = async (loggedUser) => {
  const slotConfig = await getAppointmentSlotsConfig(loggedUser);

  if (slotConfig?.length === 0) return [];

  const {
    slotHours,
    slotMinutes,
    slotPreparation,
    sessions: timeArr,
  } = slotConfig[0];
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
          available: i % 2 === 0 ? true : false, //TODO: remove this. This must be setted based on doctor's availability
        });
      }

      //preparation time is added in last to maintain the break period
      _tempSlotStartTime = _endSlot.setMinutes(
        _endSlot.getMinutes() + parseInt(slotPreparation)
      );
    }

    sessions.push(session);
  }

  return sessions;
};
