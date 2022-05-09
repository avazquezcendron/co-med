import React, { useState, Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormGroup,
  Label,
  Popover,
  PopoverHeader,
  PopoverBody,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector } from 'react-redux';

import * as patientService from '../../services/patient.service';
import PatientQuickAdd from './patientQuickAdd';

const SelectPatientModalComponent = (props) => {
  const { register, errors, setError, clearErrors } = useForm();

  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [patient, setPatient] = useState({});
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [popover, setPopover] = useState(false);
  const popoverNewPatientToggle = () => setPopover(!popover);

  useEffect(() => {
    return () => {
      setPatient({});
      clearErrors('patient');
    };
  }, []);

  const handlePatientChange = (selected) => {
    let patient = selected.length > 0 ? selected[0] : {};
    setPatient(patient);
    if (selected.length <= 0) {
      setError('patient', {});
    } else {
      clearErrors('patient');
    }
  };

  const handleSearch = (filter) => {
    setIsLoading(true);
    patientService.getPatientsByFilter(filter, loggedUser).then((patients) => {
      setPatients(patients);
      setIsLoading(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patient.id) {
      setError('patient', {});
    } else {
      modalToggle(patient);
    }
  };

  const modalToggle = (patientData) => {
    clearErrors('patient');
    setPatient({});
    props.modalToggle(patientData);
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <Modal isOpen={props.modal} toggle={modalToggle} size="lg">
      <ModalHeader toggle={modalToggle}>Seleccionar Paciente</ModalHeader>
      <ModalBody>
        <div className="card">
          <Form className="needs-validation" onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-row">
                <p className="text-muted f-12 col-md-12">
                  Ingrese el nombre, DNI o Número de Historia Clínica para
                  buscar al paciente. Si no lo encuentra, haga click{' '}
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
                  <span style={{ color: 'red' }}>
                    {errors.patient && 'Debe ingresar el paciente'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => modalToggle()}
              >
                {'Cancelar'}
              </button>
              <button className="btn btn-primary ml-2" type="submit">
                Aceptar
              </button>
            </div>
          </Form>
        </div>
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
      </ModalBody>
    </Modal>
  );
};

export default SelectPatientModalComponent;
