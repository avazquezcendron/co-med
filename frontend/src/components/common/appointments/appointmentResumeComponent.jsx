import React from 'react';
import { useSelector } from 'react-redux';

const AppointmentResumeComponent = (props) => {
  const appointment = useSelector((store) => store.AppointmentForm);

  return (
    <div className="row">
      <h4 className="col-md-12 b-b-light text-muted text-center">Resumen del Turno</h4>
      <div className="col-md-12">
        <span className="f-w-600">Doctor/a</span>
      </div>
      <div className="col-md-12 ">
        <p>{appointment.doctor ? appointment.doctor.fullName : ''}</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Paciente</span>
      </div>
      <div className="col-md-12 ">
        <p>{appointment.patient ? appointment.patient.fullName : ''}</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Tipo</span>
      </div>
      <div className="col-md-12 ">
        <p>{appointment.appointmentType === 'turno' ? 'Turno' : 'Sobreturno'}</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Modalidad</span>
      </div>
      <div className="col-md-12 ">
        <p>{appointment.mode === 'presencial' ? 'Presencial' : 'Virtual'}</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Día y Hora</span>
      </div>
      <div className="col-md-12 ">
        <p>
          {appointment.start
            ? appointment.start.toLocaleDateString('es-AR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }) +
              ', ' +
              appointment.start.toLocaleTimeString('es', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
              }) +
              'hs'
            : ''}
        </p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Descripción</span>
      </div>
      <div className="col-md-12 ">
        <p>{appointment.description}</p>
      </div>
    </div>
  );
};

export default AppointmentResumeComponent;
