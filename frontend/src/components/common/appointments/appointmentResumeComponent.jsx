import React from 'react';

const AppointmentResumeComponent = (props) => {
  return (
    <div className="row">
      <h4 className="col-md-12 b-b-light text-muted">Resumen del Turno</h4>
      <div className="col-md-12">
        <span className="f-w-600">Doctor/a</span>
      </div>
      <div className="col-md-12 ">
        <p>Tayhana Ortolá</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Paciente</span>
      </div>
      <div className="col-md-12 ">
        <p>Agustín Vázquez</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Modalidad</span>
      </div>
      <div className="col-md-12 ">
        <p>Presencial</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Día y Hora</span>
      </div>
      <div className="col-md-12 ">
        <p>Jueves 10 de Marzo, 18:00hs</p>
      </div>
      <div className="col-md-12">
        <span className="f-w-600">Descripción</span>
      </div>
      <div className="col-md-12 ">
        <p>Bla bla bla bla...</p>
      </div>
    </div>
  );
};

export default AppointmentResumeComponent;
