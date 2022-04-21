import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearAppointmentForm,
  setDataAppointmentForm,
} from '../../../redux/appointments/actions';
import NewAppointmentWizardComponent from './newAppointmentWizardComponent';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentModalComponent = (props) => {
  const appointment = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();
 
  const handleEditAppointmentClick = () => {
    dispatch(setDataAppointmentForm({ ...appointment, edit: true}));
  }

  return (
    <Modal
      isOpen={props.appointmentModal}
      toggle={props.appointmentModalToggle}
      size="lg"
      onClosed={() => dispatch(clearAppointmentForm())}
    >
      <ModalHeader toggle={props.appointmentModalToggle}>
        {appointment.new ? (
          'Nuevo Turno'
        ) : (
          <i className="icofont icofont-ui-calendar">
            {' '}
            {appointment.title}
          </i>
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
                  onClick={props.appointmentModalToggle}
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
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default AppointmentModalComponent;
