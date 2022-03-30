import { call, put, takeLatest } from "redux-saga/effects";

import * as appointmentService from '../../services/appointment.service';
import { saveAppointmentRequest, saveAppointmentSuccess, getAppointmentsRequest, getAppointmentsSuccess } from "./actions";
import { GET_APPOINTMENTS_WATCHER, SAVE_APPOINTMENT_WATCHER } from "../actionTypes";

function* fetchAppointmentsAsync() {
    yield put(getAppointmentsRequest());
    const response = yield call(appointmentService.getAllAppointments);
    const appointments = response.data.map(appointmentData => {
        return { ...appointmentData, resourceId: appointmentData.doctor.id, constraint: 'businessHours' };//TODO: analizar dónde setear las properties netamente de front, relacionadas a plugins de calendarios y demás.
    })
    yield put(getAppointmentsSuccess(appointments));
}

function* saveAppointmentsAsync({ payload }) {
    yield put(saveAppointmentRequest());
    // TODO: Save to BBDD through API
    yield put(saveAppointmentSuccess(payload.id, payload));
}

export function* WatcherAppointments() {
    yield takeLatest(GET_APPOINTMENTS_WATCHER, fetchAppointmentsAsync);
    yield takeLatest(SAVE_APPOINTMENT_WATCHER, saveAppointmentsAsync);
}

