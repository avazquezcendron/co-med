import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

import { saveAppointmentWatcher } from '../../../redux/appointments/actions';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentConfirmComponent = (props) => {
  const appointmentData = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();

  const generateAppointment = () => {
    if (!appointmentData || !appointmentData.start || !appointmentData.patient || !appointmentData.doctor) {
      toast.error('Faltan completar datos del turno.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      SweetAlert.fire({
        title: 'Atención',
        text: `Se dará de alta un ${appointmentData.appointmentType === 'turno' ? 'turno' : 'sobreturno'} el día ${
        appointmentData.start
          ? appointmentData.start.toLocaleDateString('es-AR', {
            // timeZone: 'UTC',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }) +
          ', ' +
          appointmentData.start.toLocaleTimeString('es', {
            // timeZone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          }) +
          'hs'
          : ''
        } para el paciente ${appointmentData.patient.fullName} con el doctor/a ${
        appointmentData.doctor.fullName
        }.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          dispatch(saveAppointmentWatcher(appointmentData));
          props.modalToggle();
        } else {
          toast.error('Se canceló el alta del turno.', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
    }
  };
  return (
    <div className="row  m-50">
      <div className="col-md-12">
        <AppointmentResumeComponent />
        <p className="text-muted f-w-700 f-12 m-t-50">
          Puede revisar y/o corregir los datos ingresados haciendo click{' '}
          <a href="#javascript" onClick={() => props.jumpToStep(0)}>
            aquí
          </a>
          .
        </p>
      </div>
      <div className="col-md-12 text-center">
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={props.modalToggle}
        >
          <i className="fa fa-times mr-2"></i>
          {'Cancelar'}
        </button>
        <button
          type="button"
          className="btn btn-primary ml-1"
          onClick={generateAppointment}
        >
          <i className="fa fa-check mr-2"></i>
          {'Confirmar Turno'}
        </button>
      </div>
    </div>
  );
};

export default AppointmentConfirmComponent;
