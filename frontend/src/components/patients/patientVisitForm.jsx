import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import DataTable from 'react-data-table-component';
import { TabContent, TabPane, Collapse } from 'reactstrap';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import { patientResetVisitForm } from '../../redux/patients/actions';
import * as entityService from '../../services/entity.service';
import notFoundImg from '../../assets/images/search-not-found.png';
import { NewPrescriptionModalComponent } from '../common/newPrescriptionModal';
import { StudyOrderModalComponent } from '../common/studyOrderModal';
import { LaboratoryOrderModalComponent } from '../common/laboratoryOrderModal';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientVisitForm = (props) => {
  const query = useQuery();
  const mode = query.get('mode');

  const { patient, status: patientStatus } = useSelector(
    (store) => store.Patient
  );
  const { visit, status: visitStatus } = useSelector((store) => store.Visit);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, errors } = useForm();

  const [dataTab, setdataTab] = useState('prescripciones');
  const [prescriptionModal, setprescriptionModal] = useState(false);
  const prescriptionModalToggle = () => {
    setprescriptionModal(!prescriptionModal);
  };
  const [studyOrderModal, setstudyOrderModal] = useState(false);
  const studyOrderModalToggle = () => {
    setstudyOrderModal(!studyOrderModal);
  };
  const [laboratoryOrderModal, setlaboratoryOrderModal] = useState(false);
  const laboratoryOrderModalToggle = () => {
    setlaboratoryOrderModal(!laboratoryOrderModal);
  };

  useEffect(() => {
    return () => {
      dispatch(patientResetVisitForm());
    };
  }, []);

  const handleSubmitForm = (data) => {
    if (data !== '') {
      const title = patient.id
        ? `Se actualizarán los datos del paciente ${patient.fullName}.`
        : `Se dará de alta al paciente ${data.firstName} ${data.lastName}.`;
      SweetAlert.fire({
        title: 'Atención',
        text: title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          //   const patientData = { ...patient, ...data, dateOfBirth, tags: tags.map(x => x.id) };
          //   if (patientData.healthInsurances?.length > 0) {
          //     if (!patientData.healthInsurances[0].healthInsuranceCompany) {
          //       patientData.healthInsurances = [];
          //     } else {
          //       patientData.healthInsurances[0].admissionDate = osFecIngresoDate;
          //     }
          //   }
          //   dispatch(patientSavetWatcher(patientData));
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const closeVisit = () => {
    dispatch(patientResetVisitForm());
  };

  const handleSavePrescription = (prescription) => {
    visit.prescriptions.push(prescription);
    prescriptionModalToggle();
  };

  const handleDeletePrescrptions = (index) => {
    visit.prescriptions.splice(index, 1);
  };

  const handleSaveStudyOrder = (studyOrder) => {
    visit.studyOrders.push(studyOrder);
    studyOrderModalToggle();
  };

  const handleDeleteStudyOrder = (index) => {
    visit.studyOrders.splice(index, 1);
  };

  const handleSaveLaboratoryOrder = (laboratoryOrder) => {
    visit.laboratoryOrders.push(laboratoryOrder);
    laboratoryOrderModalToggle();
  };

  const handleDeleteLaboratoryOrder = (index) => {
    visit.laboratoryOrders.splice(index, 1);
  };

  return (
    <Fragment>
      {visitStatus === LOADED ||
      visitStatus === SUCCEEDED ||
      visitStatus === FAILED ||
      (mode === 'new' && visitStatus !== LOADING) ? (
        <Fragment>
          <div className="col-md-8 offset-md-1">
            <div className="row text-muted bg-light b-r-10 p-50 b-primary">
              <div className="col-md-3 mb-2">
                <div className="row">
                  <span className="col-md-12 f-w-700">
                    <i className="icofont icofont-calendar mr-1"></i>Fecha
                  </span>
                  <span className="col-md-12 f-w-500">
                    {new Date(visit.createdAt).toLocaleDateString('es')}
                  </span>
                </div>
              </div>
              <div className="col-md-3 mb-2">
                <div className="row">
                  <span className="col-md-12  f-w-700">
                    <i className="icofont icofont-user-alt-4 mr-1"></i>Paciente
                  </span>
                  <span className="col-md-12 f-w-500">{patient.fullName}</span>
                </div>
              </div>
              <div className="col-md-3 mb-2">
                <div className="row">
                  <span className="col-md-12  f-w-700">
                    <i className="icofont icofont-doctor mr-1"></i>Atendido por
                  </span>
                  <span className="col-md-12 f-w-500">
                    {visit.doctor.fullName}
                  </span>
                </div>
              </div>
              <div className="col-md-3 mb-2">
                <div className="row">
                  <span className="col-md-12  f-w-700">
                    <i className="icofont icofont-stethoscope-alt mr-1"></i>
                    Especialidades
                  </span>
                  <span className="col-md-12 f-w-500">
                    {visit.doctor.specialities.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-right">
              <button onClick={closeVisit} className="btn btn-primary">
                {'Volver al Historial'}
              </button>
            </div>
          </div>
          <div className="col-md-12 m-t-20">
            <form
              className="theme-form mega-form"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <fieldset disabled={mode === 'browse'}>
                <hr className="mt-4 mb-4" />
                <h6>{'Motivo'}</h6>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="diagnosis"
                  >
                    {''}
                  </label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      id="reason"
                      type="text"
                      name="reason"
                      defaultValue={visit.reason}
                      ref={register({ required: true })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.reason && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                <h6>{'Síntomas'}</h6>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="symptom">
                    {''}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="symptom"
                      rows="5"
                      spellCheck="false"
                      name="symptom"
                      defaultValue={visit.symptom}
                      ref={register({ required: true })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.symptom && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
                <h6>{'Diagnóstico'}</h6>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="diagnosis"
                  >
                    {''}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="diagnosis"
                      rows="5"
                      spellCheck="false"
                      name="diagnosis"
                      defaultValue={visit.diagnosis}
                      ref={register({ required: true })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.diagnosis && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
                <h6>{'Evaluación'}</h6>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="evaluation"
                  >
                    {''}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="evaluation"
                      rows="5"
                      spellCheck="false"
                      name="evaluation"
                      defaultValue={visit.evaluation}
                      ref={register({ required: false })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.evaluation && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
                <h6>{'Notas'}</h6>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="notes">
                    {''}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="notes"
                      rows="5"
                      spellCheck="false"
                      name="notes"
                      defaultValue={visit.notes}
                      ref={register({ required: false })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.notes && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                {mode !== 'browse' && (
                  <div className="card-footer m-b-40">
                    <span className="pull-right">
                      {mode === 'new' && (
                        <button
                          className="btn btn-outline-danger"
                          onClick={closeVisit}
                        >
                          {'Cancelar'}
                        </button>
                      )}
                      <button className="btn btn-primary ml-1" type="submit">
                        {'Guardar'}
                      </button>
                    </span>
                  </div>
                )}
                <hr className="mt-4 mb-4" />
                <h6>{'Indicaciones'}</h6>
                <p className="text-muted">
                  Indicaiones, órdenes de estudios, prescripciones, órdenes de
                  laboratorio y demás información pertiente a la consulta.
                </p>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="indications"
                  >
                    {''}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="indications"
                      rows="5"
                      spellCheck="false"
                      name="notindicationses"
                      defaultValue={visit.indications}
                      ref={register({ required: false })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.indications && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
              </fieldset>
              <ul className="nav nav-tabs nav-secondary m-b-30">
                <li className="nav-item">
                  <a
                    href="#javascript"
                    className={`nav-link ${
                      dataTab === 'prescripciones' ? 'active' : ''
                    }`}
                    onClick={() => setdataTab('prescripciones')}
                  >
                    <i className="icofont icofont-pills"></i>
                    Prescripciones
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#javascript"
                    className={`nav-link ${
                      dataTab === 'laboratorios' ? 'active' : ''
                    }`}
                    onClick={() => setdataTab('laboratorios')}
                  >
                    <i className="icofont icofont-laboratory"></i>
                    Órdenes de Laboratorios
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#javascript"
                    className={`nav-link ${
                      dataTab === 'estudioscompl' ? 'active' : ''
                    }`}
                    onClick={() => setdataTab('estudioscompl')}
                  >
                    <i className="icofont icofont-xray"></i>
                    Órdenes de Estudios
                  </a>
                </li>
              </ul>
              <TabContent activeTab={dataTab}>
                <TabPane tabId="prescripciones" className="fade show">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>{'Prescripciones'}</h5>
                      <span
                        className="text-muted f-12 m-t-5"
                        style={{
                          letterSpacing: 1,
                        }}
                      >
                        {'Prescripciones que se indican en la consulta.'}
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-right">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            prescriptionModalToggle();
                          }}
                          className="btn btn-primary"
                        >
                          <i className="icofont icofont-plus mr-1"></i>
                          {'Agregar'}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 mt-5">
                      <div className="table-responsive">
                        {visit.prescriptions.length > 0 ? (
                          <table className="table table-hover table-sm">
                            <thead>
                              <tr>
                                <th scope="col"></th>
                                <th scope="col">{'Diagnóstico'}</th>
                                <th scope="col">{'Indicaciones Generales'}</th>
                                <th scope="col">{'Fármacos'}</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {visit.prescriptions.map(
                                (prescription, index) => (
                                  <tr key={index}>
                                    <th scope="row" style={{ width: '26px' }}>
                                      <i className="icofont icofont-pills text-muted"></i>
                                    </th>
                                    <td>{prescription.diagnosis}</td>
                                    <td>{prescription.indications}</td>
                                    <td>
                                      {prescription.drugs?.map(
                                        (x) =>
                                          ` * ${x.drug.description} (${x.indications})`
                                      )}
                                    </td>
                                    <td className="text-center">
                                      <a
                                        href="#javascript"
                                        onClick={(e) =>
                                          handleDeletePrescrptions(index)
                                        }
                                      >
                                        <i
                                          className="fa fa-trash text-danger ml-4"
                                          title="Borrar"
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        ) : (
                          <div className="col-md-12 text-center m-50">
                            <img
                              className="img-fluid"
                              src={notFoundImg}
                              alt=""
                            />
                            <br />
                            <span className="txt-info">
                              Aún no hay prescripciones cargadas...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="laboratorios" className="fade show">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>{'Órdenes de Laboratorios'}</h5>
                      <span
                        className="text-muted f-12 m-t-5"
                        style={{
                          letterSpacing: 1,
                        }}
                      >
                        {'Órdenes de laboratorios indicadas para el paciente.'}
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-right">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            laboratoryOrderModalToggle();
                          }}
                          className="btn btn-primary"
                        >
                          <i className="icofont icofont-plus mr-1"></i>
                          {'Agregar'}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 mt-5">
                      <div className="table-responsive">
                        {visit.laboratoryOrders.length > 0 ? (
                          <table className="table table-hover table-sm">
                            <thead>
                              <tr>
                                <th scope="col"></th>
                                <th scope="col">{'Diagnóstico'}</th>
                                <th scope="col">{'Indicaciones'}</th>
                                <th scope="col">
                                  {'Laboratorios (variables)'}
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {visit.laboratoryOrders.map((labOrder, index) => (
                                <tr key={index}>
                                  <th scope="row" style={{ width: '26px' }}>
                                    <i className="icofont icofont-laboratory text-muted"></i>
                                  </th>
                                  <td>{labOrder.diagnosis}</td>
                                  <td>{labOrder.indications}</td>
                                  <td>
                                    {labOrder.laboratories?.map(
                                      (x) => ` * ${x.description}`
                                    )}
                                  </td>
                                  <td className="text-center">
                                    <a
                                      href="#javascript"
                                      onClick={(e) =>
                                        handleDeleteLaboratoryOrder(index)
                                      }
                                    >
                                      <i
                                        className="fa fa-trash text-danger ml-4"
                                        title="Borrar"
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="col-md-12 text-center m-50">
                            <img
                              className="img-fluid"
                              src={notFoundImg}
                              alt=""
                            />
                            <br />
                            <span className="txt-info">
                              Aún no hay órdenes de laboratorios cargadas...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="estudioscompl" className="fade show">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>{'Órdenes de Estudios'}</h5>
                      <span
                        className="text-muted f-12 m-t-5"
                        style={{
                          letterSpacing: 1,
                        }}
                      >
                        {
                          'Órdenes de estudios complementarios indicados para el paciente.'
                        }
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-right">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            studyOrderModalToggle();
                          }}
                          className="btn btn-primary"
                        >
                          <i className="icofont icofont-plus mr-1"></i>
                          {'Agregar'}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 mt-5">
                      <div className="table-responsive">
                        {visit.studyOrders.length > 0 ? (
                          <table className="table table-hover table-sm">
                            <thead>
                              <tr>
                                <th scope="col"></th>
                                <th scope="col">{'Diagnóstico'}</th>
                                <th scope="col">{'Indicaciones'}</th>
                                <th scope="col">{'Tipo de Studio'}</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {visit.studyOrders.map((studyOrder, index) => (
                                <tr key={index}>
                                  <th scope="row" style={{ width: '26px' }}>
                                    <i className="icofont icofont-heartbeat text-muted"></i>
                                  </th>
                                  <td>{studyOrder.diagnosis}</td>
                                  <td>{studyOrder.indications}</td>
                                  <td>{studyOrder.studyType.description}</td>
                                  <td className="text-center">
                                    <a
                                      href="#javascript"
                                      onClick={(e) =>
                                        handleDeleteStudyOrder(index)
                                      }
                                    >
                                      <i
                                        className="fa fa-trash text-danger ml-4"
                                        title="Borrar"
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="col-md-12 text-center m-50">
                            <img
                              className="img-fluid"
                              src={notFoundImg}
                              alt=""
                            />
                            <br />
                            <span className="txt-info">
                              Aún no hay órdenes de estudios cargadas...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </form>
          </div>
          {prescriptionModal && (
            <NewPrescriptionModalComponent
              prescriptionModal={prescriptionModal}
              prescriptionModalToggle={prescriptionModalToggle}
              handleSavePrescription={handleSavePrescription}
            />
          )}
          {studyOrderModal && (
            <StudyOrderModalComponent
              modal={studyOrderModal}
              modalToggle={studyOrderModalToggle}
              handleSave={handleSaveStudyOrder}
            />
          )}
          {laboratoryOrderModal && (
            <LaboratoryOrderModalComponent
              modal={laboratoryOrderModal}
              modalToggle={laboratoryOrderModalToggle}
              handleSave={handleSaveLaboratoryOrder}
            />
          )}
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientVisitForm;
