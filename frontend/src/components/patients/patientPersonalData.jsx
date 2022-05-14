import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import defaultuser from '../../assets/images/user/user.png';
import { patientSavetWatcher } from '../../redux/patients/actions';
import { SUCCEEDED, LOADED, LOADING, FAILED } from '../../redux/statusTypes';
import * as entityService from '../../services/entity.service';
import Loader from '../common/loader';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientPersonalData = ({ history, showAvatar }) => {
  registerLocale('es', es);

  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // dispatch(patientInitialize());
    };
  }, []);

  useEffect(() => {
    if (status === SUCCEEDED && mode === 'new') {
      history.push(
        `${process.env.PUBLIC_URL}/patient/${patient.id}?mode=browse`
      );
    }
  }, [status, mode]);

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();

  const [tagsCatalogue, setTagsCatalogue] = useState([]);
  const [tags, setTags] = useState([]);
  const [healthInsurancePlans, setHealthInsurancePlans] = useState([]);
  const [healthInsuranceCompany, setHealthInsuranceCompany] =
    useState(undefined);
  const [healthInsurancePlan, setHealthInsurancePlan] = useState(undefined);
  const [dateOfBirth, setdobDate] = useState(null);
  const [osFecIngresoDate, setosFecIngresoDate] = useState(null);
  useEffect(() => {
    if (patient && patient.id === id) {
      if (patient.healthInsurances?.length > 0) {
        setHealthInsuranceCompany(
          patient.healthInsurances[0].healthInsuranceCompany.id
        );
        setHealthInsurancePlans(
          patient.healthInsurances[0].healthInsuranceCompany.plans
        );
        setHealthInsurancePlan(patient.healthInsurances[0].plan.code);
        setosFecIngresoDate(
          patient.healthInsurances[0].admissionDate
            ? new Date(patient.healthInsurances[0].admissionDate)
            : null
        );
      }
      if (patient.dateOfBirth) {
        setdobDate(new Date(patient.dateOfBirth));
      }

      setTags(patient.tags);
    }
  }, [id, patient]);

  const [healthInsurancesCompanies, setHealthInsurancesCompanies] = useState();
  useEffect(() => {
    entityService
      .getAll('healthInsurance', loggedUser)
      .then((data) => setHealthInsurancesCompanies(data));

    entityService
      .getAll('tag', loggedUser)
      .then((data) => setTagsCatalogue(data));
  }, []);

  const [imageUrl, setImageUrl] = useState('');

  const handleHealthInsuranceChange = (insuranceId) => {
    if (insuranceId) {
      const healthInsurance = healthInsurancesCompanies.filter(
        (x) => x.id === insuranceId
      );
      if (healthInsurance.length > 0) {
        setHealthInsuranceCompany(healthInsurance[0].id);
        setHealthInsurancePlans(healthInsurance[0].plans);
      }
    } else {
      setHealthInsurancePlans([]);
      setHealthInsuranceCompany(null);
    }
  };

  const handleDoBChange = (date) => {
    setdobDate(date);
    if (!date) {
      setError('dateOfBirth', {});
    } else {
      clearErrors('dateOfBirth');
    }
  };

  const handleOsFecIngresoChange = (date) => {
    setosFecIngresoDate(date);
    if (!date) {
      setError('roles', {});
    } else {
      clearErrors('roles');
    }
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
          const patientData = {
            ...patient,
            ...data,
            dateOfBirth,
            tags: tags.map((x) => x.id),
          };
          if (patientData.healthInsurances?.length > 0) {
            if (!patientData.healthInsurances[0].healthInsuranceCompany) {
              patientData.healthInsurances = [];
            } else {
              patientData.healthInsurances[0].admissionDate = osFecIngresoDate;
            }
          }
          dispatch(patientSavetWatcher(patientData));
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
        if (mode === 'new') {
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
    <Fragment>
      {status === LOADED ||
      status === SUCCEEDED ||
      status === FAILED ||
      (mode === 'new' && status !== LOADING) ? (
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputName"
                  >
                    {'Nombre'}
                  </label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      id="inputName"
                      type="text"
                      name="firstName"
                      defaultValue={patient.firstName}
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
                      defaultValue={patient.lastName}
                      ref={register({ required: true })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.lastName && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputDocType"
                  >
                    {'Tipo de Documento'}
                  </label>
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      id="inputDocType"
                      defaultValue={patient.nationalIdType}
                      name="nationalIdType"
                      ref={register({ required: true })}
                    >
                      <option value="DNI">{'DNI'}</option>
                      <option value="LE">{'LE'}</option>
                      <option value="OTRO">{'Otro'}</option>
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
                      defaultValue={patient.nationalId}
                      ref={register({ required: true })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.nationalId && 'Ingrese un valor.'}
                    </span>
                  </div>
                </div>
                <fieldset className="form-group">
                  <div className="row">
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="inputSex"
                    >
                      {'Sexo Biológico'}
                    </label>
                    <div className="col-md-3">
                      <div className="radio radio-primary ml-2">
                        <input
                          id="radio11"
                          type="radio"
                          name="biologicalSex"
                          value="m"
                          defaultChecked={patient.biologicalSex === 'm'}
                          ref={register({ required: true })}
                        />
                        <label htmlFor="radio11">{'Masculino'}</label>
                      </div>
                      <div className="radio radio-primary ml-2">
                        <input
                          id="radio22"
                          type="radio"
                          name="biologicalSex"
                          value="f"
                          defaultChecked={patient.biologicalSex === 'f'}
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
                        defaultValue={patient.gender}
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
                      defaultValue={patient.phoneNumber}
                      ref={register({ required: false })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.phoneNumber && 'Ingrese un valor.'}
                    </span>
                  </div>
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputEmail3"
                  >
                    {'Email'}
                  </label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      id="inputEmail3"
                      type="email"
                      name="email"
                      defaultValue={patient.email}
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
                      defaultValue={patient.nationality}
                      ref={register({ required: false })}
                    />
                    <span style={{ color: 'red' }}>
                      {errors.nationality && 'Ingrese un valor.'}
                    </span>
                  </div>
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputFecNac"
                  >
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
                        selected={dateOfBirth}
                        locale="es"
                        dateFormat="dd/MM/yyyy"
                        onChange={handleDoBChange}
                        disabled={mode === 'browse'}
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputCity"
                  >
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputState"
                  >
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputCountry"
                  >
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="healthInsuranceCompany"
                  >
                    {'Obra Social'}
                  </label>
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      name="healthInsurances.0.healthInsuranceCompany"
                      id="healthInsuranceCompany"
                      value={healthInsuranceCompany}
                      onChange={(e) =>
                        handleHealthInsuranceChange(e.target.value)
                      }
                      ref={register({ required: false })}
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
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputOSPlan"
                  >
                    {'Plan'}
                  </label>
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      name="healthInsurances.0.plan.code"
                      id="healthInsurancePlan"
                      value={healthInsurancePlan}
                      onChange={(e) => setHealthInsurancePlan(e.target.value)}
                      ref={register({ required: false })}
                    >
                      {healthInsurancePlans &&
                        healthInsurancePlans.map((plan, i) => (
                          <option key={plan.code} value={plan.code}>
                            {plan.code}
                          </option>
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
                  >{`Nro. de Credencial`}</label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      name="healthInsurances.0.cardNumber"
                      id="healthInsuranceId"
                      type="number"
                      defaultValue={
                        patient?.healthInsurances &&
                        patient?.healthInsurances.length > 0
                          ? patient?.healthInsurances[0].cardNumber
                          : undefined
                      }
                      ref={register({ required: false })}
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
                        disabled={mode === 'browse'}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
                <h6>{'Persona de Contacto'}</h6>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputNameCP"
                  >
                    {'Nombre'}
                  </label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      id="inputNameCP"
                      type="text"
                      name="contactPerson.firstName"
                      defaultValue={patient.contactPerson?.firstName}
                      ref={register({ required: false })}
                    />
                  </div>
                  <label
                    className="col-md-2 col-form-label"
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
                      defaultValue={patient.contactPerson?.lastName}
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputTelCP"
                  >
                    {'Teléfono'}
                  </label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      id="inputTelCP"
                      type="tel"
                      name="contactPerson.phoneNumber"
                      defaultValue={patient.contactPerson?.phoneNumber}
                      ref={register({ required: false })}
                    />
                  </div>
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputDirCP"
                  >
                    {'Dirección'}
                  </label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      id="inputDirCP"
                      type="text"
                      name="contactPerson.address"
                      defaultValue={patient.contactPerson?.address}
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="inputCpVin"
                  >
                    {'Vínculo'}
                  </label>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      id="inputCpVin"
                      type="text"
                      name="contactPerson.bond"
                      defaultValue={patient.contactPerson?.bond}
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
                <h6>{'Información adicional'}</h6>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="bloodType"
                  >
                    {'Grupo Sanguíneo'}
                  </label>
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      id="bloodType"
                      type="text"
                      name="bloodType"
                      defaultValue={patient.bloodType}
                      ref={register({ required: false })}
                    >
                      <option value="A">{'A'}</option>
                      <option value="B">{'B'}</option>
                      <option value="AB">{'AB'}</option>
                      <option value="0">{'0'}</option>
                    </select>
                  </div>
                  <label className="col-md-2 col-form-label" htmlFor="rhFactor">
                    {'Factor RH'}
                  </label>
                  <div className="col-md-2">
                    <select
                      className="form-control"
                      id="rhFactor"
                      type="text"
                      name="rhFactor"
                      defaultValue={patient.rhFactor}
                      ref={register({ required: false })}
                    >
                      <option value="+">{'+'}</option>
                      <option value="-">{'-'}</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="tags">
                    {'Tags'}
                  </label>
                  <div className="col-md-12">
                    <Typeahead
                      id="tags"
                      multiple
                      labelKey="name"
                      filterBy={['name']}
                      options={tagsCatalogue}
                      selected={tags}
                      disabled={mode === 'browse'}
                      onChange={(selected) => setTags(selected)}
                    />
                  </div>
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
                      defaultValue={patient.bio}
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                {mode !== 'browse' && (
                  <div className="card-footer m-b-40">
                    <span className="pull-right">
                      {mode === 'new' && (
                        <button
                          className="btn btn-outline-danger"
                          onClick={handleCancelClick}
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
          {mode === 'browse' && (
            <div className="card-footer m-b-40">
              <span className="pull-right">
                <Link
                  className="btn btn-primary"
                  to={`${process.env.PUBLIC_URL}/patient/${patient.id}?mode=edit`}
                >
                  {' '}
                  <i className="fa fa-pencil mr-2" />
                  Editar
                </Link>
              </span>
            </div>
          )}
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientPersonalData;
