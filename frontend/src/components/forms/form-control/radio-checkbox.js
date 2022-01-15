import React ,{Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {CustomRadio,InlineCheckbox,CustomCheckbox, PrimaryState,BrandState,SuccessState,AnimatedCheckboxButtons,SquareCheckbox, Default,Disabled,Checked,RadioStates,CheckboxStates,SolidCheckbox,AnimatedRadioButtons,Option} from "../../../constant";
const RadioCheckbox = () => {
    return (
        <Fragment>
            <Breadcrumb title="Checkbox & Radio" parent="Form"/>
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{CustomRadio}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <h5>{CustomRadio}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 custom-radio-ml">
                          <div className="radio radio-primary">
                            <input id="radio1" type="radio" name="radio1" value="option1" />
                            <label htmlFor="radio1">{Option}<span className="digits"> {"1"}</span></label>
                          </div>
                          <div className="radio radio-primary">
                            <input id="radio3" type="radio" name="radio1" value="option1" disabled />
                            <label htmlFor="radio3">{Disabled}</label>
                          </div>
                          <div className="radio radio-primary">
                            <input id="radio4" type="radio" name="radio1" value="option1" defaultChecked />
                            <label htmlFor="radio4">{Checked}</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <h5>{RadioStates}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 custom-radio-ml">
                          <div className="radio radio-primary">
                            <input id="radio11" type="radio" name="radio2" value="option1" />
                            <label htmlFor="radio11">{Option}<span className="digits"> {"1"}</span></label>
                          </div>
                          <div className="radio radio-secondary">
                            <input id="radio22" type="radio" name="radio2" value="option1" />
                            <label htmlFor="radio22">{Option}<span className="digits"> {"2"}</span></label>
                          </div>
                          <div className="radio radio-success">
                            <input id="radio55" type="radio" name="radio2" value="option1" />
                            <label htmlFor="radio55">{Option}<span className="digits"> {"3"}</span></label>
                          </div>
                          <div className="radio radio-info">
                            <input id="radio33" type="radio" name="radio2" value="option1" disabled />
                            <label htmlFor="radio33">{Option}<span className="digits"> {"4"}</span></label>
                          </div>
                          <div className="radio radio-warning">
                            <input id="radio44" type="radio" name="radio2" value="option1" />
                            <label htmlFor="radio44">{Option}<span className="digits"> {"5"}</span></label>
                          </div>
                          <div className="radio radio-danger">
                            <input id="radio66" type="radio" name="radio2" value="option1" defaultChecked />
                            <label htmlFor="radio66">{Option}<span className="digits"> {"6"}</span></label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <h5>{InlineCheckbox}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                          <div className="radio radio-primary">
                            <input id="radioinline1" type="radio" name="radio3" value="option1" />
                            <label className="mb-0" htmlFor="radioinline1">{Option}<span className="digits"> {"1"}</span></label>
                          </div>
                          <div className="radio radio-primary">
                            <input id="radioinline2" type="radio" name="radio3" value="option1" />
                            <label className="mb-0" htmlFor="radioinline2">{Option}<span className="digits"> {"2"}</span></label>
                          </div>
                          <div className="radio radio-primary">
                            <input id="radioinline3" type="radio" name="radio3" value="option1" defaultChecked/>
                            <label className="mb-0" htmlFor="radioinline3">{Option}<span className="digits"> {"3"}</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{CustomCheckbox}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <h5>{CustomCheckbox}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 ml-1">
                          <div className="checkbox">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">{Default}</label>
                          </div>
                          <div className="checkbox">
                            <input id="checkbox2" type="checkbox" disabled /> 
                            <label htmlFor="checkbox2">{Disabled}</label>
                          </div>
                          <div className="checkbox">
                            <input id="checkbox3" type="checkbox" defaultChecked/>
                            <label htmlFor="checkbox3">{Checked}</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <h5>{CheckboxStates}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 ml-1">
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox-primary-1" type="checkbox" />
                            <label htmlFor="checkbox-primary-1">{SuccessState}</label>
                          </div>
                          <div className="checkbox checkbox-secondary">
                            <input id="checkbox-dark" type="checkbox" disabled/>
                            <label htmlFor="checkbox-dark">{BrandState}</label>
                          </div>
                          <div className="checkbox checkbox-success">
                            <input id="checkbox-primary" type="checkbox" />
                            <label htmlFor="checkbox-primary">{PrimaryState}</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <h5>{InlineCheckbox}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 m-checkbox-inline mb-0 ml-1">
                          <div className="checkbox checkbox-dark">
                            <input id="inline-1" type="checkbox" />
                            <label htmlFor="inline-1">{Option}<span className="digits"> {"1"}</span></label>
                          </div>
                          <div className="checkbox checkbox-dark">
                            <input id="inline-2" type="checkbox" />
                            <label htmlFor="inline-2">{Option}<span className="digits"> {"2"}</span></label>
                          </div>
                          <div className="checkbox checkbox-dark">
                            <input id="inline-3" type="checkbox" />
                            <label htmlFor="inline-3">{Option}<span className="digits"> {"3"}</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{AnimatedRadioButtons}</h5>
                  </div>
                  <div className="card-body animate-chk">
                    <div className="row">
                      <div className="col">
                        <label className="d-block" htmlFor="edo-ani">
                          <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                              {Option} {"1"}
                        </label>
                        <label className="d-block" htmlFor="edo-ani1">
                          <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                              {Option} {"2"}
                        </label>
                        <label className="d-block" htmlFor="edo-ani2">
                          <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
                              {Option} {"3"}
                        </label>
                        <label className="d-block" htmlFor="edo-ani13">
                          <input className="radio_animated" id="edo-ani13" type="radio" name="rdo-ani" />
                              {Option} {"4"}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{AnimatedCheckboxButtons}</h5>
                  </div>
                  <div className="card-body animate-chk">
                    <div className="row">
                      <div className="col">
                        <label className="d-block" htmlFor="chk-ani">
                          <input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />
                              {Option} {"1"}
                        </label>
                        <label className="d-block" htmlFor="chk-ani1">
                          <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                              {Option} {"2"}
                        </label>
                        <label className="d-block" htmlFor="chk-ani2">
                          <input className="checkbox_animated" id="chk-ani2" type="checkbox" defaultChecked /> 
                              {Option} {"3"}
                        </label>
                        <label className="d-block" htmlFor="chk-ani3">
                          <input className="checkbox_animated" id="chk-ani3" type="checkbox" />                                                
                              {Option} {"4"}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{SquareCheckbox}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="form-group ml-1">
                          <div className="checkbox checkbox-dark m-squar">
                            <input id="inline-sqr-1" type="checkbox" />
                            <label className="mt-0" htmlFor="inline-sqr-1">{Default}</label>
                          </div>
                          <div className="checkbox checkbox-dark m-squar">
                            <input id="inline-sqr-2" type="checkbox" disabled="" />
                            <label htmlFor="inline-sqr-2">{Disabled}</label>
                          </div>
                          <div className="checkbox checkbox-dark m-squar">
                            <input id="inline-sqr-3" type="checkbox" defaultChecked />
                            <label htmlFor="inline-sqr-3">{Checked}</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <h5>{SolidCheckbox}</h5>
                      </div>
                      <div className="col">
                        <div className="form-group m-t-15 mb-0  ml-1">
                          <div className="checkbox checkbox-solid-success" >
                            <input id="solid1" type="checkbox" defaultChecked />
                            <label htmlFor="solid1">{Default}</label>
                          </div>
                          <div className="checkbox checkbox-solid-dark">
                            <input id="solid2" type="checkbox" disabled />
                            <label htmlFor="solid2">{Disabled}</label>
                          </div>
                          <div className="checkbox checkbox-solid-primary">
                            <input id="solid3" type="checkbox" defaultChecked />
                            <label htmlFor="solid3">{Checked}</label>
                          </div>
                          <div className="checkbox checkbox-solid-danger">
                            <input id="solid4" type="checkbox" defaultChecked />
                            <label htmlFor="solid4">{Checked}</label>
                          </div>
                          <div className="checkbox checkbox-solid-light">
                            <input id="solid5" type="checkbox" defaultChecked />
                            <label htmlFor="solid5">{Checked}</label>
                          </div>
                          <div className="checkbox checkbox-solid-info">
                            <input id="solid6" type="checkbox" defaultChecked />
                            <label htmlFor="solid6">{Checked}</label>
                          </div>
                          <div className="checkbox checkbox-solid-dark">
                            <input id="solid7" type="checkbox" defaultChecked />
                            <label className="mb-0" htmlFor="solid7">{Checked}</label>
                          </div>
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

export default RadioCheckbox;