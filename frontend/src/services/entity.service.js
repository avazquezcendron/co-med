import { toast } from 'react-toastify';

import { backendApi } from './axios.service';

export const getAll = async (entity, loggedUser, status = '') => {
  const { data } = await backendApi.get(`/${entity}${status ? '?status='+status : ''}`);
  return data;
};

export const getAllPaginated = async (entity, loggedUser, paginationData) => {
  const { page, limit } = paginationData;
  const { data } = await backendApi.get(`/${entity}/getAllPaginated?page=${page}&limit=${limit}`);
  return data;
};

export const getById = async (entity, id, loggedUser) => {
  try {
    const { data } = await backendApi.get(
      `/${entity}/${id}`
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener los datos del registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};

export const save = async (entity, entityData, loggedUser) => {
  try {
    const { data } = await backendApi.post(`/${entity}`, entityData);
    toast.success('Registro dado de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al dar de alta al registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const update = async (entity, entityData, loggedUser) => {
  try {
    const { data } = await backendApi.put(
      `/${entity}/${entityData.id}`,
      entityData
    );
    toast.success('Registro actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al actualizar al registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const changeStatus = async (entity, id, currentStatus, loggedUser) => {
  try {
    const actionStatus = currentStatus === 'active' ? 'inactivate' : 'activate';
    const { data } = await backendApi.get(`/${entity}/${id}/${actionStatus}`);
    toast.success('El estado del registro se ha actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al actualizar al registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const deleteEntity = async (entity, id, loggedUser) => {
  try {
    const { data } = await backendApi.delete(`/${entity}/${id}`);
    toast.success('El registro se ha borrado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    toast.error(
      `Ocurrió un error al borrar al registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};