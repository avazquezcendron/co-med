import React, { Fragment, useState, useEffect } from 'react';
import { translate } from 'react-switch-lang';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PatientCard from './patientCard';
import Breadcrumb from '../common/breadcrumb';
import PatientHealthRecord from './patientHealthRecord';
import PatientVisitHistory from './patientVisitHistory';
import { patientGetByIdWatcher, patientInitialize } from '../../redux/patients/actions';
import { LOADED, LOADING, SUCCEEDED } from '../../redux/statusTypes';
import Loader from '../common/loader';
import PatientPersonalData from './patientPersonalData';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientProfile = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const dispatch = useDispatch();

  const { id } = useParams();

  const query = useQuery();
  const mode = query.get('mode');

  useEffect(() => {
    if (id !== '0') dispatch(patientGetByIdWatcher(id));
  }, [dispatch, id, mode]);

  return (
    <Fragment>
      {/* {status === LOADED || status === SUCCEEDED || mode === 'new' ? (
        <Fragment> */}
          <Breadcrumb
            parent={{ title: props.t('Patients'), url: 'patient' }}
            title={id === '0' ? 'Nuevo Paciente' : patient?.firstName + ' ' + patient?.lastName}
          />
          <div className="container-fluid">
            <div className="edit-profile  ">
              <div className="row">
                {id === '0' ? (
                  <div className="col-md-12">
                        <PatientPersonalData history={props.history} showAvatar={true}/>
                  </div>
                ) : (
                  <Fragment>
                    <div className="col-lg-4  style-1 default-according faq-accordion">
                      <PatientCard />
                    </div>
                    <div className="col-lg-8 style-1 default-according faq-accordion">
                      <PatientHealthRecord />
                    </div>
                    <div className="col-md-12  style-1 default-according faq-accordion">
                      <PatientVisitHistory />
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        {/* </Fragment>
      ) : (
        <Loader show={status === LOADING} />
      )} */}
    </Fragment>
  );
};

export default translate(PatientProfile);
