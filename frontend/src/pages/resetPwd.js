import React, { Fragment } from 'react';
import logo from '../assets/images/endless-logo.png'
import { CREATEPASSWORD,NewPassword,RetypePassword,Done} from "../constant";
const ResetPwd = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- Reset Password page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        <div className="card mt-4 p-4">
                                            <form className="theme-form">
                                                <h5 className="f-16 mb-3 f-w-600">{CREATEPASSWORD}</h5>
                                                <div className="form-group">
                                                    <label className="col-form-label">{NewPassword}</label>
                                                    <input className="form-control" type="password" placeholder="*****" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">{RetypePassword}</label>
                                                    <input className="form-control" type="password" placeholder="*****" />
                                                </div>
                                                <div className="form-group form-row mb-0">
                                                    <div className="col-md-2">
                                                        <button className="btn btn-primary" type="submit">{Done}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Reset Password page end--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default ResetPwd;