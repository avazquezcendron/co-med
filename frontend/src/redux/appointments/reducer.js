import {
  CLEAR_APPOINTMENT_FORM,
  SET_DATA_APPOINTMENT_FORM,
  SAVE_APPOINTMENT_REQUEST,
  SAVE_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  GET_APPOINTMENTS_REQUEST,
  GET_APPOINTMENTS_SUCCESS,
  APPOINTMENTS_INITIALIZE
} from './actions';
import * as statusTypes from '../statusTypes';

const INITIAL_STATE_APPOINTMENTS = {
  appointments: [],
  status: '',
};
export const AppointmentsReducer = (
  state = INITIAL_STATE_APPOINTMENTS,
  action
) => {
  switch (action.type) {
    // case NEW_APPOINTMENT:
    //   return {
    //     ...state,
    //     status: statusTypes.SUCCEEDED,
    //     appointments: [...state.appointments, action.payload],
    //   };

    // case EDIT_APPOINTMENT:
    //   return {
    //     ...state,
    //     status: statusTypes.SUCCEEDED,
    //     appointments: state.appointments.map((appointment) =>
    //       appointment.id === action.payload.id
    //         ? { ...appointment, ...action.payload.appointmentData }
    //         : appointment
    //     )
    //   };
    case APPOINTMENTS_INITIALIZE:
      return INITIAL_STATE_APPOINTMENTS;

    case GET_APPOINTMENTS_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case GET_APPOINTMENTS_SUCCESS:
      return {
        status: statusTypes.LOADED,
        appointments: action.payload.sort((x, y) => new Date(x.start) - new Date(y.start))
      };

    case SAVE_APPOINTMENT_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case SAVE_APPOINTMENT_SUCCESS:
      // let appointments = [];
      // if (action.payload.appointmentData.new) {
      //   appointments = [...state.appointments, action.payload.appointmentData];
      // } else {
      //   appointments = state.appointments.map((appointment) =>
      //     appointment.id === action.payload.id
      //       ? { ...appointment, ...action.payload.appointmentData }
      //       : appointment
      //   );
      // }

      return {
        status: statusTypes.SUCCEEDED,
        appointments:[]
      };

    // case ADD_APPOINTMENT_REQUEST:
    //   return { ...state, status: statusTypes.LOADING };

    // case ADD_APPOINTMENT_SUCCESS:
    //   return { ...state, status: statusTypes.SUCCEEDED, appointments: [...state.appointments, action.payload ] };

    // case UPDATE_APPOINTMENT_REQUEST:
    //   return { ...state, status: statusTypes.LOADING };

    // case UPDATE_APPOINTMENT_SUCCESS:
    //   return {
    //     ...state,
    //     status: statusTypes.SUCCEEDED,
    //     appointments: state.appointments.map((appointment) =>
    //       appointment.id === action.payload.id
    //         ? { ...appointment, ...action.payload.appointmentData }
    //         : appointment
    //     ),
    //   };

    case DELETE_APPOINTMENT_REQUEST:
      return { ...state, status: statusTypes.LOADING };

    case DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        status: statusTypes.SUCCEEDED,
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export const AppointmentFormReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DATA_APPOINTMENT_FORM:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_APPOINTMENT_FORM:
      return {};

    default:
      return { ...state };
  }
};
