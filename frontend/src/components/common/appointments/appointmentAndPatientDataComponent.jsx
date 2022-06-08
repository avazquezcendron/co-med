import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Fragment,
} from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';

import * as patientService from '../../../services/patient.service';
import PatientQuickAdd from '../patientQuickAdd';
import { setDataAppointmentForm } from '../../../redux/appointments/actions';

const AppointmentAndPatientDataComponent = forwardRef(({ jumpToStep }, ref) => {
  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [patient, setPatient] = useState(appointment.patient || {});
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(appointment.appointmentType || 'turno');
  const [mode, setMode] = useState(appointment.mode || 'presencial');
  const [description, setDescription] = useState(appointment.description || '');
  const [paymentType, setPaymentType] = useState(
    appointment.paymentType || 'consulta'
  );
  const [paymentMethod, setPaymentMethod] = useState(
    appointment.paymentMethod || 'efectivo'
  );
  const [paymentAmount, setPaymentAmount] = useState(
    appointment.paymentAmount || '0'
  );
  const [patientTags, setPatientTags] = useState('');

  const [popover, setPopover] = useState(false);
  const popoverNewPatientToggle = () => setPopover(!popover);

  useEffect(() => {
    if (appointment.patient) {
      setPatients([appointment.patient]);
      setPatient(appointment.patient);
      setPatientTags(appointment.patient.tags.map((x) => x.name).join('. '));
    }
  }, [appointment]);

  useImperativeHandle(ref, () => ({
    isValidated() {
      if (!patient.id && type !== 'bloqueo') {
        setError('patient', {});
        return false;
      } else {
        clearErrors('patient');
      }
      dispatch(
        setDataAppointmentForm({
          patient: type !== 'bloqueo' ? patient : null,
          appointmentType: type,
          mode: mode,
          description: description,
          paymentType: paymentType,
          paymentMethod: paymentMethod,
          paymentAmount: paymentAmount,
        })
      );
      return true;
    },
  }));

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

  const handleSearch = (filter) => {
    setIsLoading(true);
    patientService.getPatientsByFilter(filter, loggedUser).then((patients) => {
      setPatients(patients);
      setIsLoading(false);
    });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  const handlePaymentTypeChange = (value) => {
    setPaymentType(value);
    if (value === 'no-paga') {
      setPaymentMethod('');
      setPaymentAmount(0);
    }
  };

  return (
    <Fragment>
      <Form className="form-bookmark needs-validation">
        <div className="form-row m-50">
          {type !== 'bloqueo' && (
            <Fragment>
              <p className="text-muted f-12 col-md-12">
                Ingrese el nombre, DNI o Número de Historia Clínica para buscar
                al paciente. Si no lo encuentra, haga click{' '}
                <a href="#javascript" id="popoverNewPatient">
                  aquí
                </a>{' '}
                para ingresar un nuevo paciente al sistema.
              </p>
              <FormGroup className="col-md-6">
                <Label>{'Paciente'} </Label>
                <AsyncTypeahead
                  id="patient"
                  name="patient"
                  options={patients}
                  isLoading={isLoading}
                  labelKey={(option) => option.fullName}
                  filterBy={filterBy}
                  minLength={3}
                  onSearch={handleSearch}
                  clearButton
                  disabled={!appointment.new}
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
                          Nro. HC:{' '}
                          <b>{option.healthRecord?.healthRecordNumber}</b>
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
              <FormGroup className="col-md-12 mt-4">
                <div className="row">
                  <div className="col-md-3 mr-4">
                    <div className="select2-drpdwn-project select-options">
                      <Label>{'Tipo de Cobro'}</Label>
                      <select
                        className="form-control"
                        id="paymentType"
                        name="paymentType"
                        value={paymentType}
                        onChange={(e) =>
                          handlePaymentTypeChange(e.target.value)
                        }
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
                      <div className="col-md-3 mr-4">
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
                            <option value="transferencia">
                              {'Transferencia'}
                            </option>
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
            </Fragment>
          )}
          <FormGroup className="col-md-12 mt-4">
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
                  {appointment.end && appointment.start && !appointment.patient && (
                    <div className="col-md-12 radio radio-primary ml-4 mt-2">
                      <Input
                        id="turnoSobreturno3"
                        className="js-example-disabled-results"
                        name="turnoSobreturno"
                        type="radio"
                        value="bloqueo"
                        checked={type === 'bloqueo'}
                        onChange={(e) => setType(e.target.value)}
                        innerRef={register({ required: true })}
                      ></Input>
                      <Label htmlFor="turnoSobreturno3">
                        {'Bloqueo de Agenda'}
                      </Label>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                {type !== 'bloqueo' && (
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
                      <Label htmlFor="tipoTurno1">
                        {'Consulta Presencial'}
                      </Label>
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
                )}
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
              innerRef={register({ required: true })}
            ></Input>
            <span style={{ color: 'red' }}>
              {errors.desc && 'Description is required'}
            </span>
          </FormGroup>
        </div>
      </Form>
      {type !== 'bloqueo' && (
        <Popover
          placement="right"
          isOpen={popover}
          target={'popoverNewPatient'}
          toggle={popoverNewPatientToggle}
          data-html="true"
        >
          <PopoverHeader>
            {'Nuevo Paciente'}
            <span className="pull-right">
              <a href="#javaScript" onClick={popoverNewPatientToggle}>
                <i className="icofont icofont-close text-muted"></i>
              </a>
            </span>
          </PopoverHeader>
          <PopoverBody>
            <PatientQuickAdd modalToggle={popoverNewPatientToggle} />
          </PopoverBody>
        </Popover>
      )}
    </Fragment>
  );
});

export default AppointmentAndPatientDataComponent;
