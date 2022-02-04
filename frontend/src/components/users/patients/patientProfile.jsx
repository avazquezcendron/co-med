import React, { Fragment, useState, useEffect } from 'react';
import { Collapse } from 'reactstrap';
import { translate } from 'react-switch-lang';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../common/breadcrumb';
import axios from 'axios';
import {
  Bio,
  Password,
  Website,
  Save,
} from '../../../constant';
import PatientCard from './patientCard';
import PatientHealthRecord from './patientHealthRecord';
import PatientVisitHistory from './patientVisitHistory';

const PatientProfile = (props) => {

  const { id } = useParams();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/patients.json`).then((res) => {
      const data = res.data;
      const filteredData = data.find((x) => x.id === parseInt(id));
      setPatient(filteredData);
    });
  }, [id]);

  const [isProfile, setisProfile] = useState(true);
  const [isHealthRecord, setisHealthRecord] = useState(true);
  const [isVisitHistory, setisVisitHistory] = useState(true);


  return (
    <Fragment>
      <Breadcrumb
        parent={{ title: props.t('Patients'), url: 'users/patients' }}
        title={patient.name}
      />
      <div className="container-fluid">
        <div className="edit-profile  ">
          <div className="row">
            <div className="col-lg-4  style-1 default-according faq-accordion">
              <div className="card">
                <div className="card-header">
                  <div className="row mb-2 ">
                    <div className="col-md-9">
                      <h4 className="card-title mb-0">
                        {'Información Básica'}
                      </h4>
                    </div>
                    <div className="col-md-3">
                      <button
                        className="btn btn-link pl-0 pull-right"
                        onClick={() => setisProfile(!isProfile)}
                        data-toggle="collapse"
                        data-target="#collapseicon1"
                        aria-expanded={isProfile}
                        aria-controls="collapseicon1"
                      >
                        {''}
                      </button>
                    </div>
                  </div>
                </div>
                <Collapse isOpen={isProfile}>
                  <PatientCard patient={patient} />

                  <form hidden>
                    <div className="form-group">
                      <h6 className="form-label">{Bio}</h6>
                      <textarea
                        className="form-control"
                        rows="5"
                        defaultValue="On the other hand, we denounce with righteous indignation"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        {'Tipo de Documento'}
                      </label>
                      <input
                        className="form-control"
                        placeholder="your-email@domain.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{Password}</label>
                      <input
                        className="form-control"
                        type="password"
                        defaultValue="password"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{Website}</label>
                      <input
                        className="form-control"
                        placeholder="http://Uplor .com"
                      />
                    </div>
                    <div className="form-footer">
                      <button className="btn btn-primary btn-block">
                        {Save}
                      </button>
                    </div>
                  </form>
                </Collapse>
              </div>
            </div>
            <div className="col-lg-8 style-1 default-according faq-accordion">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-9">
                      <h4 className="card-title mb-0">{'Historia Clínica'}</h4>
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
                  <PatientHealthRecord patient={patient}/>
                </Collapse>
              </div>
            </div>
            <div className="col-md-12  style-1 default-according faq-accordion">
              <div className="card">
                <div className="card-header">
                  <div className="row mb-2 ">
                    <div className="col-md-9">
                      <h4 className="card-title mb-0">
                        {'Historial de Consultas'}
                      </h4>
                    </div>
                    <div className="col-md-3">
                      <button
                        className="btn btn-link pl-0 pull-right"
                        onClick={() => setisVisitHistory(!isVisitHistory)}
                        data-toggle="collapse"
                        data-target="#collapseicon3"
                        aria-expanded={isVisitHistory}
                        aria-controls="collapseicon3"
                      >
                        {''}
                      </button>
                    </div>
                  </div>
                </div>
                <Collapse isOpen={isVisitHistory}>
                  <PatientVisitHistory patient={patient} />                  
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default translate(PatientProfile);
