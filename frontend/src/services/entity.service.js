import axios from 'axios';
import { toast } from 'react-toastify';

export const getAll = async (entity, loggedUser, status = '') => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/${entity}${status ? '?status='+status : ''}`, config);
  return data;
};

export const getById = async (entity, id, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/${entity}/${id}`,
      config
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post(`/api/${entity}`, entityData, config);
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/${entity}/${entityData.id}`,
      entityData,
      config
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const actionStatus = currentStatus === 'active' ? 'inactivate' : 'activate';
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/${entity}/${id}/${actionStatus}`, config);
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.delete(`${process.env.PUBLIC_URL}/api/${entity}/${id}`, config);
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