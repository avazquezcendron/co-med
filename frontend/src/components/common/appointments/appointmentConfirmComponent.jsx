import React from 'react';
import AppointmentResumeComponent from './appointmentResumeComponent';

const AppointmentConfirmComponent = (props) => {
  const submitFun = () => {
    alert('successfully updated');
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
        <button type="button" className="btn btn-light text-dark">
          {'Cancelar'}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger ml-4"
          onClick={submitFun}
        >
          {'Confirmar Turno'}
        </button>
      </div>
    </div>
  );
};

export default AppointmentConfirmComponent;
