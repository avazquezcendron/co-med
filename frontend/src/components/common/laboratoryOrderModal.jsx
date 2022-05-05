import React, { Fragment, useState, useEffect, useRef, Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ReactToPrint from 'react-to-print';

import * as entityService from '../../services/entity.service';
import logo from '../../assets/images/co-med-logo.jpg';

const LaboratoryOrderModalComponent = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { patient } = useSelector((store) => store.Patient);
  const { visit } = useSelector((store) => store.Visit);

  const { register, handleSubmit, errors, setError, clearErrors } = useForm();

  const componentRef = useRef();

  const [laboratoryOrder, setlaboratoryOrder] = useState({
    date: new Date(),
    indications: '',
    diagnosis: '',
    laboratories: [],
  });

  const [laboratoryTypes, setLaboratoryTypes] = useState([]);
  useEffect(() => {
    entityService
      .getAll('laboratoryType', loggedUser)
      .then((data) => setLaboratoryTypes(data));
    return () => {};
  }, []);

  const handleSubmitForm = (data) => {
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text: `Se generará la órden de estudio para el paciente ${patient.fullName}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          props.handleSave && props.handleSave({ ...data, laboratories: laboratoryOrder.laboratories});
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleLaboratyCheck = (lab, checked) => {
    if (checked) {
      setlaboratoryOrder({ ...laboratoryOrder, laboratories: [...laboratoryOrder.laboratories, lab] });  
    } else {
      setlaboratoryOrder({ ...laboratoryOrder, laboratories: laboratoryOrder.laboratories.filter(x => x.id !== lab.id) });
    }
    
  }

  return (
    <Modal isOpen={props.modal} toggle={props.modalToggle} size="lg">
      <ModalHeader toggle={props.modalToggle}>
        Nueva Órden de Laboratorio
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
                    defaultValue={visit.diagnosis}
                    onChange={(e) =>
                      setlaboratoryOrder({
                        ...laboratoryOrder,
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
              <h6>{'Indicaciones'}</h6>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="indications"
                    id="indications"
                    rows="3"
                    onChange={(e) =>
                      setlaboratoryOrder({
                        ...laboratoryOrder,
                        indications: e.target.value,
                      })
                    }
                    ref={register({ required: false })}
                  />
                </div>
              </div>
              <hr className="mt-4 mb-4" />
              <h6>{'Laboratorios (variables)'}</h6>
              <div className="form-group row">
                <div className="col-md-10">
                  <div className="row">
                    <label className="col-md-12 col-form-label" htmlFor="drug">
                      {''}
                    </label>
                    <div className="col-md-12">
                      {laboratoryTypes.length > 0 &&
                        laboratoryTypes.map((lab, index) => (
                        <Fragment key={index}>
                            <input
                              className="checkbox_animated"
                              defaultChecked={false}
                              name={`laboratories`}
                              onChange={(e) => handleLaboratyCheck(lab, e.target.checked)}
                              id={`laboratoryType${index}`}
                              type="checkbox"
                              ref={register({ required: false })}
                            />
                            <label
                              className="mb-1 mr-2"
                              htmlFor={`laboratoryType${index}`}
                            >
                              {lab.description}
                            </label>
                          </Fragment>
                        ))}
                      <span style={{ color: 'red' }}>
                        {errors.laboratories && 'Ingrese un valor.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.modalToggle()}
              >
                {'Cancelar'}
              </button>
              <button className="btn btn-primary ml-2">Guardar</button>
              <div style={{ display: 'none' }}>
                <LaboratoryOrderPrintPreview
                  patient={patient}
                  doctor={visit.doctor}
                  laboratoryOrderInfo={laboratoryOrder}
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

class LaboratoryOrderPrintPreview extends Component {
  render() {
    const { patient, doctor, laboratoryOrderInfo } = this.props;
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
              <small>Doctor/a {doctor.fullName}</small>
              <br />
              <small>{doctor.specialities?.join(', ')}</small>
              <br />
              <small>
                {doctor.licenses?.map(
                  (x, index) =>
                    (index !== 0 ? ' | ' : '') +
                    (x.licenseType.includes('mp') ? 'M.P. ' : 'M.N.') +
                    x.licenseId
                )}
              </small>
              <br />
              <small>Puerto San Julián</small>
              <br />
              <small>{laboratoryOrderInfo.date.toLocaleDateString('es')}</small>
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
                        {'Número de H.C.'}
                      </p>
                      <p className="col-md-12 ">
                        <b>{patient.healthRecord?.healthRecordNumber}</b>
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
            <p>{laboratoryOrderInfo.diagnosis}</p>
            <h5>Indicaciones</h5>
            <p>{laboratoryOrderInfo.indications}</p>
            <h5>Laboratorios solicitados</h5>
              {laboratoryOrderInfo.laboratories.map(
              (x, index) => <p key={index} className="m-0">(*) {x.description}</p>
              )}
          </div>
        </div>
        <div
          className="row text-center m-r-2 m-t-50"
          style={{ marginTop: 300 }}
        >
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

export { LaboratoryOrderModalComponent, LaboratoryOrderPrintPreview };
