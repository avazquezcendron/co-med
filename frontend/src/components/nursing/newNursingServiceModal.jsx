import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import SweetAlert from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import * as entityService from '../../services/entity.service';
import * as nursingService from '../../services/nursingService.service';

const NewNursingServiceModal = (props) => {
  registerLocale('es', es);
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();
  const { modal, modalToggle, currentService, setCurrentService } = props;
  const [nurses, setNurses] = useState([]);
  const [healthInsurancesCompanies, setHealthInsurancesCompanies] = useState(
    []
  );
  const [services, setServices] = useState([]);

  useEffect(() => {
    entityService
      .getAll('service', loggedUser)
      .then((data) => setServices(data));

    entityService.getAll('nurse', loggedUser).then((data) => setNurses(data));

    entityService
      .getAll('healthInsurance', loggedUser)
      .then((data) => setHealthInsurancesCompanies(data));

    return () => {
      setCurrentService({});
      setServices([]);
      setNurses([]);
      setHealthInsurancesCompanies([]);
    };
  }, []);

  const handleSubmitForm = (data) => {
    if (!currentService?.service) {
      setError('service', {});
      return;
    }
    if (!currentService?.nurse) {
      setError('nurse', {});
      return;
    }
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text:
          (currentService.id
            ? 'Se actualizará el servicio de enfermería para la enfermera/o '
            : 'Se dará de alta el servicio de enfermería para la enfermera/o ') +
          '"' +
          currentService.nurse.fullName +
          '".',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          const nusringServiceData = {
            ...currentService,
            ...data,
            date: currentService.date,
            service: currentService.service.id,
            nurse: currentService.nurse.id,
            healthInsuranceCompany: currentService.healthInsuranceCompany?.id,
          };
          if (currentService.id) {
            entityService
              .update('nursingService', nusringServiceData, loggedUser)
              .then((data) => {
                modalToggle(true, true);
              });
          } else {
            entityService
              .save('nursingService', nusringServiceData, loggedUser)
              .then((data) => {
                modalToggle(true, true);
              });
          }
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleNurseChange = (selected) => {
    if (selected.length > 0) {
      setCurrentService({ ...currentService, nurse: selected[0] });
      clearErrors('nurse');
    } else {
      setCurrentService({ ...currentService, nurse: null });
      setError('nurse', {});
    }
  };

  return (
    <Modal isOpen={modal} toggle={() => modalToggle(true)} size="lg">
      <ModalHeader toggle={() => modalToggle(true)}>
        {currentService.id
          ? `Servicio de Enferemería realizado el día ${new Date(
              currentService.date
            ).toLocaleDateString('es')} por ${currentService.nurse?.fullName}`
          : 'Nuevo Servicio de Enfermería'}
      </ModalHeader>
      <ModalBody>
        <div className="card">
          <form
            className="theme-form mega-form"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-12 col-form-label" htmlFor="date">
                      {'Fecha'}
                    </label>
                    <div
                      className="datepicker-here col-md-12"
                      data-language="es"
                      id="date"
                    >
                      <DatePicker
                        className="form-control"
                        placeholderText="dd/MM/yyyy"
                        selected={
                          currentService?.date
                            ? new Date(currentService?.date)
                            : new Date()
                        }
                        locale="es"
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) =>
                          setCurrentService({
                            ...currentService,
                            date: date,
                          })
                        }
                      />
                      <span style={{ color: 'red' }}>
                        {errors.date && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="service"
                    >
                      {'Servicio'}
                    </label>
                    <div className="col-md-12">
                      <select
                        className="form-control"
                        name="service"
                        id="service"
                        value={currentService?.service?.id}
                        onChange={(e) =>
                          setCurrentService({
                            ...currentService,
                            service: services.filter(
                              (x) => x.id === e.target.value
                            )[0],
                          })
                        }
                        ref={register({ required: true })}
                      >
                        <option value={undefined}></option>
                        {services &&
                          services.map((service, i) => (
                            <option key={service.id} value={service.id}>
                              {service.description}
                            </option>
                          ))}
                      </select>
                      <span style={{ color: 'red' }}>
                        {errors.service && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label className="col-md-12 col-form-label" htmlFor="nurse">
                      {'Enfermera/o'}
                    </label>
                    <div className="col-md-12">
                      <Typeahead
                        id="nurse"
                        labelKey="fullName"
                        emptyLabel="No se encontraron resultados..."
                        minLength={0}
                        clearButton
                        options={nurses}
                        selected={
                          nurses.length > 0
                            ? nurses.filter(
                                (x) => x.id === currentService?.nurse?.id
                              )
                            : null
                        }
                        onChange={handleNurseChange}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.nurse && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="healthInsuranceCompany"
                    >
                      {'Obra Social'}
                    </label>
                    <div className="col-md-12">
                      <select
                        className="form-control"
                        name="healthInsuranceCompany"
                        id="healthInsuranceCompany"
                        value={currentService?.healthInsuranceCompany?.id}
                        onChange={(e) =>
                          setCurrentService({
                            ...currentService,
                            healthInsuranceCompany:
                              healthInsurancesCompanies.filter(
                                (x) => x.id === e.target.value
                              )[0],
                          })
                        }
                        ref={register({ required: false })}
                      >
                        <option value="">-</option>
                        {healthInsurancesCompanies &&
                          healthInsurancesCompanies.map((company, i) => (
                            <option key={company.id} value={company.id}>
                              {company.description}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="description"
                    >
                      {'Descripción'}
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        name="description"
                        id="description"
                        defaultValue={currentService?.description}
                        type="text"
                        ref={register({ required: false })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.description && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label className="col-md-12 col-form-label" htmlFor="cost">
                      {'Costo del Servicio'}
                    </label>
                    <div className="col-md-12">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          className="form-control"
                          name="cost"
                          id="cost"
                          value={currentService?.service?.cost || 0}
                          disabled={true}
                          type="number"
                        />
                      </div>
                    </div>
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="nurseFee"
                    >
                      {'Honorarios Enfermera/o'}
                    </label>
                    <div className="col-md-12">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          className="form-control"
                          name="nurseFee"
                          id="nurseFee"
                          defaultValue={currentService?.nurseFee}
                          type="number"
                          ref={register({ required: true })}
                        />
                      </div>
                      <span style={{ color: 'red' }}>
                        {errors.nurseFee && 'Ingrese un valor.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => modalToggle(true)}
              >
                {'Cancelar'}
              </button>
              <button className="btn btn-primary ml-1">{'Guardar'}</button>
            </div>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default NewNursingServiceModal;
