import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';

import logo from '../../../assets/images/logo-principal-gris.png';

const AppointmentResumeComponent = (props) => {
  const appointment = useSelector((store) => store.AppointmentForm);
  const componentRef = useRef();

  const [displayClassHeader, setDisplayClassHeader] = useState('none');
  const [displayClassIconPrint, setDisplayClassIconPrint] = useState('');

  const handlePrintClick = async (
    displayClassHeaderParam,
    displayClassIconPrintParam
  ) => {
    await setDisplayClassHeader(displayClassHeaderParam);
    await setDisplayClassIconPrint(displayClassIconPrintParam);
  };

  return (
    <div className={`m-2 ${displayClassHeader !== 'none' ? 'p-50 m-50' : ''}`} ref={componentRef}>
      <div className="row">
        <div className="col col-md-3">
          <hr />
        </div>
        <h4 className="col col-md-6 text-muted text-center m-b-40">
          Resumen del Turno
          {appointment.isActive && !appointment.new && !appointment.edit && (
            <ReactToPrint
              trigger={() => (
                <a
                  href="#javascript"
                  className="pull-right"
                  title="Imprimir turno"
                  style={{ display: displayClassIconPrint }}
                >
                  <i className="fa fa-print"></i>
                </a>
              )}
              onBeforeGetContent={() => handlePrintClick('', 'none')}
              onAfterPrint={() => handlePrintClick('none', '')}
              content={() => componentRef.current}
            />
          )}
        </h4>
        <div className="col col-md-3">
          <hr />
        </div>
      </div>

      <div className="row m-2 ml-5">
        <div className="col col-md-3">
          <i className="icofont icofont-ui-calendar"></i>{' '}
          <span className="f-w-600">Día y Hora</span>
        </div>
        <div className="col col-md-9">
          <p>
            {appointment.start
              ? appointment.start.toLocaleDateString('es-AR', {
                  timeZone: 'UTC',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) +
                ', ' +
                appointment.start.toLocaleTimeString('es', {
                  timeZone: 'UTC',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                }) +
                'hs'
              : ''}
          </p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className="col col-md-3 m-t-20">
          <i className="icofont icofont-bed-patient"></i>{' '}
          <span className="f-w-600">Consutlrio</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>{appointment.doctor ? appointment.doctor.room : ''}</p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 m-t-20">
          <i className="icofont icofont-crutches"></i>{' '}
          <span className="f-w-600">Paciente</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>{appointment.patient ? appointment.patient.fullName : ''}</p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 m-t-20">
          <i className="icofont icofont-doctor-alt"></i>{' '}
          <span className="f-w-600">Doctor/a</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>{appointment.doctor ? appointment.doctor.fullName : ''}</p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 m-t-20">
          <i className="icofont icofont-stethoscope-alt"></i>{' '}
          <span className="f-w-600">Especialidad</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>
            {appointment.doctor
              ? appointment.doctor.specialities.join(', ')
              : ''}
          </p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 col-xl-3 m-t-20">
          <i className="fa fa-medkit"></i>{' '}
          <span className="f-w-600">Obra Social</span>
        </div>
        <div className="col col-md-9 col-xl-9 m-t-20">
          <p>
            {appointment.patient &&
            appointment.patient.healthInsurances?.length > 0
              ? appointment.patient.healthInsurances[0].healthInsuranceCompany
                  .description +
                ' (' +
                appointment.patient.healthInsurances[0].plan.code +
                ')' +
                ' | Nro. de Credencial ' +
                appointment.patient.healthInsurances[0].cardNumber
              : ' - '}
          </p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 m-t-20">
          <i className="icofont icofont-tag"></i>{' '}
          <span className="f-w-600">Tipo</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>
            {appointment.appointmentType === 'turno' ? 'Turno' : 'Sobreturno'}
          </p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 m-t-20">
          <i className="icofont icofont-social-google-map"></i>{' '}
          <span className="f-w-600">Modalidad</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>{appointment.mode === 'presencial' ? 'Presencial' : 'Virtual'}</p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row m-2 ml-5">
        <div className=" col col-md-3 m-t-20">
          <i className="icofont icofont-clip-board"></i>{' '}
          <span className="f-w-600">Descripción</span>
        </div>
        <div className="col col-md-9 m-t-20">
          <p>{appointment.description || ' - '}</p>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      {(appointment.isCancelled ||
        appointment.isExpired ||
        appointment.isDone) && (
        <div className="col col-md-12 m-t-40 m-l-20">
          <p className="text-muted col col-md-12">
            <mark>
              <i className="fa fa-info"></i>{' '}
              <u>
                {appointment.isCancelled
                  ? 'El turno ha sido cancelado.'
                  : appointment.isExpired
                  ? 'El turno ha expirado sin ser atendido.'
                  : appointment.isDone
                  ? 'El turno ha finalizado.'
                  : ''}
              </u>
            </mark>
          </p>
        </div>
      )}
      <div style={{ display: displayClassHeader }}>
        <hr className="mr-4 ml-4 mt-0 mb-0" />
        <div className="row ml-2 mr-2">
          <div className="col">
            <img
              className="pull-left"
              style={{ width: 200, height: 130 }}
              src={logo}
              alt=""
            />
          </div>
          <div className="col text-right pt-3">
            <small>
              <i className="fa fa-home"></i> Moreno N° 850
            </small>
            <br />
            <small>
              <i className="icofont icofont-brand-whatsapp"></i>{' '}
              <i className="fa fa-phone"></i> 2966-682961
            </small>
            <br />
            <small>
              <i className="fa fa-envelope"></i> consultoriossanjulian@gmail.com
            </small>
            <br />
            <small>
              <i className="fa fa-map-marker"></i> 9310 Puerto San Julián - Sta.
              Cruz
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentResumeComponent;
