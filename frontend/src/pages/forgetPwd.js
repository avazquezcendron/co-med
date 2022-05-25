import React, { Fragment } from 'react';
import logo from '../assets/images/endless-logo.png'
import { CREATEPASSWORD,NewPassword,RetypePassword,Done,EnterMobileNumber,EnterOTP,Resend,ResetPassword,Send} from "../constant";
const ForgetPwd = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="auth-innerright">
                                    <div className="reset-password-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        <div className="card mt-4 mb-0">
                                            <h4>{ResetPassword}</h4>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <label className="col-form-label">{EnterMobileNumber}</label>
                                                    <div className="form-row">
                                                        <div className="col-md-2">
                                                            <input className="form-control digits mb-1" type="text" defaultValue="+ 91" />
                                                        </div>
                                                        <div className="col-md-7 col-xl-8">
                                                            <input className="form-control digits mb-1" type="tel" defaultValue="000-000-0000" />
                                                        </div>
                                                        <div className="col-md-2">
                                                            <button className="btn btn-primary m-0" type="submit">{Send}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4 mb-4"><span className="reset-password-link">{"If don't receive OTP?"}  <a className="btn-link text-danger" href="#javascript">{Resend}</a></span></div>
                                                <div className="form-group rounded p-4 opt-box">
                                                    <label className="col-form-label pt-0">{EnterOTP}</label>
                                                    <div className="form-row">
                                                        <div className="col">
                                                            <input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                        </div>
                                                        <div className="col">
                                                            <input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                        </div>
                                                        <div className="col">
                                                            <input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="f-14 mt-4 mb-3">{CREATEPASSWORD}</h6>
                                                <div className="form-group">
                                                    <label className="col-form-label">{NewPassword}</label>
                                                    <input className="form-control" type="password" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">{RetypePassword}</label>
                                                    <input className="form-control" type="password" />
                                                </div>
                                                <div className="form-group form-row mb-2">
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
                </div>
            </div>
        </Fragment>
    );
};

export default ForgetPwd;