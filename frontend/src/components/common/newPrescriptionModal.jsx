import React, { useState, useEffect, useRef, Fragment, Component } from 'react';
import { Modal, ModalHeader, ModalBody, UncontrolledTooltip } from 'reactstrap';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import {
  AsyncTypeahead,
  Typeahead,
  Highlighter,
  Token,
} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ReactToPrint from 'react-to-print';

import * as entityService from '../../services/entity.service';
import * as doctorService from '../../services/doctor.service';
import logo from '../../assets/images/logo-principal-gris.png';

const NewPrescriptionModalComponent = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { patient } = useSelector((store) => store.Patient);
  const { visit } = useSelector((store) => store.Visit);

  const [doctor, setDoctor] = useState(loggedUser.user.doctor || {});
  const [doctors, setDoctors] = useState(
    loggedUser.user.doctor ? [loggedUser.user.doctor] : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { register, handleSubmit, errors, setError, clearErrors } = useForm();

  const componentRef = useRef();

  const [prescriptionDrugsList, setprescriptionDrugsList] = useState([]);
  const [prescriptionDrugs, setprescriptionDrugs] = useState([]);

  const [prescription, setprescription] = useState({
    date: new Date(),
    indications: '',
    diagnosis: '',
    requiresDuplicate: false,
    longTerm: false,
    drugs: [],
    doctor: doctor,
    healthRecord: patient.healthRecord || {},
    visit: visit || {},
  });

  const [quantity, setQuantity] = useState(0);
  const [indications, setIndications] = useState('');
  const [currentIndex, setcurrentIndex] = useState(-1);

  const [drugs, setDrugs] = useState([]);
  useEffect(() => {
    setprescriptionDrugs([]);
    setQuantity(0);
    setIndications('');
    entityService.getAll('drug', loggedUser).then((data) => setDrugs(data));
    return () => {};
  }, []);

  const handleDoctorChange = (selected) => {
    let doctor = selected.length > 0 ? selected[0] : {};
    setDoctor(doctor);
  };

  const handleSearch = (filter) => {
    setIsLoading(true);
    doctorService.getDoctorsByFilter(filter, loggedUser).then((doctors) => {
      setDoctors(doctors);
      setIsLoading(false);
    });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  const handleSubmitForm = (data) => {
    if (prescriptionDrugsList.length <= 0) {
      setError('drugs', {});
      return false;
    } else {
      clearErrors('drugs');
    }
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text: `Se generará la prescripción para el paciente ${patient.fullName}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          props.handleSavePrescription &&
            props.handleSavePrescription({
              ...data,
              drugs: prescriptionDrugsList,
            });
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const checkForm = () => {
    if (prescriptionDrugs.length <= 0) {
      setError('drug', {});
      return false;
    } else {
      clearErrors('drug');
    }
    if (!quantity || quantity <= 0) {
      setError('quantity', {});
      return false;
    } else {
      clearErrors('quantity');
    }
    if (!indications) {
      setError('drugsIndications', {});
      return false;
    } else {
      clearErrors('drugsIndications');
    }
    return true;
  };

  const clearForm = () => {
    setprescriptionDrugs([]);
    setQuantity(0);
    setIndications('');
    setcurrentIndex(-1);
    clearErrors('drugs');
  };

  const addDrugToPrescription = (e) => {
    e.preventDefault();

    if (!checkForm()) {
      return;
    }

    setprescriptionDrugsList([
      ...prescriptionDrugsList,
      {
        drug: prescriptionDrugs[0],
        quantity: quantity,
        indications: indications,
      },
    ]);

    clearForm();
  };

  const updateDrugPrescription = (e) => {
    e.preventDefault();

    if (!checkForm()) {
      return;
    }

    prescriptionDrugsList[currentIndex] = {
      drug: prescriptionDrugs[0],
      quantity: quantity,
      indications: indications,
    };
    clearForm();
  };

  const handleDrugsChange = (selected) => {
    setprescriptionDrugs(selected);
  };

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const handleIndicationsChange = (indications) => {
    setIndications(indications);
  };

  const handleRowClick = (pDrug, index) => {
    setprescriptionDrugs([pDrug.drug]);
    setQuantity(pDrug.quantity);
    setIndications(pDrug.indications);
    setcurrentIndex(index);
  };

  const handleDeleteRow = (e, index) => {
    e.preventDefault();
    setprescriptionDrugsList(
      prescriptionDrugsList.filter((x, i) => i !== index)
    );
    clearForm();
  };

  return (
    <Modal
      isOpen={props.prescriptionModal}
      toggle={props.prescriptionModalToggle}
      size="lg"
    >
      <ModalHeader toggle={props.prescriptionModalToggle}>
        Nueva Prescripción
      </ModalHeader>
      <ModalBody>
        <div className="card badge badge-light m-l-20 m-r-20">
          <div className="card-body text-muted">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <p className="col-md-12 col-form-label f-w-100 f-14 ">
                    {'Paciente'}
                  </p>
                  <p className="col-md-12">
                    <b>{patient.fullName}</b>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <p className="col-md-12 col-form-label f-w-100 f-14 ">
                    {'Edad'}
                  </p>
                  <p className="col-md-12 ">
                    <b>{patient.age}</b>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <p className="col-md-12 col-form-label f-w-100 f-14 ">
                    Doc. Tipo: {patient.nationalIdType}
                  </p>
                  <p className="col-md-12 ">
                    <b>{patient.nationalId}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="row">
                  <p className="col-md-12 col-form-label f-w-100 f-14 ">
                    {'Obra Social'}
                  </p>
                  <p className="col-md-12">
                    <b>
                      {patient.healthInsurances?.length > 0
                        ? patient.healthInsurances[0].healthInsuranceCompany
                            ?.description
                        : ''}
                    </b>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <p className="col-md-12 col-form-label f-w-100 f-14 ">
                    {'Plan'}
                  </p>
                  <p className="col-md-12 ">
                    <b>
                      {patient.healthInsurances?.length > 0
                        ? patient.healthInsurances[0].plan.code
                        : ''}
                    </b>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <p className="col-md-12 col-form-label f-w-100 f-14 ">
                    {'Número de Credencial'}
                  </p>
                  <p className="col-md-12 ">
                    <b>
                      {patient.healthInsurances?.length > 0
                        ? patient.healthInsurances[0].cardNumber
                        : ''}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <form
            className="theme-form mega-form"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div className="card-body">
              {!doctor && (
                <Fragment>
                  <h6>{'Doctor/a'}</h6>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <AsyncTypeahead
                        id="doctor"
                        name="doctor"
                        isLoading={isLoading}
                        options={doctors}
                        labelKey={(option) => option.fullName}
                        filterBy={filterBy}
                        minLength={3}
                        onSearch={handleSearch}
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
                    </div>
                  </div>
                </Fragment>
              )}
              <h6>{'Diagnóstico'}</h6>
              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    className="form-control"
                    name="diagnosis"
                    id="diagnosis"
                    type="text"
                    defaultValue={visit.diagnosis}
                    onChange={(e) =>
                      setprescription({
                        ...prescription,
                        diagnosis: e.target.value,
                      })
                    }
                    ref={register({ required: true })}
                  />
                  <span style={{ color: 'red' }}>
                    {errors.diagnosis && 'Ingrese un valor.'}
                  </span>
                </div>
              </div>
              <hr className="mt-4 mb-4" />
              <h6>{'Indicaciones Generales'}</h6>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="indications"
                    id="indications"
                    rows="3"
                    onChange={(e) =>
                      setprescription({
                        ...prescription,
                        indications: e.target.value,
                      })
                    }
                    ref={register({ required: false })}
                  />
                </div>
              </div>
              <hr className="mt-4 mb-4" />
              <h6>{'Medicación'}</h6>
              <div className="form-group row">
                <div className="col-md-10">
                  <div className="row">
                    <label className="col-md-12 col-form-label" htmlFor="drug">
                      {'Fármaco'}
                    </label>
                    <div className="col-md-12">
                      <Typeahead
                        id="drugs"
                        // labelKey={(option) => `${option.description} (Composición: ${option.composition}, ${option.format})`}
                        labelKey="description"
                        multiple
                        emptyLabel="No se encontraron resultados..."
                        minLength={3}
                        options={drugs}
                        // selected={drugs.length > 0 ? drugs.filter((x) => x.description === doctor.description) : null}
                        selected={prescriptionDrugs}
                        onChange={handleDrugsChange}
                        renderInput={(option, props, index) => (
                          <Token
                            key={index}
                            onRemove={props.onRemove}
                            option={option}
                          >
                            <span
                              id={`prescriptionDrug${index}`}
                            >{`${option.description}`}</span>
                            <UncontrolledTooltip
                              placement="top"
                              target={`prescriptionDrug${index}`}
                            >
                              <h6>Composición:</h6>
                              {option.composition}
                              <h6>Formato:</h6>
                              {option.format}
                            </UncontrolledTooltip>
                          </Token>
                        )}
                        renderMenuItemChildren={(option, props) => (
                          <Fragment>
                            <Highlighter search={props.text}>
                              {option.description}
                            </Highlighter>
                            ,
                            <div>
                              <small className="text-muted">
                                Composición: {option.composition},{' '}
                                {option.format}
                              </small>
                            </div>
                          </Fragment>
                        )}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.drug && 'Ingrese un valor.'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="row">
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="quantity"
                    >
                      {'Cantidad'}
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        name="quantity"
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                        ref={register({ required: true })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.quantity && 'Ingrese un valor.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-md-12 col-form-label"
                  htmlFor="indications"
                >
                  {'Indicaciones'}
                </label>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="drugsIndications"
                    id="drugsIndications"
                    rows="3"
                    value={indications}
                    onChange={(e) => handleIndicationsChange(e.target.value)}
                    ref={register({ required: false })}
                  />
                  <span style={{ color: 'red' }}>
                    {errors.drugsIndications && 'Ingrese un valor.'}
                  </span>
                </div>
              </div>
              {currentIndex === -1 ? (
                <button
                  className="btn btn-primary pull-right m-b-10"
                  onClick={addDrugToPrescription}
                >
                  Agregar
                </button>
              ) : (
                <div className=" pull-right m-b-10">
                  <button
                    className="btn btn-danger"
                    onClick={() => clearForm()}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={updateDrugPrescription}
                  >
                    Actualizar
                  </button>
                </div>
              )}
              <div className="table-responsive">
                <table className="table table-hover table-sm">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">{'Fármaco'}</th>
                      <th scope="col" className="text-center">
                        {'Cantidad'}
                      </th>
                      <th scope="col">{'Indicaciones'}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptionDrugsList.length > 0
                      ? prescriptionDrugsList.map((pDrug, index) => (
                          <tr
                            key={index}
                            onClick={() => handleRowClick(pDrug, index)}
                          >
                            <th scope="row">
                              <i className="icofont icofont-pills"></i>
                            </th>
                            <td>{pDrug.drug?.description}</td>
                            <td className="text-center">{pDrug.quantity}</td>
                            <td>{pDrug.indications}</td>
                            <td>
                              <a
                                href="#javascript"
                                onClick={(e) => handleDeleteRow(e, index)}
                              >
                                <i
                                  className="fa fa-trash text-muted"
                                  title="Borrar"
                                ></i>
                              </a>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
                <span style={{ color: 'red' }}>
                  {errors.drugs && 'Debe ingresar al menos un fármaco.'}
                </span>
              </div>
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.prescriptionModalToggle()}
              >
                {'Cancelar'}
              </button>
              <button className="btn btn-primary ml-2">Guardar</button>
              <div style={{ display: 'none' }}>
                <PrescriptionPrintPreview
                  patient={patient}
                  prescriptionDrugsList={prescriptionDrugsList}
                  prescriptionInfo={prescription}
                  ref={componentRef}
                />
              </div>
              <ReactToPrint
                trigger={() => (
                  <button
                    className="btn btn-pill btn-outline-primary pull-right"
                    type="button"
                  >
                    <i className="fa fa-print"></i> Imprimir
                  </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
};

class PrescriptionPrintPreview extends Component {
  render() {
    const { patient, prescriptionDrugsList, prescriptionInfo } = this.props;
    return (
      <div className="p-l-50 p-r-50 m-l-50 m-r-50">
        <div className="row  m-2">
          <div className="col"></div>
          <div className="col">
            <div className="text-muted text-center">
              <small className="f-w-900 f-14">
                {prescriptionInfo.doctor.biologicalSex === 'm'
                  ? 'Dr.'
                  : 'Dra.' + prescriptionInfo.doctor.fullName}
              </small>
              <br />
              <small>
                {prescriptionInfo.doctor.licenses.map(
                  (x, index) =>
                    (index !== 0 ? ' | ' : '') +
                    (x.licenseType.includes('mp') ? 'M.P. ' : 'M.N.') +
                    x.licenseId
                )}
              </small>
              <br />
              <small>{prescriptionInfo.doctor.specialities.join(', ')}</small>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <hr className="mb-4 mt-2 ml-4 mr-4" />
        <div className="row">
          <div className="col text-center">
            <div className="card badge badge-light">
              <div className="card-body text-muted ">
                <div className="row ">
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Paciente'}
                      </p>
                      <p className="col-sm-12">
                        <b>{patient.fullName}</b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Edad'}
                      </p>
                      <p className="col-md-12 ">
                        <b>{patient.age}</b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        Doc. Tipo: {patient.nationalIdType}
                      </p>
                      <p className="col-md-12 ">
                        <b>{patient.nationalId}</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Obra Social'}
                      </p>
                      <p className="col-md-12">
                        <b>
                          {patient.healthInsurances?.length > 0
                            ? patient.healthInsurances[0].healthInsuranceCompany
                                .description
                            : '-'}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Plan'}
                      </p>
                      <p className="col-md-12 ">
                        <b>
                          {patient.healthInsurances?.length > 0
                            ? patient.healthInsurances[0].plan.code
                            : '-'}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Número de Credencial'}
                      </p>
                      <p className="col-md-12 ">
                        <b>
                          {patient.healthInsurances?.length > 0
                            ? patient.healthInsurances[0].cardNumber
                            : '-'}
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mr-4 ml-4" />
        <div className="row m-2">
          <div className="col text-left">
            <h5>R/P</h5>
            <br />
          </div>
        </div>
        <div className="row m-2">
          <div className="col text-left ml-2">
            <p className="text-muted">Diagnóstico</p>
            <p>{prescriptionInfo.diagnosis}</p>
            <br />
            <p className="text-muted">Indicaciones Generales</p>
            <p>{prescriptionInfo.indications}</p>
            <br />
          </div>
        </div>
        <div className="card m-b-50">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">{'Fármaco'}</th>
                    <th scope="col" className="text-center">
                      {'Cantidad'}
                    </th>
                    <th scope="col">{'Indicaciones'}</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptionDrugsList.length > 0
                    ? prescriptionDrugsList.map((pDrug, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <i className="icofont icofont-pills"></i>
                          </th>
                          <td>
                            {pDrug.drug?.description +
                              ' (' +
                              pDrug.drug?.composition +
                              ', ' +
                              pDrug.drug?.format +
                              ')'}
                          </td>
                          <td className="text-center">{pDrug.quantity}</td>
                          <td>{pDrug.indications}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row ml-4 mr-4" style={{ marginTop: 200 }}>
          <div className="col text-left">
            <span>{prescriptionInfo.date.toLocaleDateString('es')}</span>
          </div>
          <div className="col text-right m-r-50">
            <span>Firma</span>
          </div>
        </div>
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
    );
  }
}

export { NewPrescriptionModalComponent, PrescriptionPrintPreview };
