import { combineReducers } from 'redux';
import TodoApp from './todo/reducer';
import Customizer from './customizer/reducer';
import { AppointmentsReducer, AppointmentFormReducer } from './appointments/reducer';
import { UserLoginReducer, UsersReducer } from './user/reducer';
import { PatientsReducer, PatientReducer, VisitsReducer, VisitReducer } from './patients/reducer';
import { DoctorsReducer, DoctorReducer } from './doctors/reducer';
import { RightSidebarReducer } from './right-sidebar/reducer';

const reducers = combineReducers({
    TodoApp,
    Appointments: AppointmentsReducer,
    AppointmentForm: AppointmentFormReducer,
    UserLogin: UserLoginReducer,
    Users: UsersReducer,
    Patients: PatientsReducer,
    Patient: PatientReducer,
    Visits: VisitsReducer,
    Visit: VisitReducer,
    Doctors: DoctorsReducer,
    Doctor: DoctorReducer,
    Customizer,
    RightSidebar: RightSidebarReducer 
});

export default reducers;