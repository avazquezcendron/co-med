import React, { Fragment } from 'react';
import Breadcrumb from '../../../common/breadcrumb';
import StepZilla from "react-stepzilla";
import Registration from './registration';
import Email from './email';
import Birthdate from './birthdate';
import { FormWizardWithIcon } from "../../../../constant";
const FormWizard = () => {
    const steps =
        [
            { name: 'Step 1', component: <Registration /> },
            { name: 'Step 2', component: <Email /> },
            { name: 'Step 3', component: <Birthdate /> },
            
        ]
    return (
        <Fragment>
            <Breadcrumb title="Form Wizard" parent="Form" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{FormWizardWithIcon}</h5>
                            </div>
                            <div className="card-body">
                                <StepZilla steps={steps} showSteps={true} showNavigation={true} stepsNavigation={true}
                                    prevBtnOnLastStep={true}
                                    dontValidate={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default FormWizard;