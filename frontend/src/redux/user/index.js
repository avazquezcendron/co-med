import { call, put, takeLatest, select } from 'redux-saga/effects';

import * as userService from '../../services/user.service';
import { getLoggedUser } from '../selectors';
import {
  USER_LOGIN_WATCHER,
  USER_LOGOUT_WATCHER,
  userLogout,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  USER_SAVE_WATCHER,
  userSaveRequest,
  userSaveSuccess,
  userSaveFailure,
  // USER_GET_ALL_WATCHER,
  // userGetAllRequest,
  // userGetAllSuccess
} from './actions';


function* logout({ payload }) {
  localStorage.removeItem('loggedUser')
  localStorage.removeItem('appointmentsConfigSelected')
  yield put(userLogout());
  document.location.href = `${process.env.PUBLIC_URL}/login`
}

function* loginUserAsync({ payload }) {
  try {
    yield put(userLoginRequest());
    const data = yield call(userService.login, payload);
    if (data) {
      yield put(userLoginSuccess(data));
      localStorage.setItem('loggedUser', JSON.stringify(data));
      document.location.href = `${process.env.PUBLIC_URL}/`  
    }    
  } catch (err) {
    const errMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    yield put(userLoginFailure(errMsg));
  }
}

function* saveUserAsync({ payload }) {
  try {
    yield put(userSaveRequest());
    const loggedUser = yield select(getLoggedUser);
    const response = yield call(userService.save, { payload, loggedUser });

    const { data } = response;

    yield put(userSaveSuccess(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message;
    yield put(userSaveFailure(errMsg));
  }
}

// function* fetchUsersAsync() {
//     try {
//         yield put(userGetAllRequest());
//         const loggedUser = yield select(getLoggedUser);
//         const response = yield call(userService.getAll, loggedUser);
//         yield put(userGetAllSuccess(response.data));
//     } catch (err) {
//         const errMsg =
//         err.response && err.response.data
//             ? err.response.data
//             : err.message;
//         // yield put(userSaveFailure(errMsg));
//     }
// }

export function* WatcherUsers() {
  yield takeLatest(USER_LOGIN_WATCHER, loginUserAsync);
  yield takeLatest(USER_SAVE_WATCHER, saveUserAsync);
  yield takeLatest(USER_LOGOUT_WATCHER, logout);
}
