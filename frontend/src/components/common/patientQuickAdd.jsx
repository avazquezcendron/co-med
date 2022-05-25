import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import { patientSavetWatcher } from '../../redux/patients/actions';
import * as entityService from '../../services/entity.service';

const PatientQuickAdd = (props) => {
  registerLocale('es', es);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [healthInsurancesCompanies, setHealthInsurancesCompanies] = useState();
  useEffect(() => {
    entityService
      .getAll('healthInsurance', loggedUser)
      .then((data) => setHealthInsurancesCompanies(data));
  }, []);
  const [healthInsurancePlans, setHealthInsurancePlans] = useState([]);
  const [dateOfBirth, setdobDate] = useState(null);

  const { register, handleSubmit, errors, setError, clearErrors } = useForm();

  const handleSubmitForm = (data) => {
    if (!dateOfBirth) {
      setError('dateOfBirth', {});
      return;
    } else {
      clearErrors('dateOfBirth');
    }

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
          const patientData = { ...data, dateOfBirth };
          if (patientData.healthInsurances?.length > 0) {
            if (!patientData.healthInsurances[0].healthInsuranceCompany) {
              patientData.healthInsurances = [];
            }
          }
          dispatch(patientSavetWatcher(patientData));
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

  const handleDoBChange = (date) => {
    setdobDate(date);
    if (!date) {
      setError('dateOfBirth', {});
    } else {
      clearErrors('dateOfBirth');
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
          <label className="col-md-12 col-form-label" htmlFor="inputFecNac">
            {'Fec. Nacimiento'}
          </label>
          <div className="col-md-12">
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
              />
              <span style={{ color: 'red' }}>
                {errors.dateOfBirth && 'Ingrese un valor.'}
              </span>
            </div>
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
              name="healthInsurances.0.healthInsuranceCompany"
              id="healthInsurance"
              value={undefined}
              onChange={(e) => handleHealthInsuranceChange(e.target.value)}
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
              name="healthInsurances.0.plan.code"
              id="healthInsurancePlan"
              defaultValue="-"
              ref={register({ required: false })}
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
              name="healthInsurances.0.cardNumber"
              id="healthInsuranceId"
              type="number"
              ref={register({ required: false })}
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
