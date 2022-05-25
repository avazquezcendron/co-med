import { call, put, takeLatest, select } from 'redux-saga/effects';

import * as appointmentService from '../../services/appointment.service';
import {
  saveAppointmentRequest,
  saveAppointmentSuccess,
  getAppointmentsRequest,
  getAppointmentsSuccess,
  GET_APPOINTMENTS_WATCHER,
  SAVE_APPOINTMENT_WATCHER,
  saveAppointmentFailure
} from './actions';
import { getLoggedUser } from '../selectors';

function* fetchAppointmentsAsync({ payload }) {
  yield put(getAppointmentsRequest());
  const loggedUser = yield select(getLoggedUser);
  const appointments = yield call(appointmentService.getAll, payload, loggedUser);
  yield put(getAppointmentsSuccess(appointments));
}

function* saveAppointmentAsync({ payload }) {
  try {
    yield put(saveAppointmentRequest());
    const loggedUser = yield select(getLoggedUser);
    let data;
    if (payload.id && payload.id !== '0') {
      data = yield call(appointmentService.update, payload, loggedUser);
      yield put(saveAppointmentSuccess(data));
    } else {
      data = yield call(appointmentService.save, payload, loggedUser);
      yield put(saveAppointmentSuccess(data));
    }
  } catch (err) {
    const errMsg =
      err.response && err.response.data
        ? err.response.data
        : err.message; 
        yield put(saveAppointmentFailure(errMsg));    
  }
}

export function* WatcherAppointments() {
  yield takeLatest(GET_APPOINTMENTS_WATCHER, fetchAppointmentsAsync);
  yield takeLatest(SAVE_APPOINTMENT_WATCHER, saveAppointmentAsync);
}
