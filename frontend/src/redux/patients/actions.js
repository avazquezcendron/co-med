export const PATIENT_GET_ALL_REQUEST = 'patient/patientGetAllRequest';
export const PATIENT_GET_ALL_WATCHER = 'patient/patientGetAllWatcher';
export const PATIENT_GET_ALL_SUCCESS = 'patient/patientGetAllSuccess';
export const PATIENT_GET_ALL_FAILURE = 'patient/patientGetAllFailure';

export const PATIENTS_INITIALIZE = 'patient/patientsInitialize';
export const PATIENT_INITIALIZE = 'patient/patientInitialize';

export const PATIENT_GET_BY_ID_REQUEST = 'patient/patientGetByIdRequest';
export const PATIENT_GET_BY_ID_WATCHER = 'patient/patientGetByIdWatcher';
export const PATIENT_GET_BY_ID_SUCCESS = 'patient/patientGetByIdSuccess';
export const PATIENT_GET_BY_ID_FAILURE = 'patient/patientGetByIdFailure';

export const PATIENT_UPDATE_HR_WATCHER = 'patient/patientUpdateHRWatcher';

export const PATIENT_SAVE_WATCHER = 'patient/patientSaveWatcher';
export const PATIENT_SAVE_REQUEST = 'patient/patientSaveRequest';
export const PATIENT_SAVE_SUCCESS = 'patient/patientSaveSuccess';
export const PATIENT_SAVE_FAILURE = 'patient/patientSaveFailure';

export const PATIENT_DELETE_WATCHER = 'patient/patientDeleteWatcher';
export const PATIENT_DELETE_REQUEST = 'patient/patientDeleteRequest';
export const PATIENT_DELETE_SUCCESS = 'patient/patientDeleteSuccess';
export const PATIENT_DELETE_FAILURE = 'patient/patientDeleteFailure';

export const PATIENT_CHANGE_STATUS_WATCHER =
  'patient/patientChangeStatusWatcher';
export const PATIENT_CHANGE_STATUS_REQUEST =
  'patient/patientChangeStatuseRequest';
export const PATIENT_CHANGE_STATUS_SUCCESS =
  'patient/patientChangeStatuseSuccess';
export const PATIENT_CHANGE_STATUS_FAILURE =
  'patient/patientChangeStatuseFailure';

export const patientsInitialize = () => {
  return {
    type: PATIENTS_INITIALIZE,
  };
};

export const patientGetAllWatcher = () => {
  return {
    type: PATIENT_GET_ALL_WATCHER,
  };
};

export const patientGetAllRequest = () => {
  return {
    type: PATIENT_GET_ALL_REQUEST,
  };
};
export const patientGetAllSuccess = (patients) => {
  return {
    type: PATIENT_GET_ALL_SUCCESS,
    payload: patients,
  };
};

export const patientGetAllFailure = (error) => {
  return {
    type: PATIENT_GET_ALL_FAILURE,
    payload: error,
  };
};

export const patientInitialize = (id) => {
  return {
    type: PATIENT_INITIALIZE,
  };
};

export const patientGetByIdWatcher = (id) => {
  return {
    type: PATIENT_GET_BY_ID_WATCHER,
    payload: id,
  };
};

export const patientGetByIdRequest = () => {
  return {
    type: PATIENT_GET_BY_ID_REQUEST,
  };
};
export const patientGetByIdSuccess = (patients) => {
  return {
    type: PATIENT_GET_BY_ID_SUCCESS,
    payload: patients,
  };
};

export const patientGetByIdFailure = (error) => {
  return {
    type: PATIENT_GET_BY_ID_FAILURE,
    payload: error,
  };
};

export const patientSavetWatcher = (patient) => {
  return {
    type: PATIENT_SAVE_WATCHER,
    payload: patient,
  };
};

export const patientUpdateHRWatcher = (payload) => {
  return {
    type: PATIENT_UPDATE_HR_WATCHER,
    payload: payload,
  };
};

export const patientSaveRequest = () => {
  return {
    type: PATIENT_SAVE_REQUEST,
  };
};
export const patientSaveSuccess = (patient) => {
  return {
    type: PATIENT_SAVE_SUCCESS,
    payload: patient,
  };
};

export const patientSaveFailure = (error) => {
  return {
    type: PATIENT_SAVE_FAILURE,
    payload: error,
  };
};

export const patientDeleteWatcher = (patient) => {
  return {
    type: PATIENT_DELETE_WATCHER,
    payload: patient,
  };
};

export const patientDeleteRequest = () => {
  return {
    type: PATIENT_DELETE_REQUEST,
  };
};
export const patientDeleteSuccess = (patient) => {
  return {
    type: PATIENT_DELETE_SUCCESS,
    payload: patient,
  };
};

export const patientDeleteFailure = (error) => {
  return {
    type: PATIENT_DELETE_FAILURE,
    payload: error,
  };
};

export const patientChangeStatustWatcher = (patient) => {
  return {
    type: PATIENT_CHANGE_STATUS_WATCHER,
    payload: patient,
  };
};

export const patientChangeStatusRequest = () => {
  return {
    type: PATIENT_CHANGE_STATUS_REQUEST,
  };
};
export const patientChangeStatusSuccess = (patient) => {
  return {
    type: PATIENT_CHANGE_STATUS_SUCCESS,
    payload: patient,
  };
};

export const patientChangeStatusFailure = (error) => {
  return {
    type: PATIENT_CHANGE_STATUS_FAILURE,
    payload: error,
  };
};