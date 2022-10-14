import { toast } from 'react-toastify';

import { backendApi } from './axios.service';

export const getAll = async (loggedUser) => {
  return await backendApi.get(`/user`);
};

export const save = async (newUserData, loggedUser) => {
  try {
    const { data } = await backendApi.post(
      `/user`,
      newUserData
    );
    toast.success('Usuario dado de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al dar de alta al usuario. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const update = async (userData, loggedUser) => {
  try {
    const { data } = await backendApi.put(
      `/user/${userData.id}`,
      userData
    );
    toast.success('Usuario actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al actualizar al usuario. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const changeStatus = async (id, currentStatus, loggedUser) => {
  try {
    const actionStatus = currentStatus === 'active' ? 'inactivate' : 'activate';
    const { data } = await backendApi.get(
      `/user/${id}/${actionStatus}`
    );
    toast.success('El estado del usuario se ha actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al actualizar al usuario. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const getById = async (id, loggedUser) => {
  try {
    const { data } = await backendApi.get(
      `/user/${id}`
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener los datos del usuario. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};

export const login = async (userInfo) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await backendApi.post(
      `/auth/login`,
      userInfo,
      config
    );
    toast.success(`Bienvenid@ ${data.user.firstName}!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response.status === 401 ? 'Usuario o Contraseña inválidos.' : '';
    toast.error(
      `Error al intentar ingresar al sistema. 
      Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};
