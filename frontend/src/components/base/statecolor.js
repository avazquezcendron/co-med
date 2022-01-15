import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import {DefaultColor,Color,Primary,Secondary,Warning,Info,Danger,Success,Pink,Grey} from '../../constant'

const Statecolor = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Base" title="State Color" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{DefaultColor}</h5>
              </div>
              <div className="card-body">
                <div className="color-box">
                  <button className="btn btn-primary btn-square digits">{"#4466f2"}</button>
                  <button className="btn btn-square digits btn-secondary">{"#1ea6ec"}</button>
                  <button className="btn btn-square digits btn-success">{"#22af47"}</button>
                  <button className="btn btn-square digits btn-info">{"#007bff"}</button>
                  <button className="btn btn-square digits btn-warning">{"#ff9f40"}</button>
                  <button className="btn btn-square digits btn-danger">{"#ff5370"}</button>
                  <button className="btn btn-square digits btn-light">{"#f6f7fb"}</button>
                  <button className="btn btn-square digits btn-dark">{"#2a3142"}</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{Color}</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <h6 className="sub-title text-uppercase">{Primary}</h6>
                    <div className="primary-color">
                      <ul className="m-b-30">
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h6 className="sub-title text-uppercase">{Secondary}</h6>
                    <div className="secondary-color">
                      <ul className="m-b-30">
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h6 className="sub-title text-uppercase">{Success}</h6>
                    <div className="success-color">
                      <ul className="m-b-30">
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h6 className="sub-title text-uppercase">{Info}</h6>
                    <div className="info-color">
                      <ul className="m-b-30">
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h6 className="sub-title text-uppercase">{Warning}</h6>
                    <div className="yellow-color">
                      <ul>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 xs-mt">
                    <h6 className="sub-title text-uppercase">{Danger}</h6>
                    <div className="red-color">
                      <ul>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 nav-md-mt">
                    <h6 className="sub-title text-uppercase">{Pink}</h6>
                    <div className="pink-color">
                      <ul>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 nav-md-mt">
                    <h6 className="sub-title text-uppercase">{Grey}</h6>
                    <div className="gray-color">
                      <ul>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                        <li>
                          <span></span>
                        </li>
                      </ul>
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
}

export default Statecolor;