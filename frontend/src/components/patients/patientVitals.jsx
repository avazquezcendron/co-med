import React, { useState, useEffect, Fragment } from 'react';
import { Collapse } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';

import Loader from '../common/loader';
import { SUCCEEDED, LOADED, FAILED } from '../../redux/statusTypes';
import { patientUpdateHRWatcher } from '../../redux/patients/actions';

const PatientVitals = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { status: visitStatus } = useSelector((store) => store.Visit);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { visits } = useSelector((store) => store.Visits);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset, setValue, getValues, errors } =
    useForm();

  const [isVitals, setIsVitals] = useState(!props.collapsed);
  const [isEditing, setIsEditing] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    if (typeof props.collapsed === 'undefined') {
      setIsVitals(visitStatus !== LOADED);
    }
  }, [visitStatus]);

  const handleSubmitForm = (data) => {
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text: `Se actualizarán los signos vitales del paciente ${patient.fullName}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.value) {
          const healthRecordData = {
            ...patient.healthRecord,
            vitalsAndMetrics: [
              ...patient.healthRecord.vitalsAndMetrics,
              {
                ...data,
                date: new Date(),
                bodyWeight: getValues('bodyWeight'),
              },
            ],
          };
          dispatch(
            patientUpdateHRWatcher({
              patient: patient,
              healthRecordData: healthRecordData,
            })
          );
          setIsEditing(false);
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
    reset();
  };

  const handleHeightWeightChange = (e) => {
    const bodyWeightCalc =
      getValues('weight') / Math.pow(getValues('height') / 100, 2);
    const bodyWeightRounded = Math.round(bodyWeightCalc * 100) / 100;
    setValue('bodyWeight', bodyWeightRounded);
  };

  return (
    <Fragment>
      {status === LOADED || status === SUCCEEDED || status === FAILED ? (
        <div className="card">
          <div className="card-header">
            <div className="row m-b-2">
              <div className="col-md-9">
                <h4 className="card-title mb-0">
                  <span className="icofont icofont-stethoscope-alt text-muted mr-2"></span>
                  Examen físico
                </h4>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-link pl-0"
                  onClick={() => setIsVitals(!isVitals)}
                  data-toggle="collapse"
                  data-target="#collapseicon2"
                  aria-expanded={isVitals}
                  aria-controls="collapseicon2"
                >
                  {''}
                </button>
              </div>
            </div>
          </div>
          <Collapse isOpen={isVitals}>
            <div className="card">
              <form
                className="theme-form form-inline"
                onSubmit={handleSubmit(handleSubmitForm)}
              >
                <fieldset disabled={!isEditing}>
                  <div className="card-body text-muted">
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <span className="ml-2">
                          Estado físico actual y valores de los signos vitales
                          del paciente.
                        </span>
                        <br />
                        <small className="ml-2">
                          <mark>
                            <i className="fa fa-info mr-1"></i>
                            {patient.healthRecord?.vitalsAndMetrics?.length > 0
                              ? `El último ingreso se realizó el día ${new Date(
                                  patient.healthRecord?.currentVitals?.date
                                ).toLocaleString('es', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: false,
                                })} hs`
                              : 'El paciente aún no tiene datos de signos vitales registrados.'}
                          </mark>
                        </small>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="height"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-ruler mr-1 text-primary f-18"></i>{' '}
                        Estatura
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="height"
                        name="height"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.height || 0
                        }
                        onChange={handleHeightWeightChange}
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="height" className="ml-2">
                        cm
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.height && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="weight"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-law-alt-3 mr-1 text-primary f-18"></i>{' '}
                        Peso
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="weight"
                        name="weight"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.weight || 0
                        }
                        onChange={handleHeightWeightChange}
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="weight" className="ml-2">
                        kg
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.weight && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="bodyWeight"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-user-alt-1 mr-1 text-primary f-18"></i>{' '}
                        Masa corporal (IMC)
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="bodyWeight"
                        name="bodyWeight"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.bodyWeight || 0
                        }
                        type="number"
                        step="any"
                        disabled={true}
                        ref={register({ required: true })}
                      />
                      <label htmlFor="bodyWeight" className="ml-2">
                        kg/m2
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.bodyWeight && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="bodyFat"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-medical-sign-alt mr-1 text-primary f-18"></i>{' '}
                        Grasa corporal
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="bodyFat"
                        name="bodyFat"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.bodyFat || 0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="bodyFat" className="ml-2">
                        %
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.bodyFat && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="abdominalCircumference"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-circle-ruler-alt mr-1 text-primary f-18"></i>{' '}
                        Circunferencia Abdominal
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="abdominalCircumference"
                        name="abdominalCircumference"
                        defaultValue={
                          patient.healthRecord?.currentVitals
                            ?.abdominalCircumference || 0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="abdominalCircumference" className="ml-2">
                        cm
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.abdominalCircumference && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="temperature"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-thermometer mr-1 text-primary f-18"></i>{' '}
                        Temperatura
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="temperature"
                        name="temperature"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.temperature || 0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="temperature" className="ml-2">
                        °C
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.temperature && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="systolicBloodPressure"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-pulse mr-1 text-primary f-18"></i>{' '}
                        Tensión arterial sistólica
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="systolicBloodPressure"
                        name="systolicBloodPressure"
                        defaultValue={
                          patient.healthRecord?.currentVitals
                            ?.systolicBloodPressure || 0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="systolicBloodPressure" className="ml-2">
                        mmHg
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.systolicBloodPressure && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="diastolicBloodPressure"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-pulse mr-1 text-primary f-18"></i>{' '}
                        Tensión arterial diastólica
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="diastolicBloodPressure"
                        name="diastolicBloodPressure"
                        defaultValue={
                          patient.healthRecord?.currentVitals
                            ?.diastolicBloodPressure || 0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="diastolicBloodPressure" className="ml-2">
                        mmHg
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.diastolicBloodPressure && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="breathingRate"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icon-pulse mr-1 text-primary f-18"></i>{' '}
                        Frecuencia respiratoria
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="breathingRate"
                        name="breathingRate"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.breathingRate ||
                          0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="breathingRate" className="ml-2">
                        rpm
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.breathingRate && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="heartRate"
                        className="f-w-600 col-md-8"
                        style={{ justifyContent: 'left' }}
                      >
                        <i className="icofont icofont-heartbeat mr-1 text-primary f-18"></i>{' '}
                        Frecuencia cardíaca
                      </label>
                      <input
                        className="form-control col-md-2 pr-1"
                        id="heartRate"
                        name="heartRate"
                        defaultValue={
                          patient.healthRecord?.currentVitals?.heartRate || 0
                        }
                        type="number"
                        step="any"
                        ref={register({ required: true })}
                      />
                      <label htmlFor="heartRate" className="ml-2">
                        ppm
                      </label>
                      <span
                        style={{ color: 'red' }}
                        className="col-md-4 offset-md-8"
                      >
                        {errors.heartRate && 'Ingrese un valor.'}
                      </span>
                    </div>
                    {viewMore && (
                      <Fragment>
                        <div className="form-group">
                          <label
                            htmlFor="feetExam"
                            className="f-w-600 col-md-12"
                            style={{ justifyContent: 'left' }}
                          >
                            <i className="icofont icofont-foot-print mr-1 text-primary f-18"></i>{' '}
                            Examen de Pies
                          </label>
                          <textarea
                            className="form-control col-md-12 m-2"
                            id="feetExam"
                            name="feetExam"
                            defaultValue={
                              patient.healthRecord?.currentVitals?.feetExam ||
                              ''
                            }
                            rows="3"
                            ref={register({ required: false })}
                          />
                          <span
                            style={{ color: 'red' }}
                            className="col-md-4 offset-md-8"
                          >
                            {errors.feetExam && 'Ingrese un valor.'}
                          </span>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="backEyeExam"
                            className="f-w-600 col-md-12"
                            style={{ justifyContent: 'left' }}
                          >
                            <i className="icofont icofont-eye-alt mr-1 text-primary f-18"></i>{' '}
                            Examen de Fondo de Ojo
                          </label>
                          <textarea
                            className="form-control col-md-12 m-2"
                            id="backEyeExam"
                            name="backEyeExam"
                            defaultValue={
                              patient.healthRecord?.currentVitals
                                ?.backEyeExam || ''
                            }
                            rows="3"
                            ref={register({ required: false })}
                          />
                          <span
                            style={{ color: 'red' }}
                            className="col-md-4 offset-md-8"
                          >
                            {errors.backEyeExam && 'Ingrese un valor.'}
                          </span>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="others"
                            className="f-w-600 col-md-12"
                            style={{ justifyContent: 'left' }}
                          >
                            <i className="icofont icofont-stretcher mr-1 text-primary f-18"></i>{' '}
                            Otros
                          </label>
                          <textarea
                            className="form-control col-md-12 m-2"
                            id="others"
                            name="others"
                            defaultValue={
                              patient.healthRecord?.currentVitals
                                ?.others || ''
                            }
                            rows="3"
                            ref={register({ required: false })}
                          />
                          <span
                            style={{ color: 'red' }}
                            className="col-md-4 offset-md-8"
                          >
                            {errors.others && 'Ingrese un valor.'}
                          </span>
                        </div>
                      </Fragment>
                    )}
                    <div className="text-center">
                      <a
                        href="#javascript"
                        onClick={() => setViewMore(!viewMore)}
                      >
                        {viewMore ? '...ver menos' : '...ver más'}
                      </a>
                    </div>
                  </div>
                  {isEditing && (
                    <div className="card-footer">
                      <span className="pull-right mb-4">
                        <button
                          className="btn btn-outline-danger"
                          onClick={(e) => handleCancelClick(e)}
                        >
                          {'Cancelar'}
                        </button>
                        <button className="btn btn-primary ml-1">
                          {'Guardar'}
                        </button>
                      </span>
                    </div>
                  )}
                </fieldset>
              </form>
              {!isEditing && (
                <div className="card-footer">
                  <span className="pull-right">
                    <button
                      className="btn btn-primary ml-1"
                      onClick={() => setIsEditing(true)}
                    >
                      <i className="fa fa-pencil mr-2" />
                      {'Editar'}
                    </button>
                  </span>
                </div>
              )}
            </div>
          </Collapse>
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientVitals;
