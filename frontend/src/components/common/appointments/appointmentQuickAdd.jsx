import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

import * as doctorService from '../../../services/doctor.service';
import * as patientService from '../../../services/patient.service';
import { saveAppointmentWatcher } from '../../../redux/appointments/actions';

const AppointmentQuickAddComponent = (props) => {
  registerLocale('es', es);

  const { register, errors, setError, clearErrors } = useForm();

  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  // Doctor
  const [doctor, setDoctor] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [isLoadingDoctor, setIsLoadingDoctor] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  //Patient
  const [patient, setPatient] = useState({});
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('turno');
  const [mode, setMode] = useState('presencial');
  const [description, setDescription] = useState('');
  const [paymentType, setPaymentType] = useState('consulta');
  const [paymentMethod, setPaymentMethod] = useState('efectivo');
  const [paymentAmount, setPaymentAmount] = useState('0');
  const [patientTags, setPatientTags] = useState('');

  // Date and Time Slot
  const [selectedSlot, setSelectedSlot] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [appointmentsSessions, setAppointmentsSessions] = useState([]);
  useEffect(() => {
    if (doctor?.id) {
      doctorService
        .getDoctorSessions(doctor.id, startDate, loggedUser)
        .then((sessions) => {
          let drSessions = [];
          if (type === 'sobreturno') {
            drSessions = sessions.map((x) => {
              return {
                ...x,
                slots: x.slots.map((s) => {
                  return { ...s, available: true };
                }),
              };
            });
          } else {
            drSessions = sessions;
          }
          setAppointmentsSessions(drSessions);
        });
    }
  }, [startDate, doctor, type]);

  useEffect(() => {
    let doctorAppointmentConfig;
    const appointmentsConfigSelected = localStorage.getItem(
      'appointmentsConfigSelected'
    );
    if (appointmentsConfigSelected) {
      doctorAppointmentConfig = JSON.parse(appointmentsConfigSelected).doctor;
    }
    const doctor = loggedUser.user?.doctor || doctorAppointmentConfig;
    setDoctors(doctor ? [doctor] : []);
    setDoctor(doctor || {});
    if (loggedUser.user?.isDoctor && !loggedUser.user?.isAdmin) {
      setIsDisabled(true);
    }
  }, []);

  const generateAppointment = () => {
    let isValid = true;
    if (!doctor?.id) {
      setError('doctor', {});
      isValid = false;
    } else {
      clearErrors('doctor');
    }

    if (!patient?.id) {
      setError('patient', {});
      isValid = false;
    } else {
      clearErrors('patient');
    }

    if (!startDate) {
      setError('startDate', {});
      isValid = false;
    } else {
      clearErrors('startDate');
    }
    if (!selectedSlot) {
      setError('startTime', {});
      isValid = false;
    } else {
      clearErrors('startTime');
    }

    if (!selectedSlot.available) {
      setError('slotNotAvailable', {});
      isValid = false;
    } else {
      clearErrors('slotNotAvailable');
    }

    if (!isValid) {
      toast.error('Faltan completar datos del turno.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      const appointment = {
        doctor: doctor,
        patient: patient,
        appointmentType: type,
        mode: mode,
        description: description,
        paymentType: paymentType,
        paymentMethod: paymentMethod,
        paymentAmount: paymentAmount,
        start: new Date(
          startDate.setHours(
            new Date(selectedSlot.startTime).getHours(),
            new Date(selectedSlot.startTime).getMinutes(),
            0
          )
        ),
        end: new Date(
          startDate.setHours(
            new Date(selectedSlot.endTime).getHours(),
            new Date(selectedSlot.endTime).getMinutes(),
            0
          )
        ),
      };

      const textAppointment = `Se dará de alta un ${
        type === 'turno' ? 'turno' : 'sobreturno'
      } el día ${
        appointment.start
          ? appointment.start.toLocaleDateString('es-AR', {
              // timeZone: 'UTC',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }) +
            ', ' +
            appointment.start.toLocaleTimeString('es', {
              // timeZone: 'UTC',
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            }) +
            'hs'
          : ''
      } para el paciente ${patient?.fullName} con el doctor/a ${
        doctor.fullName
      }.`;

      SweetAlert.fire({
        title: 'Atención',
        text: textAppointment,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          dispatch(saveAppointmentWatcher(appointment));
          props.modalToggle();
        }
      });
    }
  };

  const handleDoctorChange = (selected) => {
    let doctor = selected.length > 0 ? selected[0] : {};
    if (selected.length <= 0) {
      setError('doctor', {});
    } else {
      clearErrors('doctor');
    }
    setDoctor(doctor);
  };

  const handleSearchDoctor = (filter) => {
    setIsLoadingDoctor(true);
    doctorService.getDoctorsByFilter(filter, loggedUser).then((doctors) => {
      setDoctors(doctors);
      setIsLoadingDoctor(false);
    });
  };

  const handlePatientChange = (selected) => {
    let patient = selected.length > 0 ? selected[0] : {};
    setPatient(patient);
    if (selected.length <= 0) {
      setError('patient', {});
      setPatientTags('');
    } else {
      clearErrors('patient');
      if (patient.tags?.length > 0) {
        setPatientTags(patient.tags.map((x) => x.name).join('. '));
      } else {
        setPatientTags('');
      }
    }
  };

  const handleSearchPatient = (filter) => {
    setIsLoading(true);
    patientService.getPatientsByFilter(filter, loggedUser).then((patients) => {
      setPatients(patients);
      setIsLoading(false);
    });
  };

  const handlePaymentTypeChange = (value) => {
    setPaymentType(value);
    if (value === 'no-paga') {
      setPaymentMethod('');
      setPaymentAmount(0);
    }
  };

  const handleAppDateChange = (date) => {
    setStartDate(date);
  };

  const handleSlotClick = (e, slot) => {
    e.preventDefault();
    if (!slot.available) return;

    setSelectedSlot(slot);
    document.querySelectorAll('.slotButton').forEach((item) => {
      item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  const isActiveSlot = (slot) => {
    return slot.id === selectedSlot.id;
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <div className="container-fluid">
      <Form>
        <div className="form-row">
          <Label className="col-md-6">{'Doctor'}</Label>
          <p className="text-muted f-12 col-md-12">
            Ingrese el nombre, especialidad o DNI para buscar al doctor.
          </p>
          <FormGroup className="col-md-6">
            <AsyncTypeahead
              id="doctor"
              name="doctor"
              isLoading={isLoadingDoctor}
              options={doctors}
              labelKey={(option) => option.fullName}
              filterBy={filterBy}
              minLength={3}
              onSearch={handleSearchDoctor}
              clearButton
              onChange={(selected) => handleDoctorChange(selected)}
              selected={
                doctors.length > 0
                  ? doctors.filter((x) => x.id === doctor.id)
                  : null
              }
              disabled={isDisabled}
              innerRef={register('doctor', { required: true })}
              renderMenuItemChildren={(option, props) => (
                <Fragment>
                  <Highlighter search={props.text}>
                    {option.fullName}
                  </Highlighter>
                  <div className="mt-1">
                    <small className="text-muted">
                      {option.specialities.join(', ')}
                    </small>
                  </div>
                </Fragment>
              )}
            />
            <span style={{ color: 'red' }}>
              {errors.doctor && 'Debe ingresar el doctor'}
            </span>
          </FormGroup>
        </div>
        <div className="form-row">
          <Label className="col-md-6">{'Paciente'} </Label>
          <p className="text-muted f-12 col-md-12">
            Ingrese el nombre, DNI o Número de Historia Clínica para buscar al
            paciente.
          </p>
          <FormGroup className="col-md-6">
            <AsyncTypeahead
              id="patient"
              name="patient"
              options={patients}
              isLoading={isLoading}
              labelKey={(option) => option.fullName}
              filterBy={filterBy}
              minLength={3}
              onSearch={handleSearchPatient}
              clearButton
              onChange={(selected) => handlePatientChange(selected)}
              selected={
                patients.length > 0
                  ? patients.filter((x) => x.id === patient.id)
                  : null
              }
              innerRef={register('patient', { required: true })}
              renderMenuItemChildren={(option, props) => (
                <Fragment>
                  <Highlighter search={props.text}>
                    {option.fullName}
                  </Highlighter>
                  <div className="mt-1">
                    <small className="text-muted">
                      Nro. HC: <b>{option.healthRecord?.healthRecordNumber}</b>
                    </small>
                  </div>
                </Fragment>
              )}
            />
            {patientTags && (
              <div>
                <small className="text-muted">
                  <b>Tags: </b> {patientTags}
                </small>
              </div>
            )}
            <span style={{ color: 'red' }}>
              {errors.patient && 'Debe ingresar el paciente'}
            </span>
          </FormGroup>
          <FormGroup className="col-md-12 mt-2">
            <div className="row">
              <div className="col-md-4 mr-2">
                <div className="select2-drpdwn-project select-options">
                  <Label>{'Tipo de Cobro'}</Label>
                  <select
                    className="form-control"
                    id="paymentType"
                    name="paymentType"
                    value={paymentType}
                    onChange={(e) => handlePaymentTypeChange(e.target.value)}
                    ref={register({ required: false })}
                  >
                    <option value="consulta">{'Consulta'}</option>
                    <option value="no-paga">{'No Paga'}</option>
                    <option value="coseguro">{'Coseguro'}</option>
                  </select>
                </div>
              </div>
              {paymentType !== 'no-paga' && (
                <Fragment>
                  <div className="col-md-4 mr-2">
                    <div className="select2-drpdwn-project select-options">
                      <Label>{'Forma de Pago'}</Label>
                      <select
                        className="form-control"
                        id="paymentMethod"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        ref={register({ required: false })}
                      >
                        <option value="efectivo">{'Efectivo'}</option>
                        <option value="transferencia">{'Transferencia'}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="select2-drpdwn-project select-options">
                      <Label>{'Importe'}</Label>
                      <Input
                        className="form-control"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        id="paymentAmount"
                        name="paymentAmount"
                        type="number"
                        innerRef={register({ required: false })}
                        style={{
                          height: 24,
                          borderBottomColor: '#0288d1',
                          borderBottomStyle: 'solid',
                          border: 'none',
                          borderRadius: 0,
                        }}
                      ></Input>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </FormGroup>
          <FormGroup className="col-md-12 mt-2">
            <Label>{'Tipo de Turno'}</Label>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 radio radio-primary ml-4 ">
                    <Input
                      id="turnoSobreturno1"
                      className="js-example-disabled-results"
                      name="turnoSobreturno"
                      type="radio"
                      value="turno"
                      onChange={(e) => setType(e.target.value)}
                      checked={type === 'turno'}
                      innerRef={register({ required: true })}
                    ></Input>
                    <Label htmlFor="turnoSobreturno1">{'Turno'}</Label>
                  </div>
                  <div className="col-md-12 radio radio-primary ml-4 mt-2">
                    <Input
                      id="turnoSobreturno2"
                      className="js-example-disabled-results"
                      name="turnoSobreturno"
                      type="radio"
                      value="sobreturno"
                      checked={type === 'sobreturno'}
                      onChange={(e) => setType(e.target.value)}
                      innerRef={register({ required: true })}
                    ></Input>
                    <Label htmlFor="turnoSobreturno2">{'Sobreturno'}</Label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 radio radio-primary ">
                    <Input
                      id="tipoTurno1"
                      className="js-example-disabled-results"
                      name="tipoTurno"
                      type="radio"
                      value="presencial"
                      innerRef={register({ required: true })}
                      onChange={(e) => setMode(e.target.value)}
                      checked={mode === 'presencial'}
                    ></Input>
                    <Label htmlFor="tipoTurno1">{'Consulta Presencial'}</Label>
                  </div>
                  <div className="col-md-12 radio radio-primary mt-2">
                    <Input
                      id="tipoTurno2"
                      className="js-example-disabled-results"
                      name="tipoTurno"
                      type="radio"
                      value="videoconsulta"
                      checked={mode === 'videoconsulta'}
                      innerRef={register({ required: true })}
                      onChange={(e) => setMode(e.target.value)}
                      disabled
                    ></Input>
                    <Label htmlFor="tipoTurno2">{'Videoconsulta'}</Label>
                  </div>
                </div>
              </div>
            </div>
          </FormGroup>
          <FormGroup className="col-md-12">
            <Label>{'Descripción'}</Label>
            <Input
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="desc"
              type="textarea"
              innerRef={register({ required: false })}
            ></Input>
            <span style={{ color: 'red' }}>
              {errors.desc && 'Description is required'}
            </span>
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                <Label>{'Día'}</Label>
                <DatePicker
                  name="startDate"
                  className="form-control digits"
                  placeholderText="Seleccionar una fecha"
                  selected={startDate}
                  minDate={new Date()}
                  // filterDate={isWeekday}
                  todayButton="Hoy"
                  inline
                  locale="es"
                  dateFormat="dd/MM/yyyy"
                  onChange={handleAppDateChange}
                  innerRef={register({ required: true })}
                />
                <span style={{ color: 'red' }}>
                  {errors.startDate && 'Debe seleccioner el día para el turno.'}
                </span>
              </div>
              <div className="col-md-5">
                <Label>{'Hora'}</Label>
                <div className="">
                  {appointmentsSessions?.map((session, index) => (
                    <div key={index}>
                      <p className="text-center mt-2">{session.sessionName}</p>
                      {session.slots.map((slot, index) => (
                        <button
                          key={index}
                          className={`btn btn-outline-primary btn-xs m-5 slotButton ${
                            slot.available ? '' : 'disabled'
                          } ${isActiveSlot(slot) ? 'active' : ''}`}
                          type="button"
                          onClick={(e) => handleSlotClick(e, slot)}
                        >
                          {slot.available ? (
                            new Date(slot.startTime).toLocaleTimeString('es', {
                              // timeZone: 'UTC',
                              hour: 'numeric',
                              minute: 'numeric',
                              hour12: false,
                            })
                          ) : (
                            <s>
                              {new Date(slot.startTime).toLocaleTimeString(
                                'es',
                                {
                                  // timeZone: 'UTC',
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  hour12: false,
                                }
                              )}
                            </s>
                          )}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
                <span style={{ color: 'red' }}>
                  {errors.startTime &&
                    'Debe seleccioner la hora para el turno.'}
                  {errors.slotNotAvailable &&
                    'El turno seleccionado no se encuentra disponible.'}
                </span>
              </div>
              {startDate && (
                <p className="text-muted col-md-12 mt-2">
                  * Turnos disponibles para el{' '}
                  <mark>
                    <u>
                      {startDate.toLocaleDateString('es-AR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </u>{' '}
                    con el doctor/a {doctor?.fullName}
                  </mark>
                </p>
              )}
            </div>

            <div className="col-md-12 text-center mt-4">
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
                Confirmar Turno
              </button>
            </div>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default AppointmentQuickAddComponent;
