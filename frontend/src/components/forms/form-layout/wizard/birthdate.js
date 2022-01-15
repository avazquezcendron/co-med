import React, { Fragment } from 'react';
import { DD,MM,YY,Submit } from "../../../../constant";
const Birthdate = (props) => {
    const submitFun = () => {
        alert("successfully updated")
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">

                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="validationCustom01">{DD}</label>
                                <input className="form-control" id="validationCustom01" type="number" placeholder="DD" required />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="validationCustom02">{MM}</label>
                                <input className="form-control" id="validationCustom02" type="number" placeholder="MM" required />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="validationCustom02">{YY}</label>
                                <input className="form-control" id="validationCustom02" type="number" placeholder="YY" required />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </div>
                            <button className="btn btn-primary r-7 btnsubmit" onClick={submitFun}>{Submit}</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Birthdate;