import axios from 'axios';
import { toast } from 'react-toastify';

export const getAll = async (loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  return await axios.get(`${process.env.PUBLIC_URL}/api/user`, config);
};

export const save = async (newUserData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post('/api/user', newUserData, config);
    toast.success('Usuario dado de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      toast.error(`Ocurrió un error al dar de alta al usuario. Detalle: ${errorMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      throw err;
  }
};

export const update = async (userData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(`/api/user/${userData.id}`, userData, config);
    toast.success('Usuario actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      toast.error(`Ocurrió un error al actualizar al usuario. Detalle: ${errorMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
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
    const { data } = await axios.get(`/api/user/${id}/${actionStatus}`, config);
    toast.success('El estado del usuario se ha actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      toast.error(`Ocurrió un error al actualizar al usuario. Detalle: ${errorMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      throw err;
  }
};

export const getById = async (id, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/user/${id}`,
      config
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      toast.error(`Ocurrió un error al intentar obtener los datos del usuario. Detalle: ${errorMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
  }
};

export const login = async (userInfo) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return await axios.post('/api/auth/login', userInfo, config);
};
