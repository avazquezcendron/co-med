import {
  GET_APPOINTMENTS_WATCHER,
  SAVE_APPOINTMENT_WATCHER,
  CLEAR_APPOINTMENT_FORM,
  SET_DATA_APPOINTMENT_FORM,
  SAVE_APPOINTMENT_REQUEST,
  SAVE_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  GET_APPOINTMENTS_REQUEST,
  GET_APPOINTMENTS_SUCCESS,
} from '../../redux/actionTypes';

export const getAppointmentsWatcher = () => {
  return {
    type: GET_APPOINTMENTS_WATCHER,
  };
};

export const saveAppointmentWatcher = (appointmentData) => {
  return {
    type: SAVE_APPOINTMENT_WATCHER,
    payload: appointmentData
  };
};

export const getAppointmentsRequest = () => {
  return {
    type: GET_APPOINTMENTS_REQUEST,
  };
};

export const getAppointmentsSuccess = (appointments) => {
  return {
    type: GET_APPOINTMENTS_SUCCESS,
    payload: appointments,
  };
};

// export const newAppointment = (newAppointmentData) => {
//   return {
//     type: NEW_APPOINTMENT,
//     payload: newAppointmentData
//   };
// };

// export const editAppointment = (id, editAppointmentData) => {
//   return {
//     type: EDIT_APPOINTMENT,
//     payload: { id, editAppointmentData }
//   };
// };

export const saveAppointmentRequest = () => {
  return {
    type: SAVE_APPOINTMENT_REQUEST,
  };
};

export const saveAppointmentSuccess = (id, appointmentData, isNew) => {
  return {
    type: SAVE_APPOINTMENT_SUCCESS,
    payload: { id, appointmentData, isNew },
  };
};

// export const addAppointmentRequest = () => {
//   return {
//     type: ADD_APPOINTMENT_REQUEST
//   };
// };

// export const addAppointmentSuccess = appointmentData => {
//     return {
//       type: ADD_APPOINTMENT_SUCCESS,
//       payload: appointmentData
//     };
// };

// export const updateAppointmentRequest = () => {
//   return {
//     type: UPDATE_APPOINTMENT_REQUEST
//   };
// };

// export const updateAppointmentSuccess = (id, appointmentData) => {
//     return {
//       type: UPDATE_APPOINTMENT_SUCCESS,
//       payload: { id, appointmentData }
//     };
// };

export const deleteAppointmentRequest = () => {
  return {
    type: DELETE_APPOINTMENT_REQUEST,
  };
};

export const deleteAppointmentSuccess = (id) => {
  return {
    type: DELETE_APPOINTMENT_SUCCESS,
    payload: id,
  };
};

export const setDataAppointmentForm = (appointmentData) => {
  return {
    type: SET_DATA_APPOINTMENT_FORM,
    payload: appointmentData,
  };
};

export const clearAppointmentForm = () => {
  return { type: CLEAR_APPOINTMENT_FORM };
};
