import React ,{Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { DefaultStyle,COD,Fast,NoBorder,OfferStyleBorder,InlineStyle,Free,Submit,Cancel,VerticalStyle,HorizontalStyle,SolidBorderStyle,Local,XYZSeller,ABCSeller,Standard,DeliveryOption,BuyingOption } from "../../../constant";

const MegaOptions = () => {
    return (
        <Fragment>
            <Breadcrumb title="Mega Options" parent="Form"/>
            <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{DefaultStyle}</h5><span>{"This option is show buydefault you don't need to add any extra class"}</span>
                  </div>
                  <div className="card-body megaoptions-border-space-sm">
                    <form className="mega-inline">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio14" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio14"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio13" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio13"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{NoBorder}</h5><span>{"By adding .plain-style class to .mega-inline You can archive this style"}</span>
                  </div>
                  <div className="card-body">
                    <form className="mega-inline plain-style">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio11" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio11"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio12" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio12"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{SolidBorderStyle}</h5><span>{"By adding .border-style class to .mega-inline You can archive this style"}</span>
                  </div>
                  <div className="card-body megaoptions-border-space-sm">
                    <form className="mega-inline border-style">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio15" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio15"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio16" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio16"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{OfferStyleBorder}</h5><span>{"By adding .offer-style class to .mega-inline You can archive this style"}</span>
                  </div>
                  <div className="card-body megaoptions-border-space-sm">
                    <form className="mega-inline offer-style">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio17" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio17"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio18" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio18"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{InlineStyle}</h5><span>{"For Create inline megaoption add"} <code>{".mega-inline"}</code> {"class in form tag"}</span>
                  </div>
                  <div className="card-body megaoptions-border-space-sm">
                    <form className="mega-inline">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio19" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio19"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio20" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio20"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio21" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio21"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Standard}<span className="badge badge-secondary pull-right digits">{"80 INR"}</span></h6>
                                <p>{"Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio22" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio22"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Local} <span className="badge badge-primary pull-right digits">{Free}</span></h6>
                                <p>{"Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-6">
                <div className="card height-equal">
                  <div className="card-header">
                    <h5>{VerticalStyle}</h5><span>{"For Create inline megaoption add"} <code>{".mega-vertical"}</code> {"class in form tag"}</span>
                  </div>
                  <div className="card-body">
                    <form className="mega-vertical">
                      <div className="row">
                        <div className="col-sm-12">
                          <p className="mega-title m-b-5">{DeliveryOption}</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio23" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio23"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio24" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio24"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast} <span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-success mr-3 ml-2">
                                <input id="radio25" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio25"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Standard} <span className="badge badge-success pull-right digits">{"80 INR"}</span></h6>
                                <p>{"Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-info mr-3 ml-2">
                                <input id="radio5" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio5"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Local} <span className="badge badge-info pull-right digits">Free</span></h6>
                                <p>{"Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <p className="mega-title m-b-5">{BuyingOption}</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="card mb-0">
                            <div className="media p-20">
                              <div className="radio radio-warning mr-3 ml-2">
                                <input id="radio26" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio26"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{XYZSeller}<span className="badge badge-warning pull-right digits">{"250 INR"}</span></h6>
                                <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{"5 start rating"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card mb-0">
                            <div className="media p-20">
                              <div className="radio radio-danger mr-3 ml-2">
                                <input id="radio27" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio27"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{ABCSeller}<span className="badge badge-danger pull-right digits">1{"50 INR"}</span></h6>
                                <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{"1 start rating"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-6">
                <div className="card height-equal">
                  <div className="card-header">
                    <h5>{HorizontalStyle}</h5><span>{"For Create inline megaoption add"} <code>{".mega-horizontal"}</code> {"class in form tag"}</span>
                  </div>
                  <div className="card-body">
                    <form className="mega-horizontal">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mega-title">{DeliveryOption}</p>
                        </div>
                        <div className="col-sm-9">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-primary mr-3 ml-2">
                                <input id="radio30" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio30"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                                <p>{"Estimated 5 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-9 offset-sm-3">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-secondary mr-3 ml-2">
                                <input id="radio31" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio31"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{Fast} <span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                                <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <p className="mega-title">{BuyingOption}</p>
                        </div>
                        <div className="col-sm-9">
                          <div className="card">
                            <div className="media p-20">
                              <div className="radio radio-success mr-3 ml-2">
                                <input id="radio32" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio32"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{XYZSeller}<span className="badge badge-success pull-right digits">{"250 INR"}</span></h6>
                                <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{"5 start rating"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-9 offset-sm-3">
                          <div className="card mb-0">
                            <div className="media p-20">
                              <div className="radio radio-info mr-3 ml-2">
                                <input id="radio33" type="radio" name="radio1" value="option1" />
                                <label htmlFor="radio33"></label>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mega-title-badge">{ABCSeller}<span className="badge badge-info pull-right digits">1{"50 INR"}</span></h6>
                                <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{"1 start rating"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary m-r-15" type="submit">{Submit}</button>
                    <button className="btn btn-light" type="submit">{Cancel}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    );
};

export default MegaOptions;