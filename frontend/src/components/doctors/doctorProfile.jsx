import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import SweetAlert from 'sweetalert2';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { getDownloadURL } from 'firebase/storage';

import defaultuser from '../../assets/images/user/user.png';
import * as userService from '../../services/user.service';
import Breadcrumb from '../common/breadcrumb';
import {
  doctorGetByIdWatcher,
  doctorSavetWatcher,
} from '../../redux/doctors/actions';
import { LOADED, LOADING, SUCCEEDED, FAILED } from '../../redux/statusTypes';
import Loader from '../common/loader';
import { firebase_app } from '../../data/config';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DoctorProfile = (props) => {
  registerLocale('es', es);

  const { id } = useParams();

  const query = useQuery();
  const mode = query.get('mode');

  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { doctor, status } = useSelector((store) => store.Doctor);
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();

  const [avatarFile, setAvatarFile] = useState(null);
  const [dateOfBirth, setdobDate] = useState(null);
  const [specialities, setSpecialities] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll(loggedUser).then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    if (doctor.dateOfBirth) {
      setdobDate(new Date(doctor.dateOfBirth));
    }
    if (doctor.specialities) {
      setSpecialities(doctor.specialities);
    }
  }, [doctor]);

  useEffect(() => {
    if (id !== '0') dispatch(doctorGetByIdWatcher(id));
  }, [dispatch, id, mode]);

  useEffect(() => {
    if (status === SUCCEEDED) {
      props.history.push(
        `${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=browse`
      );
    }
  }, [status]);

  const handleSubmitForm = (data) => {
    if (!specialities || specialities.length === 0) {
      setError('specialities', {});
      return;
    }
    if (!dateOfBirth) {
      setError('dateOfBirth', {});
      return;
    }
    if (data && data.licenses?.length === 0) {
      setError('dateOfBirth', {});
      return;
    }
    if (data !== '') {
      const title = doctor.id
        ? `Se actualizarán los datos del doctor/a ${doctor.fullName}.`
        : `Se dará de alta al doctor/a ${data.firstName} ${data.lastName}.`;
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
          let avatarData = { ...doctor.avatar };
          if (avatarFile) {
            const fileName = new Date().getTime() + '-' + avatarFile.name;
            const fileRef = await firebase_app
              .storage()
              .ref(
                `doctores/${doctor.firstName} ${doctor.lastName}/avatar/${fileName}`
              );
            const avatarUrl = await fileRef
              .put(avatarFile.file)
              .then((snapshot) => {
                return getDownloadURL(snapshot.ref).then((url) => {
                  return url;
                });
              });
            avatarData = {
              name: avatarFile?.name,
              fileType: avatarFile?.fileType,
              downloadURL: avatarUrl,
            };
          }

          const licenses = data.licenses.filter((x) => x.licenseType !== '');
          const doctorData = {
            ...doctor,
            ...data,
            avatar: avatarData.name ? avatarData : null,
            dateOfBirth: dateOfBirth,
            licenses: licenses,
            specialities: specialities,
            user: data.user || null,
          };

          dispatch(doctorSavetWatcher(doctorData));
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleChangeImageUrl = (event) => {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const file = {
      file: event.target.files[0],
      name: event.target.files[0].name,
      fileType: event.target.files[0].type,
    };
    setAvatarFile(file);
  };

  const handleSpecialitiesChange = (specialities) => {
    if (specialities.length <= 0) {
      setError('specialities', {});
    } else {
      clearErrors('specialities');
    }
    setSpecialities(specialities);
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
        if (!doctor.id) {
          props.history.push(`${process.env.PUBLIC_URL}/doctor`);
        } else {
          props.history.push(
            `${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=browse`
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
      {status === LOADED ||
      status === SUCCEEDED ||
      status === FAILED ||
      (mode === 'new' && status !== LOADING) ? (
        <Fragment>
          <Breadcrumb
            parent={{ title: 'Doctores', url: 'doctor' }}
            title={id === '0' ? 'Nuevo Doctor' : `${doctor?.fullName}`}
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
                            <h5>{'Datos generales del Doctor'}</h5>
                            <span>{'Información básica y de contacto.'}</span>
                          </div>
                          <div className="col-md-6">
                            {mode === 'browse' ? (
                              <div className="text-right">
                                <Link
                                  className="btn btn-primary"
                                  to={`${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=edit`}
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
                          <div className="form-group row contact-profile m-b-50">
                            <div className="col-md-4 offset-md-4 text-center">
                              <img
                                className="rounded-circle img-100"
                                src={
                                  (avatarFile &&
                                    window.URL.createObjectURL(
                                      avatarFile.file
                                    )) ||
                                  doctor.avatar?.downloadURL ||
                                  defaultuser
                                }
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
                                defaultValue={doctor.firstName}
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
                                defaultValue={doctor.lastName}
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
                                defaultValue={doctor.nationalIdType}
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
                                defaultValue={doctor.nationalId}
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
                                      doctor.biologicalSex === 'm'
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
                                      doctor.biologicalSex === 'f'
                                    }
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
                                  defaultValue={doctor.gender}
                                  name="gender"
                                  ref={register({ required: true })}
                                >
                                  <option value="cisgenero">
                                    {'Cisgénero'}
                                  </option>
                                  <option value="transgenero">
                                    {'Transgénero'}
                                  </option>
                                  <option value="no-binario">
                                    {'No-binario'}
                                  </option>
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
                                defaultValue={doctor.phoneNumber}
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
                                defaultValue={doctor.email || null}
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
                                defaultValue={doctor.nationality}
                                ref={register({ required: true })}
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
                                defaultValue={doctor.address?.street}
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
                                defaultValue={doctor.address?.city}
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
                                defaultValue={doctor.address?.state}
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
                                defaultValue={doctor.address?.country}
                                type="text"
                                ref={register({ required: false })}
                              />
                            </div>
                          </div>
                          <hr className="mt-4 mb-4" />
                          <div className="form-group row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputRoles"
                            >
                              {'Especialidades'}
                            </label>
                            <div className="col-md-3">
                              <Typeahead
                                id="inputSpecialities"
                                multiple
                                options={[
                                  'Cardiología',
                                  'Dermatología',
                                  'Clínica Médica',
                                  'Urología',
                                  'Endocrinología',
                                  'Gastroenterología',
                                  'Medicina del deporte',
                                  'Nefrología',
                                  'Neurocirugía',
                                  'Neurología',
                                  'Otorrinolaringología',
                                  'Pediatría',
                                  'Reumatología',
                                  'Infectología',
                                  'Cirugía General',
                                  'Alergia e Inmunología',
                                  'Neumonología',
                                  'Psiquiatría',
                                  'Ginecología',
                                  'Obstreticia',
                                  'Esp. en Diagnóstico por Imágenes',
                                  'Nutrición',
                                  'Oftalmología',
                                  'Traumatología',
                                  'Hematología',
                                ]}
                                selected={specialities}
                                disabled={mode === 'browse'}
                                onChange={handleSpecialitiesChange}
                              />
                              <span style={{ color: 'red' }}>
                                {errors.specialities &&
                                  'Ingrese al menos un valor.'}
                              </span>
                            </div>
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputStatus"
                            >
                              {'Estado'}
                            </label>
                            <div className="col-md-3">
                              <select
                                className="form-control"
                                name="status"
                                id="inputStatus"
                                defaultValue={doctor.status}
                                ref={register({ required: true })}
                              >
                                <option value="active">{'Activo'}</option>
                                <option value="inactive">{'Inactivo'}</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputlicenseType"
                            >
                              {'Matrícula 1'}
                            </label>
                            <div className="col-md-3">
                              <select
                                className="form-control"
                                name="licenses.0.licenseType"
                                id="inputlicenseType"
                                defaultValue={
                                  doctor?.licenses &&
                                  doctor?.licenses.length > 0
                                    ? doctor?.licenses[0].licenseType[0]
                                    : undefined
                                }
                                ref={register({ required: true })}
                              >
                                <option value="">No Posee</option>
                                <option value="mp">Matrícula Provincial</option>
                                <option value="mn">Matrícula Nacional</option>
                              </select>
                              <span style={{ color: 'red' }}>
                                {errors.licenses &&
                                  'Ingrese al menos una matrícula.'}
                              </span>
                            </div>
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputLecense1"
                            >
                              {'Número'}
                            </label>
                            <div className="col-md-3">
                              <input
                                className="form-control"
                                id="inputLecense1"
                                name="licenses.0.licenseId"
                                defaultValue={
                                  doctor?.licenses &&
                                  doctor?.licenses.length > 0
                                    ? doctor?.licenses[0].licenseId
                                    : undefined
                                }
                                type="number"
                                ref={register({ required: true })}
                              />
                              <span style={{ color: 'red' }}>
                                {errors.licenses &&
                                  'Ingrese al menos una matrícula.'}
                              </span>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputlicenseType2"
                            >
                              {'Matrícula 2'}
                            </label>
                            <div className="col-md-3">
                              <select
                                className="form-control"
                                name="licenses.1.licenseType"
                                id="inputlicenseType2"
                                defaultValue={
                                  doctor?.licenses &&
                                  doctor?.licenses.length > 1
                                    ? doctor?.licenses[1].licenseType[0]
                                    : undefined
                                }
                                ref={register({ required: false })}
                              >
                                <option value="">No Posee</option>
                                <option value="mp">Matrícula Provincial</option>
                                <option value="mn">Matrícula Nacional</option>
                              </select>
                            </div>
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputLecense2"
                            >
                              {'Número'}
                            </label>
                            <div className="col-md-3">
                              <input
                                className="form-control"
                                id="inputLecense2"
                                name="licenses.1.licenseId"
                                defaultValue={
                                  doctor?.licenses &&
                                  doctor?.licenses.length > 1
                                    ? doctor?.licenses[1].licenseId
                                    : undefined
                                }
                                type="number"
                                ref={register({ required: false })}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="inputUser"
                            >
                              {'Usuario Asignado'}
                            </label>
                            <div className="col-md-3">
                              <select
                                className="form-control"
                                name="user"
                                id="inputUser"
                                value={doctor.user}
                                ref={register({ required: false })}
                              >
                                <option value="">No Posee</option>
                                {users &&
                                  users.map((user, index) => (
                                    <option key={index} value={user.id}>
                                      {user.username}
                                    </option>
                                  ))}
                              </select>
                            </div>
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
                                defaultValue={doctor.room}
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

export default DoctorProfile;
