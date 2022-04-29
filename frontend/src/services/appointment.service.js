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
      daysOfWeek: slotConfig.sessions[0].daysOfWeek.map((x, index) => x === 1 ? index + 1 : null).filter(x  => x),
      startTime: slotConfig.sessions[0].startTime, //'08:30',
      endTime: slotConfig.sessions[0].endTime,
    },
    {
      daysOfWeek: slotConfig.sessions[1].daysOfWeek.map((x, index) => x === 1 ? index + 1 : null).filter(x  => x),
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
      `${process.env.PUBLIC_URL}/api/appointmentConfig/`,
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