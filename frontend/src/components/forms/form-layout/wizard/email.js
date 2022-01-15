import React, { Fragment } from 'react';
import { Email,Password,ConfirmPassword } from "../../../../constant";
const Emails = (props) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="exampleFormControlInput1">{Email}</label>
                                <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com" />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="exampleInputPassword2">{Password}</label>
                                <input className="form-control" id="exampleInputPassword2" type="password" placeholder="Password" />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="exampleInputPassword2"> {ConfirmPassword}</label>
                                <input className="form-control" id="exampleInputPassword3" type="password" placeholder="Password" />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Emails;