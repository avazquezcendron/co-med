export const DOCTOR_GET_ALL_REQUEST = 'doctor/doctorGetAllRequest';
export const DOCTOR_GET_ALL_WATCHER = 'doctor/doctorGetAllWatcher';
export const DOCTOR_GET_ALL_SUCCESS = 'doctor/doctorGetAllSuccess';
export const DOCTOR_GET_ALL_FAILURE = 'doctor/doctorGetAllFailure';

export const DOCTORS_INITIALIZE = 'doctor/doctorsInitialize';
export const DOCTOR_INITIALIZE = 'doctor/doctorInitialize';

export const DOCTOR_GET_BY_ID_REQUEST = 'doctor/doctorGetByIdRequest';
export const DOCTOR_GET_BY_ID_WATCHER = 'doctor/doctorGetByIdWatcher';
export const DOCTOR_GET_BY_ID_SUCCESS = 'doctor/doctorGetByIdSuccess';
export const DOCTOR_GET_BY_ID_FAILURE = 'doctor/doctorGetByIdFailure';

export const DOCTOR_UPDATE_HR_WATCHER = 'doctor/doctorUpdateHRWatcher';

export const DOCTOR_SAVE_WATCHER = 'doctor/doctorSaveWatcher';
export const DOCTOR_SAVE_REQUEST = 'doctor/doctorSaveRequest';
export const DOCTOR_SAVE_SUCCESS = 'doctor/doctorSaveSuccess';
export const DOCTOR_SAVE_FAILURE = 'doctor/doctorSaveFailure';

export const DOCTOR_DELETE_WATCHER = 'doctor/doctorDeleteWatcher';
export const DOCTOR_DELETE_REQUEST = 'doctor/doctorDeleteRequest';
export const DOCTOR_DELETE_SUCCESS = 'doctor/doctorDeleteSuccess';
export const DOCTOR_DELETE_FAILURE = 'doctor/doctorDeleteFailure';

export const DOCTOR_CHANGE_STATUS_WATCHER =
  'doctor/doctorChangeStatusWatcher';
export const DOCTOR_CHANGE_STATUS_REQUEST =
  'doctor/doctorChangeStatuseRequest';
export const DOCTOR_CHANGE_STATUS_SUCCESS =
  'doctor/doctorChangeStatuseSuccess';
export const DOCTOR_CHANGE_STATUS_FAILURE =
  'doctor/doctorChangeStatuseFailure';

export const doctorsInitialize = () => {
  return {
    type: DOCTORS_INITIALIZE,
  };
};

export const doctorGetAllWatcher = () => {
  return {
    type: DOCTOR_GET_ALL_WATCHER,
  };
};

export const doctorGetAllRequest = () => {
  return {
    type: DOCTOR_GET_ALL_REQUEST,
  };
};
export const doctorGetAllSuccess = (doctors) => {
  return {
    type: DOCTOR_GET_ALL_SUCCESS,
    payload: doctors,
  };
};

export const doctorGetAllFailure = (error) => {
  return {
    type: DOCTOR_GET_ALL_FAILURE,
    payload: error,
  };
};

export const doctorInitialize = (id) => {
  return {
    type: DOCTOR_INITIALIZE,
  };
};

export const doctorGetByIdWatcher = (id) => {
  return {
    type: DOCTOR_GET_BY_ID_WATCHER,
    payload: id,
  };
};

export const doctorGetByIdRequest = () => {
  return {
    type: DOCTOR_GET_BY_ID_REQUEST,
  };
};
export const doctorGetByIdSuccess = (doctors) => {
  return {
    type: DOCTOR_GET_BY_ID_SUCCESS,
    payload: doctors,
  };
};

export const doctorGetByIdFailure = (error) => {
  return {
    type: DOCTOR_GET_BY_ID_FAILURE,
    payload: error,
  };
};

export const doctorSavetWatcher = (doctor) => {
  return {
    type: DOCTOR_SAVE_WATCHER,
    payload: doctor,
  };
};

export const doctorUpdateHRWatcher = (payload) => {
  return {
    type: DOCTOR_UPDATE_HR_WATCHER,
    payload: payload,
  };
};

export const doctorSaveRequest = () => {
  return {
    type: DOCTOR_SAVE_REQUEST,
  };
};
export const doctorSaveSuccess = (doctor) => {
  return {
    type: DOCTOR_SAVE_SUCCESS,
    payload: doctor,
  };
};

export const doctorSaveFailure = (error) => {
  return {
    type: DOCTOR_SAVE_FAILURE,
    payload: error,
  };
};

export const doctorDeleteWatcher = (doctor) => {
  return {
    type: DOCTOR_DELETE_WATCHER,
    payload: doctor,
  };
};

export const doctorDeleteRequest = () => {
  return {
    type: DOCTOR_DELETE_REQUEST,
  };
};
export const doctorDeleteSuccess = (doctor) => {
  return {
    type: DOCTOR_DELETE_SUCCESS,
    payload: doctor,
  };
};

export const doctorDeleteFailure = (error) => {
  return {
    type: DOCTOR_DELETE_FAILURE,
    payload: error,
  };
};

export const doctorChangeStatustWatcher = (doctor) => {
  return {
    type: DOCTOR_CHANGE_STATUS_WATCHER,
    payload: doctor,
  };
};

export const doctorChangeStatusRequest = () => {
  return {
    type: DOCTOR_CHANGE_STATUS_REQUEST,
  };
};
export const doctorChangeStatusSuccess = (doctor) => {
  return {
    type: DOCTOR_CHANGE_STATUS_SUCCESS,
    payload: doctor,
  };
};

export const doctorChangeStatusFailure = (error) => {
  return {
    type: DOCTOR_CHANGE_STATUS_FAILURE,
    payload: error,
  };
};
