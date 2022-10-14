import axios from 'axios';
import SweetAlert from 'sweetalert2';

const loggedUserFromStorage = localStorage.getItem('loggedUser');
const loggedUser = loggedUserFromStorage
  ? JSON.parse(loggedUserFromStorage)
  : null;

const backendApi = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/api`,
});

backendApi.interceptors.request.use(
  (config) => {
    if (config.url?.includes('/auth')) return config;
    if (loggedUser && loggedUser.token) {
      config.headers.Authorization = `Bearer ${loggedUser.token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

backendApi.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // TODO: refactor this logout logic
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('appointmentsConfigSelected');

      return SweetAlert.fire({
        title: 'Atención',
        text: error.response.data ?? `Acceso denegado. Usted no posee los permisos requeridos para acceder al recurso.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        document.location.href = `${process.env.PUBLIC_URL}/login`;
        return Promise.reject(error);
      });
    }
  }
);

export { backendApi };
