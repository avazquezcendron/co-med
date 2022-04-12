import axios from 'axios';
import { toast } from 'react-toastify';

export const getAll = async (loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/patient`, config);
  return data;
};

export const getById = async (id, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/patient/${id}`,
      config
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener los datos del paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};

export const save = async (patientData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post(`${process.env.PUBLIC_URL}/api/patient`, patientData, config);
    toast.success('Paciente dado de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(
      `Ocurrió un error al dar de alta al Paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const update = async (patientData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.PUBLIC_URL}/api/patient/${patientData.id}`,
      patientData,
      config
    );
    toast.success('Paciente actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(
      `Ocurrió un error al actualizar al paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const changeStatus = async (id, currentStatus, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const actionStatus = currentStatus === 'active' ? 'inactivate' : 'activate';
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/patient/${id}/${actionStatus}`, config);
    toast.success('El estado del paciente se ha actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(
      `Ocurrió un error al actualizar al paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};
