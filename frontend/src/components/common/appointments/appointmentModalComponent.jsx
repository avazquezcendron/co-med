import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from 'sweetalert2';

import {
  clearAppointmentForm,
  setDataAppointmentForm,
  saveAppointmentWatcher,
} from '../../../redux/appointments/actions';
import NewAppointmentWizardComponent from './newAppointmentWizardComponent';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentModalComponent = (props) => {
  const appointment = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();

  const handleEditAppointmentClick = () => {
    dispatch(setDataAppointmentForm({ ...appointment, edit: true }));
  };

  const handleChangeStatusAppointment = (newStatus) => {
    SweetAlert.fire({
      title: 'Atención',
      text: appointment.isActive ? 'El turno será cancelado. Desea continuar?' : 'El turno pasará a estar activo nuevamente. Desea continuar?',
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

  return (
    <Modal
      isOpen={props.appointmentModal}
      toggle={props.appointmentModalToggle}
      size="lg"
      onClosed={() => dispatch(clearAppointmentForm())}
    >
      <ModalHeader toggle={props.appointmentModalToggle} className={`border-3 ${appointment.isCancelled ? 'b-l-danger' : ''} ${appointment.isDone ? 'b-l-success' : ''} ${appointment.isExpired ? 'b-l-dark' : ''} ${appointment.isActive ? 'b-l-primary' : ''} `}>
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
                  {'Cancelar Turno'}
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-1"
                  onClick={handleEditAppointmentClick}
                >
                  <i className="fa fa-pencil mr-2"></i>
                  {'Editar'}
                </button>
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
