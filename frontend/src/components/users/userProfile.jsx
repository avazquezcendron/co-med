import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Typeahead } from 'react-bootstrap-typeahead';
import SweetAlert from 'sweetalert2';

import defaultuser from '../../assets/images/user/user.png';
import * as userService from '../../services/user.service';
import Breadcrumb from '../common/breadcrumb';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UserProfile = (props) => {
  const { id } = useParams();

  const query = useQuery();
  const mode = query.get('mode');

  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();
  const [imageUrl, setImageUrl] = useState('');

  const [user, setUser] = useState({});

  useEffect(() => {
    if (id !== '0')
      userService.getById(id, loggedUser).then((user) => setUser(user));
  }, [mode]);

  const handleSubmitForm = (data) => {
    if (!user.roles || user.roles.length == 0) {
      setError('roles', {});
      return;
    }
    if (data !== '') {
      const title = user.id ? `Se actualizarán los datos del usuario ${user.username}.` : `Se dará de alta al usuario ${data.username}.`;
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
          if (!user.id) {
            userService.save({ ...data, avatarUrl: imageUrl, roles: user.roles }, loggedUser)
              .then((userSaved) =>
                props.history.push(
                  `${process.env.PUBLIC_URL}/user/${userSaved.id}?mode=browse`
                )
              );
          } else {
            userService.update({ ...user, ...data, avatarUrl: imageUrl }, loggedUser)
              .then((userUpdated) =>
                props.history.push(
                  `${process.env.PUBLIC_URL}/user/${userUpdated.id}?mode=browse`
                )
              );
          }
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
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setImageUrl(reader.result);
    };
  };

  const handleRolesChange = (roles) => {
    if (roles.length <= 0) {
      setError('roles', {});
    } else {
      clearErrors('roles');
    }
    setUser({ ...user, roles: roles });
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
        if (!user.id) {
          props.history.push(`${process.env.PUBLIC_URL}/user`);  
        } else {
          props.history.push(`${process.env.PUBLIC_URL}/user/${user.id}?mode=browse`);  
        }
        
      }
    });
  };

  const labelKeyRenderRoles = (option) => {
    switch (option) {
      case 'external':
        return 'Usuario Externo';
      case 'patient':
        return 'Paciente';
      case 'admin':
        return 'Administrador';
      case 'receptionist':
        return 'Recepcionista';
      case 'doctor':
        return 'Doctor';
      default:
        break;
    }
  };

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <Fragment>
      <Breadcrumb
        parent={{ title: 'Usuarios', url: 'user' }}
        title={
          id === '0' ? 'Nuevo Usuario' : `${user.firstName} ${user.lastName}`
        }
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
                        <h5>{'Datos generales del Usuario'}</h5>
                        <span>{'Información básica y de contacto.'}</span>
                      </div>
                      <div className="col-md-6">
                        {mode === 'browse' ? (
                          <div className="text-right">
                            <Link
                              className="btn btn-primary"
                              to={`${process.env.PUBLIC_URL}/user/${user.id}?mode=edit`}
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
                            defaultValue={user.firstName}
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
                            defaultValue={user.lastName}
                            type="text"
                            ref={register({ required: true })}
                          />
                          <span style={{ color: 'red' }}>
                            {errors.lastName && 'Ingrese un valor.'}
                          </span>
                        </div>
                      </div>
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
                            defaultValue={user.phoneNumber}
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
                            defaultValue={user.email || null}
                            type="email"
                            ref={register({ required: false })}
                          />
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
                            defaultValue={user.address?.street}
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
                            defaultValue={user.address?.city}
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
                            defaultValue={user.address?.state}
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
                            defaultValue={user.address?.country}
                            type="text"
                            ref={register({ required: false })}
                          />
                        </div>
                      </div>
                      <hr className="mt-4 mb-4" />
                      <div className="form-group row">
                        <label
                          className="col-md-2 col-form-label"
                          htmlFor="inputUsername"
                        >
                          {'Usuario'}
                        </label>
                        <div className="col-md-3">
                          <input
                            className="form-control"
                            id="inputUsername"
                            name="username"
                            defaultValue={user.username}
                            type="text"
                            ref={register({ required: true })}
                          />
                          <span style={{ color: 'red' }}>
                            {errors.username && 'Ingrese un valor.'}
                          </span>
                        </div>
                        <label
                          className="col-md-2 col-form-label"
                          htmlFor="inputPassword"
                        >
                          {'Contraseña'}
                        </label>
                        <div className="col-md-3">
                          <input
                            className="form-control"
                            id="inputPassword"
                            name="password"
                            defaultValue={user.password}
                            type="password"
                            ref={register({ required: true })}
                          />
                          <span style={{ color: 'red' }}>
                            {errors.password && 'Ingrese un valor.'}
                          </span>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="col-md-2 col-form-label"
                          htmlFor="inputRoles"
                        >
                          {'Roles'}
                        </label>
                        <div className="col-md-3">
                          <Typeahead
                            id="inputRoles"
                            multiple
                            labelKey={labelKeyRenderRoles}
                            options={[
                              'external',
                              'patient',
                              'admin',
                              'receptionist',
                              'doctor',
                            ]}
                            selected={user.roles}
                            disabled={mode === 'browse'}
                            onChange={handleRolesChange}
                          />
                          <span style={{ color: 'red' }}>
                            {errors.roles && 'Ingrese al menos un valor.'}
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
                            value={user.status}
                            ref={register({ required: true })}
                          >
                            <option value="active">{'Activo'}</option>
                            <option value="inactive">{'Inactivo'}</option>
                          </select>
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
  );
};

export default UserProfile;
