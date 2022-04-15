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
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';

import PatientQuickAdd from '../patientQuickAdd';
import { setDataAppointmentForm } from '../../../redux/appointments/actions';
import { patientGetAllWatcher } from '../../../redux/patients/actions';

const AppointmentAndPatientDataComponent = forwardRef(({ jumpToStep }, ref) => {
  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const { patients, status } = useSelector((store) => store.Patients);
  const dispatch = useDispatch();

  const [patient, setPatient] = useState(appointment.patient || {});
  const [type, setType] = useState(appointment.type || 'turno');
  const [mode, setMode] = useState(appointment.mode || 'presencial');
  const [description, setDescription] = useState(appointment.description || '');

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [popover, setPopover] = useState(false);
  const popoverNewPatientToggle = () => setPopover(!popover);

  useEffect(() => {
    dispatch(patientGetAllWatcher());
  }, []);

  useImperativeHandle(ref, () => ({
    isValidated() {
      if (!patient.id) {
        setError('patient', {});
        return false;
      } else {
        clearErrors('patient');
      }
      dispatch(
        setDataAppointmentForm({
          patient: patient,
          type: type,
          mode: mode,
          description: description,
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
    } else {
      clearErrors('patient');
    }
  };

  const showNewPatientForm = () => {
    document.querySelector('.history').classList.add('show');
  };

  const closeNewPatientForm = () => {
    document.querySelector('.history').classList.remove('show');
  };

  return (
    <Fragment>
      <Form className="form-bookmark needs-validation">
        <div className="form-row m-50">
          <p className="text-muted f-12 col-md-12">
            Ingrese el nombre, DNI o Número de Historia Clínica para buscar al paciente. Si no lo encuentra,
            haga click{' '}
            <a href="#javascript" id="popoverNewPatient">
              aquí
            </a>{' '}
            para ingresar un nuevo paciente al sistema.
          </p>
          <FormGroup className="col-md-4">
            <Label>{'Paciente'} </Label>
            <Typeahead
              id="patient"
              name="patient"
              options={patients}
              labelKey={(option) => option.fullName}
              filterBy={['fullName', 'nationalId', 'healthRecord.healthRecordNumber']}
              minLength={3}
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
            <span style={{ color: 'red' }}>
              {errors.patient && 'Debe ingresar el paciente'}
            </span>
          </FormGroup>
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
              innerRef={register({ required: true })}
            ></Input>
            <span style={{ color: 'red' }}>
              {errors.desc && 'Description is required'}
            </span>
          </FormGroup>
        </div>
      </Form>
      {/* <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalHeader toggle={toggle}>{'Nuevo Paciente'}</ModalHeader>
        <ModalBody>
          <PatientQuickAdd />
        </ModalBody>
      </Modal> */}
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
          <PatientQuickAdd modalToggle={popoverNewPatientToggle}/>
        </PopoverBody>
      </Popover>
    </Fragment>
  );
});

export default AppointmentAndPatientDataComponent;
