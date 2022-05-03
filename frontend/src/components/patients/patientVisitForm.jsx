import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import DataTable from 'react-data-table-component';

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
          <div className="col-md-9">
            <h5>{'Consulta'}</h5>
            <span>{'Detalle de la consulta del paciente.'}</span>
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
                    <input
                      className="form-control"
                      id="diagnosis"
                      type="text"
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="notes"
                  >
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
