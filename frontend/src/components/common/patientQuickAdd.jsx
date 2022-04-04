import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

import * as patientService from '../../services/patient.service';
import * as healthInsuranceService from '../../services/healthInsurance.service';

const PatientQuickAdd = (props) => {

  const [ healthInsurancesCompanies, setHealthInsurancesCompanies ] = useState();
  useEffect(() => {
    healthInsuranceService.getAll().then((res) => setHealthInsurancesCompanies(res.data));
  }, []);

  const { register, handleSubmit, errors } = useForm();

  
  const [ healthInsurancePlans, setHealthInsurancePlans ] = useState([]);
  // const [ healthInsuranceCompany, setHealthInsuranceCompany ] = useState({});

  

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
          //TODO: dispatch new patient
          // dispatch(
          //   saveAppointmentWatcher({
          //     ...appointmentData,
          //     title: appointmentData.patient.name + ' - ' + appointmentData.mode,
          //     resourceId: appointmentData.doctor.id,
          //     constraint: 'businessHours',
          //     id: 2,
          //   })
          // );
          patientService.savePatient(data).then(res => {
            toast.success('Paciente dado de alta con éxito.', {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            if (props.modalToggle) props.modalToggle();
          });          
        } else {
          toast.error('Se canceló el alta del paciente.', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleHealthInsuranceChange = (insuranceCode) => {
    if (insuranceCode) {
      const healthInsurance = healthInsurancesCompanies.filter(x => x.code === insuranceCode);
      if(healthInsurance.length > 0)
        setHealthInsurancePlans(healthInsurance[0].plans);
    }
  }

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
              <option>{'DNI'}</option>
              <option>{'LE'}</option>
              <option>{'Otro'}</option>
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
              defaultValue="nn"
              onChange={(e) => handleHealthInsuranceChange(e.target.value)}
              ref={register({ required: true })}
            >
                {healthInsurancesCompanies && healthInsurancesCompanies.map((company, i) => (
                  <option key={company.code} value={company.code}>{company.description}</option>
                ))}
            </select>
          </div>
          <label className="col-md-12 col-form-label" htmlFor="healthInsurancePlan">
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
                {healthInsurancePlans && healthInsurancePlans.map((company, i) => (
                  <option key={company.code}>{company.description}</option>
                ))}
            </select>
          </div>
          <label
            className="col-md-12 col-form-label"
            htmlFor="healthInsuranceId"
          >
            {'Nro. de Carnet'}
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
