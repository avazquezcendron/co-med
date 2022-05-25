import React, { Fragment } from 'react';
import logo from '../assets/images/endless-logo.png'
import { FirstName, LastName, Username,Login,Password,SignUp,BOD } from '../constant';

const SignupWithImg = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="auth-bg">
                    <div className="authentication-box">
                        <div className="text-center"><img src={logo} alt="" /></div>
                        <div className="card mt-4 p-4">
                            <h4 className="text-center">{"NEW USER"}</h4>
                            <h6 className="text-center">{"Enter your Username and Password For Signup"}</h6>
                            <form className="theme-form">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="col-form-label">{FirstName}</label>
                                            <input className="form-control" type="text" placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="col-form-label">{LastName}</label>
                                            <input className="form-control" type="text" placeholder="Deo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">{Username}</label>
                                    <input className="form-control" type="text" placeholder="John Deo" />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">{Password}</label>
                                    <input className="form-control" type="password" placeholder="**********" />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">{BOD}</label>
                                    <div className="form-row">
                                        <div className="col-sm-4">
                                            <select className="form-control mb-1">
                                                <option>{"DD"}</option>
                                                <option>{"01"}</option>
                                                <option>{"02"}</option>
                                                <option>{"03"}</option>
                                                <option>{"04"}</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <select className="form-control mb-1">
                                                <option>{"MM"}</option>
                                                <option>{"01"}</option>
                                                <option>{"02"}</option>
                                                <option>{"03"}</option>
                                                <option>{"04"}</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <select className="form-control mb-1">
                                                <option>{"YYYY"}</option>
                                                <option>{"1990"}</option>
                                                <option>{"1991"}</option>
                                                <option>{"1992"}</option>
                                                <option>{"1993"}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-4">
                                        <button className="btn btn-primary" type="submit">{SignUp}</button>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="text-left mt-2 m-l-20">{"Are you already user?"}  <a className="btn-link text-capitalize" href="login.html">{Login}</a></div>
                                    </div>
                                </div>
                                <div className="form-divider"></div>
                                <div className="social mt-3">
                                    <div className="form-group btn-showcase d-flex">
                                        <button className="btn social-btn btn-fb d-inline-block"> <i className="fa fa-facebook"></i></button>
                                        <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google"></i></button>
                                        <button className="btn social-btn btn-google d-inline-block"><i className="fa fa-twitter"></i></button>
                                        <button className="btn social-btn btn-github d-inline-block"><i className="fa fa-github"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SignupWithImg;