import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useSelector, useDispatch } from 'react-redux';

import { setDataAppointmentForm } from '../../../redux/appointments/actions';
import * as patientService from '../../../services/patient.service';

const AppointmentAndPatientDataComponent = forwardRef(({ jumpToStep }, ref) => {
  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();

  const [patient, setPatient] = useState(appointment.patient || {});
  const [type, setType] = useState(appointment.type || 'turno');
  const [mode, setMode] = useState(appointment.mode || 'presencial');
  const [description, setDescription] = useState(appointment.description || '');

  const [patients, setPatients] = useState([]);
  useEffect(() => {
    patientService.getAll().then((res) => setPatients(res.data));
  }, []);

  useImperativeHandle(ref, () => ({
    isValidated() {
      if (!patient.name) {
        setError('patient', {});
        return false;
      } else {
        clearErrors('patient');
      }
      dispatch(setDataAppointmentForm({ patient: patient, type: type, mode: mode, description: description }));
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

  return (
    <Form className="form-bookmark needs-validation">
      <div className="form-row m-50">
        <p className="text-muted f-12 col-md-12">
          Ingrese el nombre, DNI, Número de Historia Clínica o Número de Carnet
          de Obra Social para buscar al paciente. Si no lo encuentra, haga click{' '}
          <a href="#javascript">aquí</a> para ingresar un nuevo paciente al
          sistema.
        </p>
        <FormGroup className="col-md-4">
          <Label>{'Paciente'} </Label>
          <Typeahead
            id="patient"
            name="patient"
            options={patients}
            labelKey="name"
            filterBy={['nationalId', 'healthRecordId']}
            minLength={3}
            onChange={(selected) => handlePatientChange(selected)}
            selected={patients.length > 0 ? patients.filter((x) => x.name === patient.name) : null}
            {...register('patient', { required: true })}
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
                    {...register({ required: true })}
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
  );
});

export default AppointmentAndPatientDataComponent;
