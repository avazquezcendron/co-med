import { call, put, takeLatest, select } from 'redux-saga/effects';

import * as patientService from '../../services/patient.service';
import { getLoggedUser } from '../selectors';
import {
  PATIENT_SAVE_WATCHER,
  patientSaveRequest,
  patientSaveSuccess,
  patientSaveFailure,
  PATIENT_GET_ALL_WATCHER,
  patientGetAllRequest,
  patientGetAllSuccess,
  patientGetAllFailure,
  PATIENT_GET_BY_ID_WATCHER,
  patientGetByIdRequest,
  patientGetByIdSuccess,
  patientGetByIdFailure,
  PATIENT_CHANGE_STATUS_WATCHER,
  patientChangeStatusRequest,
  patientChangeStatusSuccess,
  patientChangeStatusFailure,
} from './actions';


function* savePatientAsync({ payload }) {
  try {
    yield put(patientSaveRequest());
    const loggedUser = yield select(getLoggedUser);
    let data;
    if (payload.id && payload.id !== '0') {
      data = yield call(patientService.update, payload, loggedUser );  
      yield put(patientSaveSuccess(data));
    } else {
      data = yield call(patientService.save, payload, loggedUser );  
      yield put(patientSaveSuccess(data));
    }
  } catch (err) {
    const errMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    yield put(patientSaveFailure(errMsg));
  }
}

function* changeStatusPatientAsync({ payload }) {
  try {
    yield put(patientChangeStatusRequest());
    const loggedUser = yield select(getLoggedUser);
    const data = yield call(patientService.changeStatus, payload.id, payload.status, loggedUser );  
    yield put(patientChangeStatusSuccess(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    yield put(patientChangeStatusFailure(errMsg));
  }
}

function* fetchPatientsAsync() {
    try {
        yield put(patientGetAllRequest());
        const loggedUser = yield select(getLoggedUser);
        const data = yield call(patientService.getAll, loggedUser);
        yield put(patientGetAllSuccess(data));
    } catch (err) {
        const errMsg =
        err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        yield put(patientGetAllFailure(errMsg));
    }
}

function* fetchPatientAsync({ payload }) {
  try {
      yield put(patientGetByIdRequest());
      const loggedUser = yield select(getLoggedUser);
      const data = yield call(patientService.getById, payload, loggedUser);
      yield put(patientGetByIdSuccess(data));
  } catch (err) {
      const errMsg =
      err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      yield put(patientGetByIdFailure(errMsg));
  }
}

export function* WatcherPatients() {
  yield takeLatest(PATIENT_SAVE_WATCHER, savePatientAsync);
  yield takeLatest(PATIENT_GET_ALL_WATCHER, fetchPatientsAsync);
  yield takeLatest(PATIENT_GET_BY_ID_WATCHER, fetchPatientAsync);
  yield takeLatest(PATIENT_CHANGE_STATUS_WATCHER, changeStatusPatientAsync);
}
