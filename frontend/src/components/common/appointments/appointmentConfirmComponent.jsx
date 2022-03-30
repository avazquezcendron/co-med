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
    SweetAlert.fire({
      title: 'Atención',
      text: `Se dará de alta un turno el día ${
        appointmentData.start
          ? appointmentData.start.toLocaleDateString('es-AR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }) +
            ', ' +
            appointmentData.start.toLocaleTimeString('es', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            }) +
            'hs'
          : ''
      } para el paciente ${appointmentData.patient.name} con el doctor/a ${
        appointmentData.doctor.name
      }.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        //TODO: acomodar el seteo de la propiedades title, resourceId y Id: Id y title se generan en back, resourceId es más cuestion de front ya que está relacionado al reac-scheduler.
        dispatch(
          saveAppointmentWatcher({
            ...appointmentData,
            title: appointmentData.patient.name + ' - ' + appointmentData.mode,
            resourceId: appointmentData.doctor.id,
            constraint: 'businessHours',
            id: 2,
          })
        );
        toast.success('Turno confirmado con éxito.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        props.modalToggle();
      } else {
        toast.error('Se canceló el alta del turno.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    });
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
          className="btn btn-light text-dark"
          onClick={props.modalToggle}
        >
          <i className="fa fa-times mr-2"></i>
          {'Cancelar'}
        </button>
        <button
          type="button"
          className="btn btn-outline-success ml-4"
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
