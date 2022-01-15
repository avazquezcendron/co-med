import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {BasicFormControl,BasicHTMLInputControl,EdgesInputStyle,FlatInputStyle,RaiseInputStyle,SolidInputStyle,InputSizing,CustomControls,
EmailAddress,Password,ExampleSelect,ExampleMultipleSelect,ExampleTextarea,Submit,SimpleInput,Placeholder,Date,Month, Time,ColorPicker,
LargeInput,SmallInput,MaximumLength,CustomSelect,Disabled,Textarea,StaticText,UploadFile,Telephone,DateAndTime,Week,Number,  
LargeSelect,DefaultSelect,SmallSelect,DefaultInput,URL} from '../../../constant'

const BaseInput = () => {
  return (
    <Fragment>
      <Breadcrumb title="Basic Input" parent="Form" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{BasicFormControl}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">{EmailAddress}</label>
                        <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword2">{Password}</label>
                        <input className="form-control" id="exampleInputPassword2" type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect9">{ExampleSelect}</label>
                        <select className="form-control digits" id="exampleFormControlSelect9" defaultValue="1">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect3">{ExampleMultipleSelect}</label>
                        <select className="form-control digits" id="exampleFormControlSelect3" multiple="" defaultValue="1">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlTextarea4">{ExampleTextarea}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{BasicHTMLInputControl}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{SimpleInput}</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Placeholder}</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="text" placeholder="Type your title in Placeholder" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Password}</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="password" placeholder="Password input" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Number}</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" type="number" placeholder="Number" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Telephone}</label>
                        <div className="col-sm-9">
                          <input className="form-control m-input digits" type="tel" defaultValue="91-(999)-999-999" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{URL}</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="url" defaultValue="https://getbootstrap.com" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{DateAndTime}</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Date}</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" type="date" defaultValue="2018-01-01" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Month}</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" type="month" defaultValue="2018-01" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Week}</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" type="week" defaultValue="2018-W09" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{Time}</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" type="time" defaultValue="21:45:00" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label pt-0">{ColorPicker}</label>
                        <div className="col-sm-9">
                          <input className="form-control" style={{ height: '35px' }} type="color" defaultValue="#563d7c" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{MaximumLength}</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="text" placeholder="Content must be in 6 characters" maxLength="6" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label pt-0">{StaticText}</label>
                        <div className="col-sm-9">
                          <div className="form-control-static">
                            {`Hello !... This is
                            static text`}
                              </div>
                        </div>
                      </div>
                      <div className="form-group row mb-0">
                        <label className="col-sm-3 col-form-label">{Textarea}</label>
                        <div className="col-sm-9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="col-sm-9 offset-sm-3">
                    <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                    <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                  </div>
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{EdgesInputStyle}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput5">{EmailAddress}</label>
                        <input className="form-control btn-pill" id="exampleFormControlInput5" type="email" placeholder="name@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword6">{Password}</label>
                        <input className="form-control btn-pill" id="exampleInputPassword6" type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect7">{ExampleSelect}</label>
                        <select className="form-control btn-pill digits" id="exampleFormControlSelect7">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect8">{ExampleMultipleSelect}</label>
                        <select className="form-control btn-pill p-l-45 digits" id="exampleFormControlSelect8" multiple="">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlTextarea9">{ExampleTextarea}</label>
                        <textarea className="form-control btn-pill" id="exampleFormControlTextarea9" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{FlatInputStyle}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput10">{EmailAddress}</label>
                        <input className="form-control btn-square" id="exampleFormControlInput10" type="email" placeholder="name@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword11">{Password}</label>
                        <input className="form-control btn-square" id="exampleInputPassword11" type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect12">{ExampleSelect}</label>
                        <select className="form-control btn-square digits" id="exampleFormControlSelect12">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect13">{ExampleMultipleSelect}</label>
                        <select className="form-control btn-square digits" id="exampleFormControlSelect13" multiple="">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlTextarea14">{ExampleTextarea}</label>
                        <textarea className="form-control btn-square" id="exampleFormControlTextarea14" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{RaiseInputStyle}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput15">{EmailAddress}</label>
                        <input className="form-control input-air-primary" id="exampleFormControlInput15" type="email" placeholder="name@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword16">{Password}</label>
                        <input className="form-control input-air-primary" id="exampleInputPassword16" type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect17">{ExampleSelect}</label>
                        <select className="form-control input-air-primary digits" id="exampleFormControlSelect17">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect18">{ExampleMultipleSelect}</label>
                        <select className="form-control input-air-primary digits" id="exampleFormControlSelect18" multiple="">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlTextarea19">{ExampleTextarea}</label>
                        <textarea className="form-control input-air-primary" id="exampleFormControlTextarea19" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{SolidInputStyle}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput20">{EmailAddress}</label>
                        <input className="form-control" id="exampleFormControlInput20" type="email" placeholder="name@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword21">{Password}</label>
                        <input className="form-control" id="exampleInputPassword21" type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword22">{Disabled}</label>
                        <input className="form-control" id="exampleInputPassword22" type="text" disabled="" placeholder="Disabled" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect23">{ExampleSelect}</label>
                        <select className="form-control digits" id="exampleFormControlSelect23">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect24">{ExampleMultipleSelect}</label>
                        <select className="form-control digits" id="exampleFormControlSelect24" multiple="">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlTextarea25">{ExampleTextarea}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea25" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{InputSizing}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="col-form-label-sm" htmlFor="colFormLabelSm26">{LargeInput}</label>
                        <input className="form-control form-control-lg" id="colFormLabelSm26" type="text" placeholder="col-form-label-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword27">{DefaultInput}</label>
                        <input className="form-control" id="exampleInputPassword27" type="text" placeholder="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="col-form-label-sm" htmlFor="colFormLabelSm28">{SmallInput}</label>
                        <input className="form-control form-control-sm" id="colFormLabelSm28" type="text" placeholder="col-form-label-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect29">{LargeSelect}</label>
                        <select className="form-control form-control-lg digits" id="exampleFormControlSelect29">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect30">{DefaultSelect}</label>
                        <select className="form-control digits" id="exampleFormControlSelect30">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group mb-0">
                        <label htmlFor="exampleFormControlSelect31">{SmallSelect}</label>
                        <select className="form-control form-control-sm digits" id="exampleFormControlSelect31">
                          <option>{"1"}</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{CustomControls}</h5>
              </div>
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">{UploadFile}</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="file" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group row mb-0">
                        <label className="col-sm-3 col-form-label">{CustomSelect}</label>
                        <div className="col-sm-9">
                          <select className="custom-select form-control">
                            <option select="">{"Open this select menu"}</option>
                            <option defaultValue="1">{"One"}</option>
                            <option defaultValue="2">{"Two"}</option>
                            <option defaultValue="3">{"Three"}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary mr-1" type="button">{Submit}</button>
                  <input className="btn btn-light" type="reset" defaultValue="Cancel" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BaseInput;