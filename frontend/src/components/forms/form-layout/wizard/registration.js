import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form'
import { FirstName,LastName } from "../../../../constant";
const Registration = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    const onSubmit = data => {

        if (data !== '') {
            alert('You submitted the form and stuff!');
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="validationCustom01">{FirstName}</label>
                                <input className="form-control" id="validationCustom01" name="firstName" type="text" placeholder="First name" ref={register({ required: true })} />
                                {errors.firstName && 'First name is required'}
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="validationCustom02">{LastName}</label>
                                <input className="form-control" id="validationCustom02" name="lastName" type="text" placeholder="Last name" ref={register({ required: true })} />
                                {errors.lastName && 'First name is required'}
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Registration;