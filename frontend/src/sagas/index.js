import { all } from "redux-saga/effects";
import { WatcherEcommerceApp } from '../redux/ecommerce'
import { WatcherChatApp } from '../redux/chat'
import { WatcherEmailApp } from '../redux/email'
import { WatcherTodoList } from '../redux/todo';
import { watchBookmarkList } from "../redux/bookmark";
import { WatcherAppointments } from "../redux/appointments";
import { WatcherUsers } from "../redux/user";
import { WatcherPatients } from "../redux/patients";

export default function* rootSagas() {
    yield all([
        // WatcherEcommerceApp(),
        // WatcherChatApp(),
        // WatcherEmailApp(),
        WatcherTodoList(),
        WatcherAppointments(),
        WatcherUsers(),
        WatcherPatients()
        // watchBookmarkList(),
        // watcherTaskApp()
    ])
}