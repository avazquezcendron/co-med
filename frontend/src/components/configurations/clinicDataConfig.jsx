import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import SweetAlert from 'sweetalert2';
import { useForm } from 'react-hook-form';

import * as entityService from '../../services/entity.service';
import Loader from '../common/loader';

const ClinicDataConfig = () => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, errors, reset } = useForm();

  const [clinicData, setClinicData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    entityService.getAll('clinicData', loggedUser).then((data) => {
      if (data && data.length > 0) {
        setClinicData(data[0]);
      }

      setIsLoading(false);
    });
  }, [statusUpdate]);

  const handleSubmitForm = (data) => {
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text: 'Se actualizarán los datos de Co-Med.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          if (clinicData.id) {
            entityService
              .update('clinicData', { ...clinicData, ...data }, loggedUser)
              .then((data) => {
                setStatusUpdate(!statusUpdate);
              });
          } else {
            entityService.save('clinicData', data, loggedUser).then((data) => {
              setStatusUpdate(!statusUpdate);
            });
          }
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

  return (
    <Fragment>
      {!isLoading ? (
        <Fragment>
          <div className="card">
            <form
              className="theme-form mega-form"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6">
                    <h5>{'Datos generales del Centro Médico'}</h5>
                    <span
                      className="text-muted f-12 m-t-5"
                      style={{
                        letterSpacing: 1,
                      }}
                    >
                      {'Información básica y de contacto.'}
                    </span>
                  </div>
                  <div className="col-md-6">
                    {!isEditing && (
                      <div className="text-right">
                        <button
                          className="btn btn-primary"
                          onClick={() => setIsEditing(!isEditing)}
                        >
                          <i className="fa fa-pencil mr-2" />
                          Editar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <fieldset disabled={!isEditing}>
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-md-2 col-form-label" htmlFor="name">
                      {'Nombre'}
                    </label>
                    <div className="col-md-3">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        defaultValue={clinicData.name}
                        type="text"
                        ref={register({ required: true })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.name && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="acronym"
                    >
                      {'Siglas'}
                    </label>
                    <div className="col-md-3">
                      <input
                        className="form-control"
                        name="acronym"
                        id="acronym"
                        defaultValue={clinicData.acronym}
                        type="text"
                        ref={register({ required: true })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.acronym && 'Ingrese un valor.'}
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
                        defaultValue={clinicData.phoneNumber}
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
                        defaultValue={clinicData.email || null}
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
                        defaultValue={clinicData.street}
                        name="street"
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
                        name="city"
                        defaultValue={clinicData.city}
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
                        name="state"
                        defaultValue={clinicData.state}
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
                        name="country"
                        defaultValue={clinicData.country}
                        type="text"
                        ref={register({ required: false })}
                      />
                    </div>
                  </div>
                  <hr className="mt-4 mb-4" />
                  <h6>{'Redes Sociales'}</h6>
                  <div className="form-group row">
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="facebookAccountName"
                    >
                      {'Facebook'}
                    </label>
                    <div className="col-md-3">
                      <input
                        className="form-control"
                        name="facebookAccountName"
                        id="facebookAccountName"
                        defaultValue={clinicData.facebookAccountName}
                        type="url"
                        ref={register({ required: false })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.facebookAccountName && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="instagramAccountName"
                    >
                      {'Instagram'}
                    </label>
                    <div className="col-md-3">
                      <input
                        className="form-control"
                        name="instagramAccountName"
                        id="instagramAccountName"
                        defaultValue={clinicData.instagramAccountName}
                        type="url"
                        ref={register({ required: false })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.instagramAccountName && 'Ingrese un valor.'}
                      </span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="webSiteUrl"
                    >
                      {'Sitio Web'}
                    </label>
                    <div className="col-md-3">
                      <input
                        className="form-control"
                        name="webSiteUrl"
                        id="webSiteUrl"
                        defaultValue={clinicData.webSiteUrl}
                        type="url"
                        ref={register({ required: false })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.webSiteUrl && 'Ingrese un valor.'}
                      </span>
                    </div>
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
          </div>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};
export default ClinicDataConfig;
