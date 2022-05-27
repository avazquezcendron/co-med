import axios from 'axios';
import * as entityService from './entity.service';
import { toast } from 'react-toastify';

export const getAll = (loggedUser, status = '') => {
  return entityService.getAll('doctor', loggedUser, status);
};

export const getById = (id, loggedUser) => {
  return entityService.getById('doctor', id, loggedUser);
};

export const save = (entityData, loggedUser) => {
  return entityService.save('doctor', entityData, loggedUser);
};

export const update = (entityData, loggedUser) => {
  return entityService.update('doctor', entityData, loggedUser);
};

export const changeStatus = (id, currentStatus, loggedUser) => {
  return entityService.changeStatus('doctor', id, currentStatus, loggedUser);
};

export const getDoctorsByFilter = async (filter, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/doctor/?status=active&filterBy=${filter}`,
      config
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener los datos del registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};

export const getDoctorSessions = async (id, startDate, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.PUBLIC_URL}/api/doctor/${id}/sessions`,
      {
        date: startDate.toLocaleDateString('en'),
      },
      config
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener las sesiones del Doctor. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};
