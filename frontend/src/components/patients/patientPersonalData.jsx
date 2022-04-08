import React, { Fragment, useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';

import defaultuser from '../../assets/images/user/user.png';
import { patientSavetWatcher } from '../../redux/patients/actions';
import { SUCCEEDED } from '../../redux/statusTypes';
import * as healthInsuranceService from '../../services/healthInsurance.service';

const PatientPersonalData = ({ mode, history, showAvatar }) => {
  registerLocale('es', es);

  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === SUCCEEDED) {
      history.push(
        `${process.env.PUBLIC_URL}/patient/${patient.id}?mode=browse`
      );
    }
  }, [status]);

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();

  const [healthInsurancesCompanies, setHealthInsurancesCompanies] = useState();
  useEffect(() => {
    healthInsuranceService
      .getAll(loggedUser)
      .then((res) => setHealthInsurancesCompanies(res.data));
  }, []);
  const [healthInsurancePlans, setHealthInsurancePlans] = useState([]);

  const [dobtDate, setdobDate] = useState(null);
  const [osFecIngresoDate, setosFecIngresoDate] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleHealthInsuranceChange = (insuranceId) => {
    if (insuranceId) {
      const healthInsurance = healthInsurancesCompanies.filter(
        (x) => x.id === insuranceId
      );
      if (healthInsurance.length > 0)
        setHealthInsurancePlans(healthInsurance[0].plans);
    } else {
      setHealthInsurancePlans([]);
    }
  };

  const handleDoBChange = (date) => {
    setdobDate(date);
  };

  const handleOsFecIngresoChange = (date) => {
    setosFecIngresoDate(date);
  };

  const handleChangeImageUrl = (event) => {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setImageUrl(reader.result);
    };
  };

  const handleSubmitForm = (data) => {
    if (data !== '') {
      const title = patient.id
        ? `Se actualizarán los datos del paciente ${data.firstName} ${data.lastName}.`
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
            dispatch(patientSavetWatcher(data));
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    SweetAlert.fire({
      title: 'Atención',
      text: `Se perderán los datos no guardados.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        if (!patient.id) {
          history.push(`${process.env.PUBLIC_URL}/patient`);
        } else {
          history.push(
            `${process.env.PUBLIC_URL}/patient/${patient.id}?mode=browse`
          );
        }
      }
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5>{'Datos generales del paciente'}</h5>
        <span>{'Información básica y de contacto.'}</span>
      </div>
      <div className="card-body">
        <form
          className="theme-form mega-form"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <fieldset disabled={mode === 'browse'}>
            {showAvatar ? (
              <div className="form-group row contact-profile m-b-50">
                <div className="col-md-4 offset-md-4 text-center">
                  <img
                    className="rounded-circle img-100"
                    src={imageUrl || defaultuser}
                    alt=""
                  />
                  <div className="icon-wrapper">
                    <i className="icofont icofont-pencil-alt-5">
                      <input
                        className="upload"
                        name="avatar"
                        type="file"
                        onChange={(e) => handleChangeImageUrl(e)}
                      />
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            <h6>{'Infromación Personal'}</h6>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputName">
                {'Nombre'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  name="firstName"
                  ref={register({ required: true })}
                />
                <span style={{ color: 'red' }}>
                  {errors.firstName && 'Ingrese un valor.'}
                </span>
              </div>
              <label
                className="col-md-2 col-form-label"
                htmlFor="inputLastname"
              >
                {'Apellido'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputLastname"
                  type="text"
                  name="lastName"
                  ref={register({ required: true })}
                />
                <span style={{ color: 'red' }}>
                  {errors.lastName && 'Ingrese un valor.'}
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputDocType">
                {'Tipo de Documento'}
              </label>
              <div className="col-md-3">
                <select
                  className="form-control"
                  id="inputDocType"
                  defaultValue="DNI"
                  name="nationalIdType"
                  ref={register({ required: true })}
                >
                  <option>{'DNI'}</option>
                  <option>{'LE'}</option>
                  <option>{'Otro'}</option>
                </select>
                <span style={{ color: 'red' }}>
                  {errors.nationalIdType && 'Ingrese un valor.'}
                </span>
              </div>
              <label
                className="col-md-2 col-form-label"
                htmlFor="inputDocNumber"
              >
                {'Nro. de Documento'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputDocNumber"
                  type="number"
                  name="nationalId"
                  ref={register({ required: true })}
                />
                <span style={{ color: 'red' }}>
                  {errors.nationalId && 'Ingrese un valor.'}
                </span>
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <label className="col-md-2 col-form-label" htmlFor="inputSex">
                  {'Sexo Biológico'}
                </label>
                <div className="col-md-3">
                  <div className="radio radio-primary ml-2">
                    <input
                      id="radio11"
                      type="radio"
                      value="m"
                      name="biologicalSex"
                      ref={register({ required: true })}
                    />
                    <label htmlFor="radio11">{'Masculino'}</label>
                  </div>
                  <div className="radio radio-primary ml-2">
                    <input
                      id="radio22"
                      type="radio"
                      value="f"
                      name="biologicalSex"
                      ref={register({ required: true })}
                    />
                    <label htmlFor="radio22">{'Femenino'}</label>
                  </div>
                  <span style={{ color: 'red' }}>
                    {errors.biologicalSex && 'Ingrese un valor.'}
                  </span>
                </div>

                <label
                  className="col-md-2 col-form-label"
                  htmlFor="inputPerceptGender"
                >
                  {'Género Percibido'}
                </label>
                <div className="col-md-3">
                  <select
                    className="form-control"
                    id="inputPerceptGender"
                    defaultValue="cisgenero"
                    name="gender"
                    ref={register({ required: true })}
                  >
                    <option value="cisgenero">{'Cisgénero'}</option>
                    <option value="transgenero">{'Transgénero'}</option>
                    <option value="no-binario">{'No-binario'}</option>
                  </select>
                <span style={{ color: 'red' }}>
                  {errors.gender && 'Ingrese un valor.'}
                </span>
                </div>
              </div>
            </fieldset>
            <hr className="mt-4 mb-4" />
            <h6>{'Datos de Contacto'}</h6>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputTel">
                {'Teléfono'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputTel"
                  type="tel"
                  name="phoneNumber"
                  ref={register({ required: false })}
                />
                <span style={{ color: 'red' }}>
                  {errors.phoneNumber && 'Ingrese un valor.'}
                </span>
              </div>
              <label className="col-md-2 col-form-label" htmlFor="inputEmail3">
                {'Email'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputEmail3"
                  type="email"
                  name="email"
                  ref={register({ required: false })}
                />
                <span style={{ color: 'red' }}>
                  {errors.email && 'Ingrese un valor.'}
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-md-2 col-form-label"
                htmlFor="inputNationality"
              >
                {'Nacionalidad'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputNationality"
                  type="text"
                  name="nationality"
                  ref={register({ required: false })}
                />
                <span style={{ color: 'red' }}>
                  {errors.nationality && 'Ingrese un valor.'}
                </span>
              </div>
              <label className="col-md-2 col-form-label" htmlFor="inputFecNac">
                {'Fec. Nacimiento'}
              </label>
              <div className="col-md-3">
                <div
                  className="datepicker-here"
                  data-language="es"
                  id="inputFecNac"
                >
                  <DatePicker
                    className="form-control digits"
                    placeholderText="dd/MM/yyyy"
                    selected={dobtDate}
                    locale="es"
                    dateFormat="dd/MM/yyyy"
                    onChange={handleDoBChange}
                  />
                  <span style={{ color: 'red' }}>
                    {errors.dateOfBirth && 'Ingrese un valor.'}
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputDir">
                {'Dirección'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputDir"
                  defaultValue={patient.address?.street}
                  name="address.street"
                  ref={register({ required: false })}
                  type="text"
                />
              </div>
              <label className="col-md-2 col-form-label" htmlFor="inputCity">
                {'Ciudad'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputCity"
                  name="address.city"
                  defaultValue={patient.address?.city}
                  type="text"
                  ref={register({ required: false })}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputState">
                {'Provincia'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputState"
                  name="address.state"
                  defaultValue={patient.address?.state}
                  type="text"
                  ref={register({ required: false })}
                />
              </div>
              <label className="col-md-2 col-form-label" htmlFor="inputCountry">
                {'País'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputCountry"
                  name="address.country"
                  defaultValue={patient.address?.country}
                  type="text"
                  ref={register({ required: false })}
                />
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <h6>{'Cobertura Médica'}</h6>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputOS">
                {'Obra Social'}
              </label>
              <div className="col-md-3">
                <select
                  className="form-control"
                  name="healthInsurances.0.healthInsuranceCompany.id"
                  id="healthInsurance"
                  value={patient?.healthInsurances && patient?.healthInsurances.length > 0 ? patient?.healthInsurances[0].healthInsurancesCompany?.id : undefined}
                  onChange={(e) => handleHealthInsuranceChange(e.target.value)}
                  ref={register({ required: true })}
                >
                  <option value="">No Posee</option>
                  {healthInsurancesCompanies &&
                    healthInsurancesCompanies.map((company, i) => (
                      <option key={company.id} value={company.id}>
                        {company.description}
                      </option>
                    ))}
                </select>
                <span style={{ color: 'red' }}>
                  {errors.healthInsurances && 'Ingrese un valor.'}
                </span>
              </div>
              <label className="col-md-2 col-form-label" htmlFor="inputOSPlan">
                {'Plan'}
              </label>
              <div className="col-md-3">
                <select
                  className="form-control"
                  name="healthInsurances.0.plan.code"
                  id="healthInsurancePlan"
                  defaultValue="-"
                  ref={register({ required: true })}
                >
                  {healthInsurancePlans &&
                    healthInsurancePlans.map((plan, i) => (
                      <option key={plan.code}>{plan.code}</option>
                    ))}
                </select>
                <span style={{ color: 'red' }}>
                  {errors.healthInsurances && 'Ingrese un valor.'}
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-md-2 col-form-label"
                htmlFor="inputOSNro"
              >{`Nro. de Carnet`}</label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  name="healthInsurances.0.cardNumber"
                  id="healthInsuranceId"
                  type="number"
                  ref={register({ required: true })}
                />
                <span style={{ color: 'red' }}>
                  {errors.healthInsurances && 'Ingrese un valor.'}
                </span>
              </div>
              <label
                className="col-md-2 col-form-label"
                htmlFor="inputOSFecIngreso"
              >
                {'Fec. Ingreso'}
              </label>
              <div className="col-md-3">
                <div
                  className="datepicker-here"
                  data-language="es"
                  id="inputOSFecIngreso"
                >
                  <DatePicker
                    className="form-control digits"
                    placeholderText="dd/MM/yyyy"
                    selected={osFecIngresoDate}
                    locale="es"
                    dateFormat="dd/MM/yyyy"
                    onChange={handleOsFecIngresoChange}
                    name="healthInsurances.0.admissionDate"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <h6>{'Persona de Contacto'}</h6>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputNameCP">
                {'Nombre'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputNameCP"
                  type="text"
                  name="contactPerson.firstName"
                  ref={register({ required: false })}
                />
              </div>
              <label
                className="col-md-1 col-form-label"
                htmlFor="inputLastnamesCP"
              >
                {'Apellido'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputLastnamesCP"
                  type="text"
                  name="contactPerson.lastName"
                  ref={register({ required: false })}
                />
              </div>
              <label className="col-md-1 col-form-label" htmlFor="inputCpVin">
                {'Vínculo'}
              </label>
              <div className="col-md-2">
                <input
                  className="form-control"
                  id="inputCpVin"
                  type="text"
                  name="contactPerson.bond"
                  ref={register({ required: false })}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputTelCP">
                {'Teléfono'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputTelCP"
                  type="tel"
                  name="contactPerson.phoneNumber"
                  ref={register({ required: false })}
                />
              </div>
              <label className="col-md-2 col-form-label" htmlFor="inputDirCP">
                {'Dirección'}
              </label>
              <div className="col-md-3">
                <input
                  className="form-control"
                  id="inputDirCP"
                  type="text"
                  name="contactPerson.address"
                  ref={register({ required: false })}
                />
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <h6>{'Información adicional'}</h6>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" htmlFor="inputBio">
                {'Biografía'}
              </label>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  id="inputBio"
                  rows="5"
                  spellCheck="false"
                  name="bio"
                  ref={register({ required: false })}
                />
              </div>
            </div>
            <div className="card-footer m-b-40">
              {mode !== 'browse' ? (
                <span className="pull-right">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleCancelClick}
                  >
                    {'Cancelar'}
                  </button>
                  <button className="btn btn-primary ml-1">{'Guardar'}</button>
                </span>
              ) : (
                ''
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PatientPersonalData;
