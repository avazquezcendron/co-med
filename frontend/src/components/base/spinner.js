import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import {LoaderStyle,DefaultLoader,DottedStyle,DashedStyle,DoubleStyle,GrooveStyle,InsetStyle,Default,Primary,Secondary,Warning,Info,Danger,RidgeStyle,OutsetStyle,LoaderColor,Success,Dark,LoaderMultiColor,SolidStyle} from '../../constant'

const Spinner = () => {
  return (
    <div>
      <Breadcrumb parent="Base" title="Spinners" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{LoaderStyle}</h5>
              </div>
              <div className="card-body row">
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DefaultLoader}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-primary"></div>
                      <div className="line bg-primary"></div>
                      <div className="line bg-primary"></div>
                      <div className="line bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DottedStyle}</h6>
                  <div className="loader-box"><span className="rotate dotted"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DashedStyle}</h6>
                  <div className="loader-box"><span className="rotate dashed"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DoubleStyle}</h6>
                  <div className="loader-box"><span className="rotate double"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{GrooveStyle}</h6>
                  <div className="loader-box"><span className="rotate groove"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{RidgeStyle}</h6>
                  <div className="loader-box"><span className="rotate ridge"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{InsetStyle}</h6>
                  <div className="loader-box"><span className="rotate inset"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{OutsetStyle}</h6>
                  <div className="loader-box"><span className="rotate outset"></span></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{LoaderColor}</h5>
              </div>
              <div className="card-body row">
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Default}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Primary}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-primary"></div>
                      <div className="line bg-primary"></div>
                      <div className="line bg-primary"></div>
                      <div className="line bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Secondary}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-secondary"></div>
                      <div className="line bg-secondary"></div>
                      <div className="line bg-secondary"></div>
                      <div className="line bg-secondary"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Success}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-success"></div>
                      <div className="line bg-success"></div>
                      <div className="line bg-success"></div>
                      <div className="line bg-success"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Info}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-info"></div>
                      <div className="line bg-info"></div>
                      <div className="line bg-info"></div>
                      <div className="line bg-info"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Warning}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-warning"></div>
                      <div className="line bg-warning"></div>
                      <div className="line bg-warning"></div>
                      <div className="line bg-warning"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Danger}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-danger"></div>
                      <div className="line bg-danger"></div>
                      <div className="line bg-danger"></div>
                      <div className="line bg-danger"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{Dark}</h6>
                  <div className="loader-box">
                    <div className="loader">
                      <div className="line bg-dark"></div>
                      <div className="line bg-dark"></div>
                      <div className="line bg-dark"></div>
                      <div className="line bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{LoaderMultiColor}</h5>
              </div>
              <div className="card-body row">
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{SolidStyle}</h6>
                  <div className="loader-box"><span className="rotate solid colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DottedStyle}</h6>
                  <div className="loader-box"><span className="rotate dotted colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DashedStyle}</h6>
                  <div className="loader-box"><span className="rotate dashed colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{DoubleStyle}</h6>
                  <div className="loader-box"><span className="rotate double colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{GrooveStyle}</h6>
                  <div className="loader-box"><span className="rotate groove colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{RidgeStyle}</h6>
                  <div className="loader-box"><span className="rotate ridge colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{InsetStyle}</h6>
                  <div className="loader-box"><span className="rotate inset colored"></span></div>
                </div>
                <div className="col-md-3">
                  <h6 className="sub-title mb-0">{OutsetStyle}</h6>
                  <div className="loader-box"><span className="rotate outset colored"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;