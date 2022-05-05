import React, { useState, useEffect, useRef, Fragment, Component } from 'react';
import { Modal, ModalHeader, ModalBody, UncontrolledTooltip } from 'reactstrap';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { Typeahead, Highlighter, Token } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ReactToPrint from 'react-to-print';

import * as entityService from '../../services/entity.service';
import logo from '../../assets/images/co-med-logo.jpg';

const NewPrescriptionModalComponent = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { patient } = useSelector((store) => store.Patient);
  const { visit } = useSelector((store) => store.Visit);
  const { doctor } = useSelector((store) => store.Doctor);

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
    doctor: doctor || loggedUser.doctor || {},
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
          props.handleSavePrescription && props.handleSavePrescription({ ...data, drugs: prescriptionDrugsList});
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
              <h6>{'Diagnóstico'}</h6>
              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    className="form-control"
                    name="diagnosis"
                    id="diagnosis"
                    type="text"
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
      <div>
        <div className="row  m-2">
          <div className="col">
            <img
              className="media-object pull-left b-r-8"
              style={{ width: 100 }}
              src={logo}
              alt=""
            />
          </div>
          <div className="col">
            <div className="text-muted text-center">
              <small>Doctor/a Tayhana Ortolá</small>
              <br />
              <small>Méidca Clínica</small>
              <br />
              <small>M.P: 124123</small>
              <br />
              <small>Puerto San Julián</small>
              <br />
              <small>{prescriptionInfo.date.toLocaleDateString('es')}</small>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <hr className="m-4" />
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
                            : ''}
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
                            : ''}
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
                            : ''}
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-4" />
        <div className="row m-2">
          <div className="col text-left">
            <h5>Diagnóstico</h5>
            <p>{prescriptionInfo.diagnosis}</p>
            <h5>Indicaciones Generales</h5>
            <p>{prescriptionInfo.indications}</p>
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
                              ' - ' +
                              pDrug.drug?.composition +
                              ', ' +
                              pDrug.drug?.format}
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
        <div className="row text-center m-r-2" style={{ marginTop: 300 }}>
          <div className="col"></div>
          <div className="col">
            <hr className="" />
            <span>Firma</span>
          </div>
        </div>
      </div>
    );
  }
}

export { NewPrescriptionModalComponent, PrescriptionPrintPreview };
