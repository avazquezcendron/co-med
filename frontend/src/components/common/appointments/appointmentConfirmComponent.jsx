import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { saveAppointmentWatcher } from '../../../redux/appointments/actions';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentConfirmComponent = (props) => {
  const appointment = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();

  const generateAppointment = () => {
    dispatch(saveAppointmentWatcher(appointment));
    props.modalToggle();
    toast.success('Turno confirmado con éxito', {
      position: toast.POSITION.BOTTOM_RIGHT,
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
          {'Cancelar'}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger ml-4"
          onClick={generateAppointment}
        >
          {'Confirmar Turno'}
        </button>
      </div>
    </div>
  );
};

export default AppointmentConfirmComponent;
