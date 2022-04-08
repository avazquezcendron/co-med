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
} from './actions';
import * as statusTypes from '../statusTypes';

const INITIAL_STATE_PATIENTS = {
  patients: [],
  status: '',
};

export const PatientsReducer = (state = INITIAL_STATE_PATIENTS, action) => {
  switch (action.type) {
    case PATIENT_GET_ALL_REQUEST:
      return { status: statusTypes.LOADING };

    case PATIENT_GET_ALL_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        patients: action.payload,
      };

    case PATIENT_GET_ALL_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
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
        status: statusTypes.FAILED,
        error: action.payload,
        patient: {}
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
        patient: {}
      };

    default:
      return state;
  }
};
