import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {BasicInputGroups,LeftAddon,RightAddon,JointAddon,LeftRightAddon,SolidStyle,SquareStyle,FlatStyle,RaiseStyle,Submit,Cancel} from "../../../constant";

const InputGroupComp = () => {
  return (
    <Fragment>
      <Breadcrumb title="Input Groups" parent="Form" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{BasicInputGroups}</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <form>
                      <div className="form-group m-form__group">
                        <label>{LeftAddon}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text">{"@"}</span></div>
                          <input className="form-control" type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{RightAddon}</label>
                        <div className="input-group">
                          <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" />
                          <div className="input-group-append"><span className="input-group-text">{"@example.com"}</span></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{JointAddon}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text">{"$"}</span><span className="input-group-text">{"0.00"}</span></div>
                          <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <label>{LeftRightAddon}</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend"><span className="input-group-text">{"$"}</span></div>
                          <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                          <div className="input-group-append"><span className="input-group-text">{".00"}</span></div>
                        </div>
                      </div>
                      <div className="form-group input-group-solid">
                        <label>{SolidStyle}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text">{"@"}</span></div>
                          <input className="form-control" type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group input-group-square">
                        <label>{SquareStyle}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text">+</span></div>
                          <input className="form-control" type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group input-group-square">
                        <label>{RaiseStyle}</label>
                        <div className="input-group input-group-air">
                          <div className="input-group-prepend"><span className="input-group-text">{"#"}</span></div>
                          <input className="form-control" type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <label>{LeftRightAddon}</label>
                        <div className="input-group pill-input-group">
                          <div className="input-group-prepend"><span className="input-group-text">{"$"}</span></div>
                          <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                          <div className="input-group-append"><span className="input-group-text">{".00"}</span></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                <button className="btn btn-light" type="submit">{Cancel}</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{BasicInputGroups}</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <form>
                      <div className="form-group m-form__group">
                        <label>{LeftAddon}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-pencil-alt-5"></i></span></div>
                          <input className="form-control" type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{RightAddon}</label>
                        <div className="input-group">
                          <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" />
                          <div className="input-group-append"><span className="input-group-text"><i className="icofont icofont-ui-dial-phone"></i></span></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{JointAddon}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-unlink"></i></span><span className="input-group-text">{"0.00"}</span></div>
                          <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>{LeftRightAddon}</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-ui-zoom-out"></i></span></div>
                          <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                          <div className="input-group-append"><span className="input-group-text"><i className="icofont icofont-ui-zoom-in"></i></span></div>
                        </div>
                      </div>
                      <div className="form-group input-group-solid">
                        <label>{SolidStyle}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-users"></i></span></div>
                          <input className="form-control" type="text" placeholder="999999" />
                        </div>
                      </div>
                      <div className="form-group input-group-square">
                        <label>{FlatStyle}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-credit-card"></i></span></div>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="form-group input-group-square">
                        <label>{RaiseStyle}</label>
                        <div className="input-group">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-download"></i></span></div>
                          <input className="form-control input-group-air" type="text" placeholder="https://www.example.com" />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <label>{LeftRightAddon}n</label>
                        <div className="input-group pill-input-group">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="icofont icofont-ui-copy"></i></span></div>
                          <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                          <div className="input-group-append"><span className="input-group-text"><i className="icofont icofont-stock-search"></i></span></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                <button className="btn btn-light" type="submit">{Cancel}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InputGroupComp;