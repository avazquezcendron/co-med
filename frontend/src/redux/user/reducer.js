import {
USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS,
USER_LOGIN_FAILURE,
USER_LOGOUT,
USER_GET_ALL_REQUEST,
USER_GET_ALL_SUCCESS
} from './actions'
import * as statusTypes from '../statusTypes';

export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { status: statusTypes.LOADING };

    case USER_LOGIN_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        loggedUser: action.payload
      };
    case USER_LOGIN_FAILURE:
      return {
        status: statusTypes.LOADED,
        error: action.payload
      };

    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case USER_GET_ALL_REQUEST:
      return { status: statusTypes.LOADING };

    case USER_GET_ALL_SUCCESS:
      return {
        status: statusTypes.SUCCEEDED,
        ...action.payload
      };

    default:
      return state
  }
}
