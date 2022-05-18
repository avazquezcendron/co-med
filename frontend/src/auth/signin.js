import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { translate } from 'react-switch-lang';
import { useForm } from 'react-hook-form';

import logo from '../assets/images/co-med-logo-3.png';
import { userLoginWatcher } from '../redux/user/actions';

const Signin = ({ t, history }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const loginWithJwt = ({ username, password }) => {
    if (username && password) {
        dispatch(userLoginWatcher({ username, password }));
    }
    // else {
    //   errors.showMessages();
    // }
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid p-0">
          {/* <!-- login page start--> */}
          <div className="authentication-main">
            <div className="row">
              <div className="col-md-12">
                <div className="auth-innerright auth-bg">
                  <div className="authentication-box">
                    <div className="text-center">
                      <img src={logo} alt="" style={{height: 180}}/>
                    </div>
                    <div className="card mt-4">
                      <div className="card-body">
                        <div className="text-center">
                          <h4>{t('Login')}</h4>
                          <h6>{t('LoginCredentialsMessage')} </h6>
                        </div>
                        <form
                          className="theme-form"
                          onSubmit={handleSubmit(loginWithJwt)}
                        >
                          <div className="form-group">
                            <label className="col-form-label pt-0">
                              {t('User')}
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="username"
                              value={username}
                              ref={register({ required: true })}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <span style={{ color: 'red' }}>
                              {errors.username && 'Ingrese un valor.'}
                            </span>
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">
                              {t('Password')}
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              value={password}
                              ref={register({ required: true })}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span style={{ color: 'red' }}>
                              {errors.password && 'Ingrese un valor.'}
                            </span>
                          </div>
                          <div className="checkbox p-0">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">{t('RememberMe')}</label>
                          </div>
                          <div className="form-group form-row mt-3 mb-0">
                            <button
                              className="btn btn-primary btn-block"
                            >
                              {t('Login')}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          {/* <!-- login page end--> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(translate(Signin));
