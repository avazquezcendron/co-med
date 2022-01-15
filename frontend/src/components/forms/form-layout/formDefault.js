import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { DefaultFormLayout,EmailAddress,Email,Password,Username,Website,BillingInformation,CompanyInformation,InlineForm,InlineFormWithLabel,InlineFormWithoutLabel,HorizontalFormLayout,MegaForm,Submit,Cancel,AccountInformation,Option,Login,ContactNumber,CompanyName,YourName,Checkboxes,Radios,Disabled } from "../../../constant";
const FormDefault = () => {
  return (
    <Fragment>
      <Breadcrumb title="Form Default" parent="Form" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{DefaultFormLayout}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {'component, you can extend the default collapse behavior to create an accordion.'}</span>
                  </div>
                  <div className="card-body">
                    <form className="theme-form">
                      <div className="form-group">
                        <label className="col-form-label pt-0" htmlFor="exampleInputEmail1">{EmailAddress}</label>
                        <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small className="form-text text-muted" id="emailHelp">{"We'll never share your email with anyone else."}</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">{Password}</label>
                        <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
                      </div>
                      <div className="checkbox p-0">
                        <input id="dafault-checkbox" type="checkbox" />
                        <label className="mb-0" htmlFor="dafault-checkbox">{"Remember my preference"}</label>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary mr-1">{Submit}</button>
                    <button className="btn btn-secondary">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{HorizontalFormLayout}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                  </div>
                  <div className="card-body">
                    <form className="theme-form">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="inputEmail3">{Email}</label>
                        <div className="col-sm-9">
                          <input className="form-control" id="inputEmail3" type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{Password}</label>
                        <div className="col-sm-9">
                          <input className="form-control" id="inputPassword3" type="password" placeholder="Password" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{ContactNumber}</label>
                        <div className="col-sm-9">
                          <input className="form-control" id="inputnumber" type="number" placeholder="Contact" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{CompanyName}</label>
                        <div className="col-sm-9">
                          <input className="form-control" id="url" type="text" placeholder="Company name" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{Website}</label>
                        <div className="col-sm-9">
                          <input className="form-control" id="Website" type="url" placeholder="Website" />
                        </div>
                      </div>
                      <fieldset className="form-group">
                        <div className="row">
                          <label className="col-form-label col-sm-3 pt-0">{Radios}</label>
                          <div className="col-sm-9">
                            <div className="radio radio-primary ml-2">
                              <input id="radio11" type="radio" name="radio1" value="option1" />
                              <label htmlFor="radio11">{Option} {"1"}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio22" type="radio" name="radio1" value="option1" />
                              <label htmlFor="radio22">{Option} {"2"}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio33" type="radio" name="radio1" value="option1" disabled />
                              <label htmlFor="radio33">{Disabled}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio44" type="radio" name="radio1" value="option1" defaultChecked />
                              <label htmlFor="radio44">{Option} {"3"}</label>
                            </div>
                            <div className="radio radio-primary ml-2">
                              <input id="radio55" type="radio" name="radio1" value="option1" />
                              <label htmlFor="radio44">{Option} {"4"}</label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-group row mb-0">
                        <label className="col-sm-3 col-form-label pb-0">{Checkboxes}</label>
                        <div className="col-sm-9">
                          <div className="form-group m-checkbox-inline mb-0 ml-1">
                            <div className="checkbox checkbox-primary">
                              <input id="inline-form-1" type="checkbox" />
                              <label className="mb-0" htmlFor="inline-form-1">{Option} {"1"}</label>
                            </div>
                            <div className="checkbox checkbox-primary">
                              <input id="inline-form-2" type="checkbox" />
                              <label className="mb-0" htmlFor="inline-form-2">{Option} {"2"}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary mr-1">{Submit}</button>
                    <button className="btn btn-secondary">{Cancel}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{MegaForm}</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form mega-form">
                      <h6>{AccountInformation}</h6>
                      <div className="form-group">
                        <label className="col-form-label">{YourName}</label>
                        <input className="form-control" type="text" placeholder="your Name" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">{EmailAddress}</label>
                        <input className="form-control" type="email" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">{ContactNumber}</label>
                        <input className="form-control" type="Number" placeholder="Enter contact number" />
                      </div>
                      <hr className="mt-4 mb-4" />
                      <h6>{CompanyInformation}</h6>
                      <div className="form-group">
                        <label className="col-form-label">{CompanyName}</label>
                        <input className="form-control" type="text" placeholder="Company Name" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">{Website}</label>
                        <input className="form-control" type="text" placeholder="Website" />
                      </div>
                    </form>
                    <hr className="mt-4 mb-4" />
                    <h6 className="pb-4">{BillingInformation}</h6>
                    <form className="form-inline theme-form billing-form">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Name On Card" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="text" name="inputPassword" placeholder="Card Number" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="text" name="inputPassword" placeholder="Zip Code" />
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary mr-1">{Submit}</button>
                    <button className="btn btn-secondary">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{InlineForm}</h5><span>{"Use"}<code>{".form-inline"}</code>{"class in the form to style with inline fields."}</span>
                  </div>
                  <div className="card-body">
                    <h6>{InlineFormWithLabel}</h6>
                    <form className="form-inline theme-form mt-3">
                      <div className="form-group">
                        <label className="col-form-label" htmlFor="inputInlineUsername">{Username}</label>
                        <input className="form-control" id="inputInlineUsername" type="text" name="inputUsername" placeholder="Username" autoComplete="off" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label" htmlFor="inputInlinePassword">{Password}</label>
                        <input className="form-control" id="inputInlinePassword" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary" type="button">{Login}</button>
                      </div>
                    </form>
                    <h6>{InlineFormWithoutLabel}</h6>
                    <form className="form-inline theme-form mt-3 billing-form">
                      <div className="form-group">
                        <input className="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="inputUnlabelPassword" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary" type="button">{Login}</button>
                      </div>
                    </form>
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

export default FormDefault;