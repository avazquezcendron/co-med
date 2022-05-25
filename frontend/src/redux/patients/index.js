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
  PATIENT_UPDATE_HR_WATCHER,
  PATIENT_GET_VISITS_WATCHER,
  patientGetVisitsRequest,
  patientGetVisitsSuccess,
  patientGetVisitsFailure,
  PATIENT_SAVE_VISIT_WATCHER,
  patientSaveVisitsRequest,
  patientSaveVisitSuccess,
  patientSaveVisitFailure,
} from './actions';

function* savePatientAsync({ payload }) {
  try {
    yield put(patientSaveRequest());
    const loggedUser = yield select(getLoggedUser);
    let data;
    if (payload.id && payload.id !== '0') {
      data = yield call(patientService.update, payload, loggedUser);
      yield put(patientSaveSuccess(data));
    } else {
      data = yield call(patientService.save, payload, loggedUser);
      yield put(patientSaveSuccess(data));
    }
  } catch (err) {
    const errMsg =
      err.response && err.response.data ? err.response.data : err.message;
    yield put(patientSaveFailure(errMsg));
  }
}

function* updateHRAsync({ payload }) {
  try {
    yield put(patientSaveRequest());
    const loggedUser = yield select(getLoggedUser);
    let data;
    data = yield call(
      patientService.updateHealthRecord,
      payload.patient,
      payload.healthRecordData,
      loggedUser
    );
    yield put(patientSaveSuccess(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data ? err.response.data : err.message;
    yield put(patientSaveFailure(errMsg));
  }
}

function* changeStatusPatientAsync({ payload }) {
  try {
    yield put(patientChangeStatusRequest());
    const loggedUser = yield select(getLoggedUser);
    const data = yield call(
      patientService.changeStatus,
      payload.id,
      payload.status,
      loggedUser
    );
    yield put(patientChangeStatusSuccess(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data ? err.response.data : err.message;
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
      err.response && err.response.data ? err.response.data : err.message;
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
      err.response && err.response.data ? err.response.data : err.message;
    yield put(patientGetByIdFailure(errMsg));
  }
}

function* fetchVisitsAsync({ payload }) {
  try {
    yield put(patientGetVisitsRequest());
    const loggedUser = yield select(getLoggedUser);
    const data = yield call(patientService.getVisits, payload, loggedUser);
    yield put(patientGetVisitsSuccess(data));
  } catch (err) {
    const errMsg =
      err.response && err.response.data ? err.response.data : err.message;
    yield put(patientGetVisitsFailure(errMsg));
  }
}

function* saveVisitAsync({ payload }) {
  try {
    yield put(patientSaveVisitsRequest());
    const loggedUser = yield select(getLoggedUser);
    let data;
    if (payload.visitData.id && payload.visitData.id !== '0') {
      data = yield call(patientService.updateVisit, payload.patient, payload.visitData, loggedUser);
      yield put(patientSaveVisitSuccess(data));
    } else {
      data = yield call(patientService.saveVisit, payload.patient, payload.visitData, loggedUser);
      yield put(patientSaveVisitSuccess(data));
    }
  } catch (err) {
    const errMsg =
      err.response && err.response.data ? err.response.data : err.message;
    yield put(patientSaveVisitFailure(errMsg));
  }
}

export function* WatcherPatients() {
  yield takeLatest(PATIENT_SAVE_WATCHER, savePatientAsync);
  yield takeLatest(PATIENT_GET_ALL_WATCHER, fetchPatientsAsync);
  yield takeLatest(PATIENT_GET_BY_ID_WATCHER, fetchPatientAsync);
  yield takeLatest(PATIENT_CHANGE_STATUS_WATCHER, changeStatusPatientAsync);
  yield takeLatest(PATIENT_UPDATE_HR_WATCHER, updateHRAsync);
  yield takeLatest(PATIENT_GET_VISITS_WATCHER, fetchVisitsAsync);
  yield takeLatest(PATIENT_SAVE_VISIT_WATCHER, saveVisitAsync);
}
