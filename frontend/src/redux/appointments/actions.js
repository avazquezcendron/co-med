// Appointments Action Types
export const GET_APPOINTMENTS_WATCHER = "appointments/getAppointmentsWatcher"
export const SAVE_APPOINTMENT_WATCHER = "appointments/saveAppointmentWatcher"
export const SAVE_APPOINTMENT_REQUEST = "appointments/saveAppointmentRequest"
export const SAVE_APPOINTMENT_SUCCESS = "appointments/saveAppointmentSuccess"
export const DELETE_APPOINTMENT_REQUEST = "appointments/deleteAppointmentRequest"
export const DELETE_APPOINTMENT_SUCCESS = "appointments/deleteAppointmentSuccess"
export const GET_APPOINTMENTS_REQUEST = "appointments/getAppointmentsRequest"
export const GET_APPOINTMENTS_SUCCESS = "appointments/getAppointmentsSuccess";
export const SET_DATA_APPOINTMENT_FORM = "appointments/setDataAppointmentForm";
export const CLEAR_APPOINTMENT_FORM = "appointments/clearAppointmentForm";

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
