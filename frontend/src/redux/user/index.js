import { call, put, takeLatest, select } from 'redux-saga/effects';

import * as userService from '../../services/user.service';
import { getLoggedUser } from '../selectors';
import {
  USER_LOGIN_WATCHER,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  USER_SAVE_WATCHER,
  userSaveRequest,
  userSaveSuccess,
  userSaveFailure,
  USER_GET_ALL_WATCHER,
  userGetAllRequest,
  userGetAllSuccess
} from './actions';

function* loginUserAsync({ payload }) {
  try {
    yield put(userLoginRequest());
    const [username, password] = payload;
    const response = yield call(userService.login, payload);

    const { data } = response;

    yield put(userLoginSuccess(data));

    localStorage.setItem('loggedUser', JSON.stringify(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data.message
        ? err.response.data.message
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
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    yield put(userSaveFailure(errMsg));
  }
}

function* fetchUsersAsync() {
    try {
        yield put(userGetAllRequest());
        const loggedUser = yield select(getLoggedUser);
        const response = yield call(userService.getAll, loggedUser);
        yield put(userGetAllSuccess(response.data));
    } catch (err) {
        const errMsg =
        err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        // yield put(userSaveFailure(errMsg));
    }
}

export function* WatcherUsers() {
  yield takeLatest(USER_LOGIN_WATCHER, loginUserAsync);
  yield takeLatest(USER_SAVE_WATCHER, saveUserAsync);
  yield takeLatest(USER_GET_ALL_WATCHER, fetchUsersAsync);
}
