import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';
import notFoundImg from '../../assets/images/search-not-found.png';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientPrescriptions = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const query = useQuery();
  const mode = query.get('mode');

  return (
    <Fragment>
      {status === LOADED ||
      status === SUCCEEDED ||
      status === FAILED ||
      (mode === 'new' && status !== LOADING) ? (
        <Fragment>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  <h5>{'Evolución'}</h5>
                  <span className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}>
                    {'Gráficos y reportes de la evolución del paciente.'}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body datatable-react">
              <div className="col-md-12 text-center m-50">
                <img className="img-fluid" src={notFoundImg} alt="" />
                <br />
                <span className="txt-info">
                  Aún no se registran datos de la evolución del paciente...
                </span>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientPrescriptions;
