import React, { Fragment, useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import * as appointmentService from '../../../services/appointment.service';
import NewAppointmentWizardComponent from './newAppointmentWizardComponent';

const AppointmentModalComponent = (props) => {
  return (
    <Modal
      isOpen={props.appointmentModal}
      toggle={props.appointmentModalToggle}
      size="lg"
    >
      <ModalHeader toggle={props.appointmentModalToggle}>
        {
          props.appointmentData.new
            ? 'Nuevo Turno'
            : `Turno ${props.appointmentData.start}`
        }
      </ModalHeader>
      <ModalBody>
        <NewAppointmentWizardComponent
          appointmentData={props.appointmentData}
        />
      </ModalBody>
    </Modal>
  );
};

export default AppointmentModalComponent;
