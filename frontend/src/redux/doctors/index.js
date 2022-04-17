import { call, put, takeLatest, select } from 'redux-saga/effects';

import * as doctorService from '../../services/doctor.service';
import { getLoggedUser } from '../selectors';
import {
  DOCTOR_SAVE_WATCHER,
  doctorSaveRequest,
  doctorSaveSuccess,
  doctorSaveFailure,
  DOCTOR_GET_ALL_WATCHER,
  doctorGetAllRequest,
  doctorGetAllSuccess,
  doctorGetAllFailure,
  DOCTOR_GET_BY_ID_WATCHER,
  doctorGetByIdRequest,
  doctorGetByIdSuccess,
  doctorGetByIdFailure,
  DOCTOR_CHANGE_STATUS_WATCHER,
  doctorChangeStatusRequest,
  doctorChangeStatusSuccess,
  doctorChangeStatusFailure,
} from './actions';


function* saveDoctorAsync({ payload }) {
  try {
    yield put(doctorSaveRequest());
    const loggedUser = yield select(getLoggedUser);
    let data;
    if (payload.id && payload.id !== '0') {
      data = yield call(doctorService.update, payload, loggedUser );  
      yield put(doctorSaveSuccess(data));
    } else {
      data = yield call(doctorService.save, payload, loggedUser );  
      yield put(doctorSaveSuccess(data));
    }
  } catch (err) {
    const errMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    yield put(doctorSaveFailure(errMsg));
  }
}

function* changeStatusDoctorAsync({ payload }) {
  try {
    yield put(doctorChangeStatusRequest());
    const loggedUser = yield select(getLoggedUser);
    const data = yield call(doctorService.changeStatus, payload.id, payload.status, loggedUser );  
    yield put(doctorChangeStatusSuccess(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    yield put(doctorChangeStatusFailure(errMsg));
  }
}

function* fetchDoctorsAsync() {
    try {
        yield put(doctorGetAllRequest());
        const loggedUser = yield select(getLoggedUser);
        const data = yield call(doctorService.getAll, loggedUser);
        yield put(doctorGetAllSuccess(data));
    } catch (err) {
        const errMsg =
        err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        yield put(doctorGetAllFailure(errMsg));
    }
}

function* fetchDoctorAsync({ payload }) {
  try {
      yield put(doctorGetByIdRequest());
      const loggedUser = yield select(getLoggedUser);
      const data = yield call(doctorService.getById, payload, loggedUser);
      yield put(doctorGetByIdSuccess(data));
  } catch (err) {
      const errMsg =
      err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      yield put(doctorGetByIdFailure(errMsg));
  }
}

export function* WatcherDoctors() {
  yield takeLatest(DOCTOR_SAVE_WATCHER, saveDoctorAsync);
  yield takeLatest(DOCTOR_GET_ALL_WATCHER, fetchDoctorsAsync);
  yield takeLatest(DOCTOR_GET_BY_ID_WATCHER, fetchDoctorAsync);
  yield takeLatest(DOCTOR_CHANGE_STATUS_WATCHER, changeStatusDoctorAsync);
}
