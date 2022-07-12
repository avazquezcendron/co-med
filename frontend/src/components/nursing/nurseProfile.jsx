import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import * as entityService from '../../services/entity.service';
import Breadcrumb from '../common/breadcrumb';
import Loader from '../common/loader';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const NurseProfile = (props) => {
  registerLocale('es', es);

  const { id } = useParams();

  const query = useQuery();
  const mode = query.get('mode');

  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();

  const [nurse, setNurse] = useState({});
  const [dateOfBirth, setdobDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (nurse.dateOfBirth) {
      setdobDate(new Date(nurse.dateOfBirth));
    }
  }, [nurse]);

  useEffect(() => {
    if (id !== '0') {
      setIsLoading(true);
      entityService.getById('nurse', id, loggedUser).then((data) => {
        setNurse(data);
        setIsLoading(false);
      });
    }
  }, [id, mode]);

  const handleSubmitForm = (data) => {
    if (!dateOfBirth) {
      setError('dateOfBirth', {});
      return;
    }
    if (data !== '') {
      const title = nurse.id
        ? `Se actualizarán los datos de la enfermera/o ${nurse.fullName}.`
        : `Se dará de alta al enfermera/o ${data.firstName} ${data.lastName}.`;
      SweetAlert.fire({
        title: 'Atención',
        text: title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.value) {
          const nurseData = {
            ...nurse,
            ...data,
            dateOfBirth: dateOfBirth,
          };

          if (nurseData.id) {
            entityService
              .update(
                'nurse',
                nurseData,
                loggedUser
              )
              .then((nurseUpdated) => {
                props.history.push(
                  `${process.env.PUBLIC_URL}/nursing/nurse/${nurseUpdated.id}?mode=browse`
                );
              });
          } else {
            entityService
              .save(
                'nurse',
                nurseData,
                loggedUser
              )
              .then((nurseCreated) => {
                props.history.push(
                  `${process.env.PUBLIC_URL}/nursing/nurse/${nurseCreated.id}?mode=browse`
                );
              });
          }
        }
      });
    } else {
      errors.showMessages();
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
        if (!nurse.id) {
          props.history.push(`${process.env.PUBLIC_URL}/nursing/nurse`);
        } else {
          props.history.push(
            `${process.env.PUBLIC_URL}/nursing/nurse/${nurse.id}?mode=browse`
          );
        }
      }
    });
  };

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <Fragment>
      {!isLoading ? (
        <Fragment>
          <Breadcrumb
            parent={{ title: 'Enfermeras', url: 'nursing/nurse' }}
            title={id === '0' ? 'Nueva Enfermera' : `${nurse?.fullName}`}
          />
          <div className="container-fluid">
            <div className="edit-profile">
              <div className="row">
                <div className="col-md-12">
                  <div className="card ">
                    <form
                      className="theme-form mega-form"
                      onSubmit={handleSubmit(handleSubmitForm)}
                      onKeyDown={(e) => checkKeyDown(e)}
                    >
                      <div className="card-header">
                        <div className="row">
                          <div className="col-md-6">
                            <h5>{'Datos generales de la enfermera/o'}</h5>
                            <span>{'Información básica y de contacto.'}</span>
                          </div>
                          <div className="col-md-6">
                            {mode === 'browse' ? (
                              <div className="text-right">
                                <Link
                                  className="btn btn-primary"
                                  to={`${process.env.PUBLIC_URL}/nursing/nurse/${nurse.id}?mode=edit`}
                                >
                                  {' '}
                                  <i className="fa fa-pencil mr-2" />
                                  Editar
                                </Link>
                              </div>
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      </div>
                      <fieldset disabled={mode === 'browse'}>
                        <div className="card-body">
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
                                name="firstName"
                                defaultValue={nurse.firstName}
                                type="text"
                                ref={register({ required: true })}
                              />
                              <span style={{ color: 'red' }}>
                                {errors.firstName && 'Ingrese un valor.'}
                              </span>
                            </div>
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputLastnames"
                            >
                              {'Apellido'}
                            </label>
                            <div className="col-md-3">
                              <input
                                className="form-control"
                                id="inputLastnames"
                                name="lastName"
                                defaultValue={nurse.lastName}
                                type="text"
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
                                defaultValue={nurse.nationalIdType}
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
                                defaultValue={nurse.nationalId}
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
                                    defaultChecked={
                                      nurse.biologicalSex === 'm'
                                    }
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
                                    defaultChecked={
                                      nurse.biologicalSex === 'f'
                                    }
                                    ref={register({ required: true })}
                                  />
                                  <label htmlFor="radio22">{'Femenino'}</label>
                                </div>
                                <span style={{ color: 'red' }}>
                                  {errors.biologicalSex && 'Ingrese un valor.'}
                                </span>
                              </div>
                            </div>
                          </fieldset>
                          <hr className="mt-4 mb-4" />
                          <h6>{'Datos de Contacto'}</h6>
                          <div className="form-group row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputTel"
                            >
                              {'Teléfono'}
                            </label>
                            <div className="col-md-3">
                              <input
                                className="form-control"
                                id="inputTel"
                                name="phoneNumber"
                                defaultValue={nurse.phoneNumber}
                                type="tel"
                                ref={register({ required: false })}
                              />
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
                                name="email"
                                defaultValue={nurse.email || null}
                                type="email"
                                ref={register({ required: false })}
                              />
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
                                defaultValue={nurse.nationality}
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
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputDir"
                            >
                              {'Dirección'}
                            </label>
                            <div className="col-md-3">
                              <input
                                className="form-control"
                                id="inputDir"
                                defaultValue={nurse.address?.street}
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
                                defaultValue={nurse.address?.city}
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
                                defaultValue={nurse.address?.state}
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
                                defaultValue={nurse.address?.country}
                                type="text"
                                ref={register({ required: false })}
                              />
                            </div>
                          </div>
                          <hr className="mt-4 mb-4" />
                         
                          <div className="form-group row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="room"
                            >
                              {'Consultorio'}
                            </label>
                            <div className="col-md-3">
                              <input
                                className="form-control"
                                id="room"
                                name="room"
                                defaultValue={nurse.room}
                                type="text"
                                ref={register({ required: false })}
                              />
                            </div>
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
                              <button className="btn btn-primary ml-1">
                                {'Guardar'}
                              </button>
                            </span>
                          ) : (
                            ''
                          )}
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
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

export default NurseProfile;
