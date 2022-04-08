import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch } from 'react-redux';

import {
  clearAppointmentForm,
  setDataAppointmentForm,
} from '../../../redux/appointments/actions';
import NewAppointmentWizardComponent from './newAppointmentWizardComponent';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentModalComponent = (props) => {
  const dispatch = useDispatch();
  if (!props.appointmentData.new) {
    dispatch(setDataAppointmentForm(props.appointmentData));
  }

  return (
    <Modal
      isOpen={props.appointmentModal}
      toggle={props.appointmentModalToggle}
      size="lg"
      onClosed={() => dispatch(clearAppointmentForm())}
    >
      <ModalHeader toggle={props.appointmentModalToggle}>
        {props.appointmentData.new
          ? 'Nuevo Turno'
          : 'Turno ' +
            (props.appointmentData.start
              ? props.appointmentData.start.toLocaleDateString('es-AR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) +
                ' - ' +
                props.appointmentData.title
              : '')}
      </ModalHeader>
      <ModalBody>
        {props.appointmentData.new ? (
          <NewAppointmentWizardComponent
            appointmentData={props.appointmentData}
            modalToggle={props.appointmentModalToggle}
          />
        ) : (
          <div className="card">
            <div className="card-body">
              <AppointmentResumeComponent />
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={props.appointmentModalToggle}
              >
                <i className="fa fa-trash mr-2"></i>
                {'Eliminar'}
              </button>
              <button
                type="button"
                className="btn btn-primary ml-1"
                onClick={props.appointmentModalToggle}
              >
                <i className="fa fa-pencil mr-2"></i>
                {'Editar'}
              </button>
            </div>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default AppointmentModalComponent;
