import React, { Fragment } from 'react';
import logo from '../assets/images/endless-logo.png';
import { EnterPassword,Unlock} from "../constant";
const UnlockUser = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- Unlock page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        <div className="card mt-4 p-4 mb-0">
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <label className="col-form-label">{EnterPassword}</label>
                                                    <input className="form-control" type="password" placeholder="*******" />
                                                </div>
                                                <div className="form-group form-row mb-2">
                                                    <div className="col-md-3">
                                                        <button className="btn btn-primary" type="submit">{Unlock}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Unlock page end--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default UnlockUser;