// Appointments Action Types
export const GET_APPOINTMENTS_WATCHER = "appointments/getAppointmentsWatcher"
export const GET_APPOINTMENTS_REQUEST = "appointments/getAppointmentsRequest"
export const GET_APPOINTMENTS_SUCCESS = "appointments/getAppointmentsSuccess";
export const SAVE_APPOINTMENT_WATCHER = "appointments/saveAppointmentWatcher"
export const SAVE_APPOINTMENT_REQUEST = "appointments/saveAppointmentRequest"
export const SAVE_APPOINTMENT_SUCCESS = "appointments/saveAppointmentSuccess"
export const SAVE_APPOINTMENT_FAILURE = "appointments/saveAppointmentFailure"
export const DELETE_APPOINTMENT_REQUEST = "appointments/deleteAppointmentRequest"
export const DELETE_APPOINTMENT_SUCCESS = "appointments/deleteAppointmentSuccess"
export const SET_DATA_APPOINTMENT_FORM = "appointments/setDataAppointmentForm";
export const CLEAR_APPOINTMENT_FORM = "appointments/clearAppointmentForm";

export const APPOINTMENTS_INITIALIZE = "appointments/appointmentsInitialize";

export const appointmentsInitialize = () => {
  return {
    type: APPOINTMENTS_INITIALIZE,
  };
};

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


export const saveAppointmentRequest = () => {
  return {
    type: SAVE_APPOINTMENT_REQUEST,
  };
};

export const saveAppointmentSuccess = (id, appointmentData) => {
  return {
    type: SAVE_APPOINTMENT_SUCCESS,
    payload: appointmentData,
  };
};

export const saveAppointmentFailure = (error) => {
  return {
    type: SAVE_APPOINTMENT_FAILURE,
    payload: error,
  };
};

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
