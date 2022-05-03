import {
  PATIENT_GET_ALL_REQUEST,
  PATIENT_GET_ALL_SUCCESS,
  PATIENT_GET_ALL_FAILURE,
  PATIENT_GET_BY_ID_REQUEST,
  PATIENT_GET_BY_ID_SUCCESS,
  PATIENT_GET_BY_ID_FAILURE,
  PATIENT_SAVE_REQUEST,
  PATIENT_SAVE_SUCCESS,
  PATIENT_SAVE_FAILURE,
  PATIENT_DELETE_REQUEST,
  PATIENT_DELETE_SUCCESS,
  PATIENT_DELETE_FAILURE,
  PATIENT_INITIALIZE,
  PATIENT_CHANGE_STATUS_REQUEST,
  PATIENT_CHANGE_STATUS_SUCCESS,
  PATIENT_CHANGE_STATUS_FAILURE,
  PATIENTS_INITIALIZE,
  PATIENT_GET_VISITS_REQUEST,
  PATIENT_GET_VISITS_SUCCESS,
  PATIENT_GET_VISITS_FAILURE,
  PATIENT_SAVE_VISIT_REQUEST,
  PATIENT_SAVE_VISIT_SUCCESS,
  PATIENT_SAVE_VISIT_FAILURE,
  PATIENT_INITIALIZE_VISIT_FORM,
  PATIENT_RESET_VISIT_FORM
} from './actions';
import * as statusTypes from '../statusTypes';

const INITIAL_STATE_PATIENTS = {
  patients: [],
  status: '',
};

export const PatientsReducer = (state = INITIAL_STATE_PATIENTS, action) => {
  switch (action.type) {
    case PATIENTS_INITIALIZE:
      return INITIAL_STATE_PATIENTS;

    case PATIENT_GET_ALL_REQUEST:
      return { status: statusTypes.LOADING, patients: [] };

    case PATIENT_GET_ALL_SUCCESS:
      return {
        status: statusTypes.LOADED,
        patients: action.payload,
      };

    case PATIENT_GET_ALL_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        patients: [],
      };

    default:
      return state;
  }
};

const INITIAL_STATE_PATIENT = {
  patient: {},
  status: '',
};
export const PatientReducer = (state = INITIAL_STATE_PATIENT, action) => {
  switch (action.type) {
    case PATIENT_INITIALIZE:
      return INITIAL_STATE_PATIENT;

    case PATIENT_GET_BY_ID_REQUEST:
      return { status: statusTypes.LOADING, patient: {} };

    case PATIENT_GET_BY_ID_SUCCESS:
      return {
        status: statusTypes.LOADED,
        patient: action.payload,
      };

    case PATIENT_GET_BY_ID_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        patient: {},
      };

    case PATIENT_SAVE_REQUEST:
      return {
        ...state,
        status: statusTypes.LOADING,
      };

    case PATIENT_SAVE_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        patient: action.payload,
      };

    case PATIENT_SAVE_FAILURE:
      return {
        ...state,
        status: statusTypes.FAILED,
        error: action.payload,
      };

    case PATIENT_DELETE_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case PATIENT_DELETE_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        patient: action.payload,
      };

    case PATIENT_DELETE_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        patient: {},
      };

    case PATIENT_CHANGE_STATUS_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case PATIENT_CHANGE_STATUS_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        patient: action.payload,
      };

    case PATIENT_CHANGE_STATUS_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        patient: {},
      };

    default:
      return state;
  }
};

const INITIAL_STATE_VISITS = {
  visits: [],
  status: '',
};

export const VisitsReducer = (state = INITIAL_STATE_VISITS, action) => {
  switch (action.type) {
    case PATIENT_GET_VISITS_REQUEST:
      return { status: statusTypes.LOADING, visits: [] };

    case PATIENT_GET_VISITS_SUCCESS:
      return {
        status: statusTypes.LOADED,
        visits: action.payload,
      };

    case PATIENT_GET_VISITS_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        visits: [],
      };

    default:
      return state;
  }
};

const INITIAL_STATE_VISIT = {
  visit: {},
  status: '',
};
export const VisitReducer = (state = INITIAL_STATE_VISIT, action) => {
  switch (action.type) {
    case PATIENT_SAVE_VISIT_REQUEST:
      return {
        ...state,
        status: statusTypes.LOADING,
      };

    case PATIENT_SAVE_VISIT_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        visit: action.payload,
      };

    case PATIENT_SAVE_VISIT_FAILURE:
      return {
        ...state,
        status: statusTypes.FAILED,
        error: action.payload,
      };

    case PATIENT_INITIALIZE_VISIT_FORM:
      return {
        ...state,
        status: statusTypes.LOADED,
        visit: action.payload,
      };
    
    case PATIENT_RESET_VISIT_FORM:
      return INITIAL_STATE_VISIT;

    default:
      return state;
  }
};
