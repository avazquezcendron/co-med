import React from 'react';
import StepZilla from 'react-stepzilla';

import AppointmentAndPatientDataComponent from './appointmentAndPatientDataComponent';
import SelectDoctorComponent from './selectDoctorComponent';
import SelectDateAndTimeSlotComponent from './selectDateAndTimeSlotComponent';
import AppointmentConfirmComponent from './appointmentConfirmComponent';

const NewAppointmentWizardComponent = (props) => {

  const steps = [
    { name: 'Doctor', component: <SelectDoctorComponent /> },
    {
      name: 'Datos',
      component: <AppointmentAndPatientDataComponent />,
    },
    {
      name: 'Día y Hora',
      component: <SelectDateAndTimeSlotComponent />,
    },
    {
      name: 'Resumen',
      component: (
        <AppointmentConfirmComponent modalToggle={props.modalToggle} />
      ),
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
            preventEnterSubmission={true}
            // hocValidationAppliedTo={[1]}
            nextButtonText="Siguiente"
            backButtonText="Anterior"
          />
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentWizardComponent;
