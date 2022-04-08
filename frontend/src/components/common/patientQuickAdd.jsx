import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import { patientSavetWatcher } from '../../redux/patients/actions';
import * as healthInsuranceService from '../../services/healthInsurance.service';

const PatientQuickAdd = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [healthInsurancesCompanies, setHealthInsurancesCompanies] = useState();
  useEffect(() => {
    healthInsuranceService
      .getAll(loggedUser)
      .then((res) => setHealthInsurancesCompanies(res.data));
  }, []);
  const [healthInsurancePlans, setHealthInsurancePlans] = useState([]);

  const { register, handleSubmit, errors } = useForm();

  const handleSubmitForm = (data) => {
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text: `Se dará de alta al paciente ${data.firstName} ${data.lastName}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          dispatch(patientSavetWatcher(data));
          props.modalToggle && props.modalToggle();
        } 
      });
    } else {
      errors.showMessages();
    }
  };

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

  return (
    <div>
      <form
        className="theme-form mega-form"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="form-group row">
          <label className="col-md-12 col-form-label" htmlFor="inputFirstName">
            {'Nombre'}
          </label>
          <div className="col-md-12">
            <input
              className="form-control"
              name="firstName"
              id="inputFirstName"
              type="text"
              ref={register({ required: true })}
            />
            <span style={{ color: 'red' }}>
              {errors.firstName && 'Ingrese un valor.'}
            </span>
          </div>
          <label className="col-md-12 col-form-label" htmlFor="inputLastnames">
            {'Apellido'}
          </label>
          <div className="col-md-12">
            <input
              className="form-control"
              name="lastName"
              id="inputLastnames"
              type="text"
              ref={register({ required: true })}
            />
            <span style={{ color: 'red' }}>
              {errors.lastName && 'Ingrese un valor.'}
            </span>
          </div>
          <label className="col-md-12 col-form-label" htmlFor="nationalIdType">
            {'Tipo de Documento'}
          </label>
          <div className="col-md-12">
            <select
              className="form-control"
              name="nationalIdType"
              id="nationalIdType"
              defaultValue="DNI"
              ref={register({ required: true })}
            >
              <option value="DNI">{'DNI'}</option>
              <option value="LE">{'LE'}</option>
              <option value="OTRO">{'Otro'}</option>
            </select>
          </div>
          <label className="col-md-12 col-form-label" htmlFor="nationalId">
            {'Nro. de Documento'}
          </label>
          <div className="col-md-12">
            <input
              className="form-control"
              name="nationalId"
              id="nationalId"
              type="number"
              ref={register({ required: true })}
            />
            <span style={{ color: 'red' }}>
              {errors.nationalId && 'Ingrese un valor.'}
            </span>
          </div>
          <label className="col-md-12 col-form-label" htmlFor="healthInsurance">
            {'Obra Social'}
          </label>
          <div className="col-md-12">
            <select
              className="form-control"
              name="healthInsurance"
              id="healthInsurance"
              value={undefined}
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
          </div>
          <label
            className="col-md-12 col-form-label"
            htmlFor="healthInsurancePlan"
          >
            {'Plan'}
          </label>
          <div className="col-md-12">
            <select
              className="form-control"
              name="healthInsurancePlan"
              id="healthInsurancePlan"
              defaultValue="-"
              ref={register({ required: true })}
            >
              {healthInsurancePlans &&
                healthInsurancePlans.map((company, i) => (
                  <option key={company.code}>{company.code}</option>
                ))}
            </select>
          </div>
          <label
            className="col-md-12 col-form-label"
            htmlFor="healthInsuranceId"
          >
            {'Nro. de Credencial'}
          </label>
          <div className="col-md-12">
            <input
              className="form-control"
              name="healthInsuranceId"
              id="healthInsuranceId"
              type="number"
              ref={register({ required: true })}
            />
            <span style={{ color: 'red' }}>
              {errors.healthInsuranceId && 'Ingrese un valor.'}
            </span>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.modalToggle && props.modalToggle()}
          >
            {'Cancelar'}
          </button>
          <button className="btn btn-primary ml-4">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default PatientQuickAdd;
