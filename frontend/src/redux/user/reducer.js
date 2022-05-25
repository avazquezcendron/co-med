import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_GET_ALL_REQUEST,
  USER_GET_ALL_SUCCESS,
} from './actions';
import * as statusTypes from '../statusTypes';

const loggedUserFromStorage = localStorage.getItem('loggedUser');

const INITIAL_STATE_USER_LOGIN = {
  loggedUser: loggedUserFromStorage ? JSON.parse(loggedUserFromStorage) : {},
  status: statusTypes.LOADING,
};

export const UserLoginReducer = (state = INITIAL_STATE_USER_LOGIN, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { status: statusTypes.LOADING, loggedUser: {} };

    case USER_LOGIN_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        loggedUser: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        status: statusTypes.FAILED,
        error: action.payload,
        loggedUser: {},
      };

    case USER_LOGOUT:
      return { loggedUser: {}, status: '' };
    default:
      return state;
  }
};

export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case USER_GET_ALL_REQUEST:
      return { status: statusTypes.LOADING };

    case USER_GET_ALL_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        ...action.payload,
      };

    default:
      return state;
  }
};
