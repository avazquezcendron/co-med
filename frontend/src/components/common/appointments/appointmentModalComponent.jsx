import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from 'sweetalert2';

import {
  clearAppointmentForm,
  setDataAppointmentForm,
  saveAppointmentWatcher,
} from '../../../redux/appointments/actions';
import { patientInitializeVisitForm } from '../../../redux/patients/actions';
import NewAppointmentWizardComponent from './newAppointmentWizardComponent';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentModalComponent = (props) => {
  const appointment = useSelector((store) => store.AppointmentForm);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const handleEditAppointmentClick = () => {
    dispatch(setDataAppointmentForm({ ...appointment, edit: true }));
  };

  const handleChangeStatusAppointment = (newStatus) => {
    SweetAlert.fire({
      title: 'Atención',
      text: appointment.isActive
        ? appointment.isLocked ? 'El bloqueo de agenda será cancelado. Desea continuar?' : 'El turno será cancelado. Desea continuar?'
        : 'El turno pasará a estar activo nuevamente. Desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(saveAppointmentWatcher({ ...appointment, status: newStatus }));
        props.appointmentModalToggle();
      }
    });
  };

  const startVisit = () => {
    SweetAlert.fire({
      title: 'Atención',
      text: 'El turno será marcado como finalizado y se comenzará la consulta con el paciente. Desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(saveAppointmentWatcher({ ...appointment, status: 'done' }));
        const visitData = {
          doctor: appointment.doctor,
          createdAt: new Date(),
          healthRecord: appointment.patient.healthRecord,
          studyOrders: [],
          laboratoryOrders: [],
          prescriptions: [],
        };
        dispatch(patientInitializeVisitForm(visitData));
        props.history.push(
          `${process.env.PUBLIC_URL}/patient/${appointment.patient.id}?mode=edit`
        );
        props.appointmentModalToggle();
      }
    });
  };

  return (
    <Modal
      isOpen={props.appointmentModal}
      toggle={props.appointmentModalToggle}
      size="lg"
      onClosed={() => dispatch(clearAppointmentForm())}
    >
      <ModalHeader
        toggle={props.appointmentModalToggle}
        className={`border-3 ${
          appointment.appointmentType === 'sobreturno'
            ? 'b-l-warning'
            : appointment.isCancelled
            ? 'b-l-danger'
            : appointment.isDone
            ? 'b-l-success'
            : appointment.isExpired
            ? 'b-l-dark'
            : appointment.isActive
            ? 'b-l-primary'
            : ''
        }`}
      >
        {appointment.new ? (
          'Nuevo Turno'
        ) : (
          <i className="icofont icofont-ui-calendar"> {appointment.title}</i>
        )}
      </ModalHeader>
      <ModalBody>
        {appointment.new || appointment.edit ? (
          <NewAppointmentWizardComponent
            modalToggle={props.appointmentModalToggle}
          />
        ) : (
          <div className="card">
            <div className="card-body">
              <AppointmentResumeComponent />
            </div>
            {appointment.isActive && (
              <div className="card-footer text-center">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleChangeStatusAppointment('cancelled')}
                >
                  <i className="fa fa-times mr-2"></i>
                  {`Cancelar ${appointment.appointmentType !== 'bloqueo' ? 'Turno' : 'Bloqueo de Agenda'}`}
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-1"
                  onClick={handleEditAppointmentClick}
                >
                  <i className="fa fa-pencil mr-2"></i>
                  {'Editar'}
                </button>
                {loggedUser.user.isDoctor &&
                  loggedUser.user.doctor.id === appointment.doctor.id && !appointment.isLocked && (
                    <button
                      type="button"
                      className="btn btn-success ml-1 pull-right"
                      onClick={() => startVisit()}
                    >
                      <i className="fa fa-sign-in  mr-2"></i>
                      {'Iniciar Consulta'}
                    </button>
                  )}
              </div>
            )}
            {appointment.isCancelled && (
              <div className="card-footer text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleChangeStatusAppointment('active')}
                >
                  <i className="fa fa-plus mr-2"></i>
                  {'Activar'}
                </button>
              </div>
            )}
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default AppointmentModalComponent;
