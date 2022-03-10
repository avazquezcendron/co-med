import React, { Fragment, useEffect, useState } from 'react';
import StepZilla from 'react-stepzilla';
import * as appointmentService from '../../../services/appointment.service';
import AppointmentAndPatientDataComponent from './appointmentAndPatientDataComponent';
import SelectDoctorComponent from './selectDoctorComponent';
import SelectDateAndTimeSlotComponent from './selectDateAndTimeSlotComponent';
import AppointmentConfirmComponent from './appointmentConfirmComponent';

const NewAppointmentWizardComponent = (props) => {
  const steps = [
    { name: 'Doctor', component: <SelectDoctorComponent appointmentData={props.appointmentData}/> },
    {
      name: 'Datos',
      component: <AppointmentAndPatientDataComponent appointmentData={props.appointmentData}/>,
    },
    {
      name: 'Día y Hora',
      component: <SelectDateAndTimeSlotComponent appointmentData={props.appointmentData}/>,
    },
    {
      name: 'Resumen',
      component: <AppointmentConfirmComponent appointmentData={props.appointmentData}/>,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <StepZilla
            steps={steps}
            showSteps={true}
            showNavigation={true}
            stepsNavigation={true}
            prevBtnOnLastStep={false}
            dontValidate={true}
            preventEnterSubmission={true}
            hocValidationAppliedTo={[3]}
            nextButtonText="Siguiente"
            backButtonText="Anterior"
          />
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentWizardComponent;
