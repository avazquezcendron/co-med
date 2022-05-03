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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientVisitForm = (props) => {
  const { patient, status: patientStatus } = useSelector(
    (store) => store.Patient
  );
  const { visit, status: visitStatus } = useSelector((store) => store.Visit);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, errors } = useForm();

  const [dataTab, setdataTab] = useState('prescripciones');

  const query = useQuery();
  const mode = query.get('mode');

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
                      ref={register({ required: true })}
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
              </fieldset>
              <hr className="mt-4 mb-4" />
              <h6>{'Indicaciones'}</h6>
              <p className="text-muted">
                Indicaiones, órdenes de estudios, prescripciones, órdenes de laboratorio y demás información
                pertiente a la consulta.
              </p>
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
                    <i className="icofont icofont-heartbeat"></i>
                    Órdenes de Estudios
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#javascript"
                    className={`nav-link ${
                      dataTab === 'metricas' ? 'active' : ''
                    }`}
                    onClick={() => setdataTab('metricas')}
                  >
                    <i className="icofont icofont-pulse"></i>
                    Métricas y Signos Vitales
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#javascript"
                    className={`nav-link ${
                      dataTab === 'otros' ? 'active' : ''
                    }`}
                    onClick={() => setdataTab('otros')}
                  >
                    <i className="icofont icofont-file-text"></i>
                    Otros
                  </a>
                </li>
              </ul>
              <TabContent activeTab={dataTab}>
                <TabPane tabId="prescripciones" className="fade show">
                  <div className="col-md-12"></div>
                </TabPane>

                <TabPane tabId="laboratorios" className="fade show">
                  <div className="col-md-12"></div>
                </TabPane>
                <TabPane tabId="estudioscompl" className="fade show">
                  <div className="col-md-12"></div>
                </TabPane>
                <TabPane tabId="metricas" className="fade show">
                  <div className="col-md-12"></div>
                </TabPane>
                <TabPane tabId="otros" className="fade show">
                  <div className="col-md-12"></div>
                </TabPane>
              </TabContent>
            </form>
          </div>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientVisitForm;
