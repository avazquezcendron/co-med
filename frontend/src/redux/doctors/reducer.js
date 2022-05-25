import {
  DOCTOR_GET_ALL_REQUEST,
  DOCTOR_GET_ALL_SUCCESS,
  DOCTOR_GET_ALL_FAILURE,
  DOCTOR_GET_BY_ID_REQUEST,
  DOCTOR_GET_BY_ID_SUCCESS,
  DOCTOR_GET_BY_ID_FAILURE,
  DOCTOR_SAVE_REQUEST,
  DOCTOR_SAVE_SUCCESS,
  DOCTOR_SAVE_FAILURE,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DELETE_FAILURE,
  DOCTOR_INITIALIZE,
  DOCTOR_CHANGE_STATUS_REQUEST,
  DOCTOR_CHANGE_STATUS_SUCCESS,
  DOCTOR_CHANGE_STATUS_FAILURE,
  DOCTORS_INITIALIZE
} from './actions';
import * as statusTypes from '../statusTypes';

const INITIAL_STATE_DOCTORS = {
  doctors: [],
  status: '',
};

export const DoctorsReducer = (state = INITIAL_STATE_DOCTORS, action) => {
  switch (action.type) {
    case DOCTORS_INITIALIZE:
      return INITIAL_STATE_DOCTORS;

    case DOCTOR_GET_ALL_REQUEST:
      return { status: statusTypes.LOADING, doctors: [] };

    case DOCTOR_GET_ALL_SUCCESS:
      return {
        status: statusTypes.LOADED,
        doctors: action.payload,
      };

    case DOCTOR_GET_ALL_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        doctors: [],
      };

    default:
      return state;
  }
};

const INITIAL_STATE_DOCTOR = {
  doctor: {},
  status: '',
};
export const DoctorReducer = (state = INITIAL_STATE_DOCTOR, action) => {
  switch (action.type) {
    case DOCTOR_INITIALIZE:
      return INITIAL_STATE_DOCTOR;

    case DOCTOR_GET_BY_ID_REQUEST:
      return { status: statusTypes.LOADING, doctor: {} };

    case DOCTOR_GET_BY_ID_SUCCESS:
      return {
        status: statusTypes.LOADED,
        doctor: action.payload,
      };

    case DOCTOR_GET_BY_ID_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        doctor: {},
      };

    case DOCTOR_SAVE_REQUEST:
      return {
        ...state,
        status: statusTypes.LOADING,
      };

    case DOCTOR_SAVE_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        doctor: action.payload,
      };

    case DOCTOR_SAVE_FAILURE:
      return {
        ...state,
        status: statusTypes.FAILED,
        error: action.payload,        
      };

    case DOCTOR_DELETE_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case DOCTOR_DELETE_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        doctor: action.payload,
      };

    case DOCTOR_DELETE_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        doctor: {},
      };

    case DOCTOR_CHANGE_STATUS_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case DOCTOR_CHANGE_STATUS_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        doctor: action.payload,
      };

    case DOCTOR_CHANGE_STATUS_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        doctor: {},
      };

    default:
      return state;
  }
};