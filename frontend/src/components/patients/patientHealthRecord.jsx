import React, { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { TabContent, TabPane, Collapse } from 'reactstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector } from 'react-redux';

import PatientPersonalData from './patientPersonalData';
import PatientBackground from './patientBackground';
import PatientPrescriptions from './patientPrescriptions';
import PatientLaboratories from './patientLaboratories';
import PatientStudies from './patientStudies';
import PatientVitalsAndMetrics from './patientVitalsAndMetrics';
import PatientEvolution from './patientEvolution';
import { SUCCEEDED, LOADED, FAILED } from '../../redux/statusTypes';
import Loader from '../common/loader';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientHealthRecord = (props) => {
  const query = useQuery();
  const mode = query.get('mode');

  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { status: visitStatus } = useSelector((store) => store.Visit);
  const { patient, status } = useSelector((store) => store.Patient);

  const [dataTab, setdataTab] = useState('datos');
  const [isHealthRecord, setisHealthRecord] = useState(true);

  useEffect(() => {
    setisHealthRecord(visitStatus !== LOADED);
    return () => {
      // dispatch(patientInitialize());
    };
  }, [visitStatus]);

  return (
    <Fragment>
      {status === LOADED || status === SUCCEEDED || status === FAILED ? (
        <div className="card">
          <div className="card-header">
            <div className="row m-b-2">
              <div className="col-md-9">
                <h4 className="card-title mb-0">
                  {'Historia Clínica Nro. ' +
                    patient.healthRecord?.healthRecordNumber}
                </h4>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-link pl-0"
                  onClick={() => setisHealthRecord(!isHealthRecord)}
                  data-toggle="collapse"
                  data-target="#collapseicon2"
                  aria-expanded={isHealthRecord}
                  aria-controls="collapseicon2"
                >
                  {''}
                </button>
              </div>
            </div>
          </div>
          <Collapse isOpen={isHealthRecord}>
            <div className="card-body">
              <ul className="nav nav-tabs nav-secondary m-b-30">
                <li className="nav-item">
                  <a
                    href="#javascript"
                    className={`nav-link ${
                      dataTab === 'datos' ? 'active' : ''
                    }`}
                    onClick={() => setdataTab('datos')}
                  >
                    <i className="icofont icofont-id"></i>Datos
                  </a>
                </li>
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
                {loggedUser.user.isAdmin && (
                  <Fragment>
                    <li className="nav-item">
                      <a
                        href="#javascript"
                        className={`nav-link ${
                          dataTab === 'antecedentes' ? 'active' : ''
                        }`}
                        onClick={() => setdataTab('antecedentes')}
                      >
                        <i className="icofont icofont-medical"></i>
                        Antecendentes
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
                        Laboratorios
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
                        Estudios Compl.
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
                          dataTab === 'evolucion' ? 'active' : ''
                        }`}
                        onClick={() => setdataTab('evolucion')}
                      >
                        <i className="icofont icofont-chart-histogram"></i>
                        Evolución
                      </a>
                    </li>
                  </Fragment>
                )}
              </ul>
              <TabContent activeTab={dataTab}>
                <TabPane className="fade show" tabId="datos">
                  <div className="col-md-12">
                    <PatientPersonalData />
                  </div>
                </TabPane>
                <TabPane tabId="prescripciones" className="fade show">
                  <div className="col-md-12">
                    <PatientPrescriptions />
                  </div>
                </TabPane>
                {loggedUser.user.isAdmin && (
                  <Fragment>
                    <TabPane tabId="antecedentes" className="fade show">
                      <div className="col-md-12">
                        <PatientBackground />
                      </div>
                    </TabPane>
                    <TabPane tabId="laboratorios" className="fade show">
                      <div className="col-md-12">
                        <PatientLaboratories />
                      </div>
                    </TabPane>
                    <TabPane tabId="estudioscompl" className="fade show">
                      <div className="col-md-12">
                        <PatientStudies />
                      </div>
                    </TabPane>
                    <TabPane tabId="metricas" className="fade show">
                      <div className="col-md-12">
                        <PatientVitalsAndMetrics />
                      </div>
                    </TabPane>
                    <TabPane tabId="evolucion" className="fade show">
                      <div className="col-md-12">
                        <PatientEvolution />
                      </div>
                    </TabPane>
                  </Fragment>
                )}
              </TabContent>
            </div>
          </Collapse>
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientHealthRecord;
