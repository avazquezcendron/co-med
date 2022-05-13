import React, { Fragment, useEffect, useState } from 'react';
import { translate } from 'react-switch-lang';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PatientCard from './patientCard';
import PatientVitals from './patientVitals';
import Breadcrumb from '../common/breadcrumb';
import PatientHealthRecord from './patientHealthRecord';
import PatientVisitHistory from './patientVisitHistory';
import {
  patientGetByIdWatcher,
  patientInitialize,
} from '../../redux/patients/actions';
import PatientPersonalData from './patientPersonalData';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientProfile = (props) => {
  const { patient } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [hrExpanded, setHrExpanded] = useState(false);

  const { id } = useParams();

  const query = useQuery();
  const mode = query.get('mode');

  useEffect(() => {
    return () => {
      dispatch(patientInitialize());
    };
  }, []);

  useEffect(() => {
    if (id !== '0') dispatch(patientGetByIdWatcher(id));
  }, [dispatch, id, mode]);

  return (
    <Fragment>
      {/* {status === LOADED || status === SUCCEEDED || mode === 'new' ? (
        <Fragment> */}
      <Breadcrumb
        parent={{ title: props.t('Patients'), url: 'patient' }}
        title={id === '0' ? 'Nuevo Paciente' : patient?.fullName}
      />
      <div className="container-fluid">
        <div className="edit-profile  ">
          <div className="row">
            {id === '0' ? (
              <div className="col-md-12">
                <PatientPersonalData
                  history={props.history}
                  showAvatar={true}
                />
              </div>
            ) : (
              <Fragment>
                {!hrExpanded && (
                  <div className="col-xl-4 col-lg-12  style-1 default-according faq-accordion">
                    <div className="row">
                      <div className="col-xl-12 col-lg-6 mb-4">
                        <PatientCard />
                      </div>
                      <div className="col-xl-12 col-lg-6">
                        <PatientVitals />
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className={`${
                    hrExpanded
                      ? 'col-md-12 col-xl-12 col-lg-12'
                      : 'col-xl-8 col-lg-12'
                  } style-1 default-according faq-accordion`}
                  style={{
                    WebkitTransition: 'all 0.3s',
                    transition: 'all 0.3s',
                  }}
                >
                  <PatientHealthRecord
                    handleHrExpanded={() => setHrExpanded(!hrExpanded)}
                  />
                </div>
                {!hrExpanded &&
                  (loggedUser.user.isAdmin || loggedUser.user.isDoctor) && (
                    <div className="col-xl-12 col-lg-12  style-1 default-according faq-accordion">
                      <PatientVisitHistory />
                    </div>
                  )}
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
