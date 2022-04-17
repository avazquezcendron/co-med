import { all } from "redux-saga/effects";
import { WatcherEcommerceApp } from '../redux/ecommerce'
import { WatcherChatApp } from '../redux/chat'
import { WatcherEmailApp } from '../redux/email'
import { WatcherTodoList } from '../redux/todo';
import { watchBookmarkList } from "../redux/bookmark";
import { WatcherAppointments } from "../redux/appointments";
import { WatcherUsers } from "../redux/user";
import { WatcherPatients } from "../redux/patients";
import { WatcherDoctors } from "../redux/doctors";

export default function* rootSagas() {
    yield all([
        // WatcherEcommerceApp(),
        // WatcherChatApp(),
        // WatcherEmailApp(),
        WatcherTodoList(),
        WatcherAppointments(),
        WatcherUsers(),
        WatcherPatients(),
        WatcherDoctors()
        // watchBookmarkList(),
        // watcherTaskApp()
    ])
}