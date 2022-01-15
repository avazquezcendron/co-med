import React from "react";
import one from '../../assets/images/user/1.jpg';
import sixteen from '../../assets/images/user/16.png';
import three from '../../assets/images/user/3.jpg';
import five from '../../assets/images/user/5.jpg';
import Breadcrumb from '../common/breadcrumb';
import {Sizing,StatusIndicator,Initials,Shape,Ratio,Groups} from '../../constant'
const Avatar = () => {
  return (
    <div>
      <Breadcrumb parent="Base" title="Avatars" />
      <div className="container-fluid">
        <div className="user-profile">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>{Sizing}</h5>
                </div>
                <div className="card-body avatar-showcase">
                  <div className="avatars">
                    <div className="avatar">
                      <img
                        className="img-100 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-90 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-80 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-70 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-60 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-50 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-40 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-30 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-20 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>{StatusIndicator}</h5>
                </div>
                <div className="card-body avatar-showcase">
                  <div className="avatars">
                    <div className="avatar">
                      <img
                        className="img-100 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-100 bg-success"> </div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-90 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-90"></div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-80 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-80 bg-success"></div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-70 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-70"></div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-60 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-60 bg-success"></div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-50 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-50"> </div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-40 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-40"></div>
                    </div>
                    <div className="avatar">
                      <img
                        className="img-30 rounded-circle"
                        src={one}
                        alt="#"
                      />
                      <div className="status status-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>{Initials}</h5>
                </div>
                <div className="card-body avatar-showcase">
                  <div className="avatars">
                    <div className="avatar">
                      <img
                        className="img-100 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-90 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-80 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-70 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-60 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-50 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-40 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-30 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-20 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-10 rounded-circle"
                        src={sixteen}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 xl-100">
              <div className="card">
                <div className="card-header">
                  <h5>{Shape}</h5>
                </div>
                <div className="card-body avatar-showcase">
                  <div className="avatars">
                    <div className="avatar">
                      <img
                        className="img-100 b-r-8"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-90 b-r-30"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-80 b-r-35"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-70 rounded-circle"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-60 b-r-25"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="img-50 b-r-15"
                        src={one}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 xl-100">
              <div className="card">
                <div className="card-header">
                  <h5>{Ratio}</h5>
                </div>
                <div className="card-body avatar-showcase">
                  <div className="avatars">
                    <div className="avatar ratio">
                      <img
                        className="b-r-8 height-100"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar ratio">
                      <img
                        className="b-r-8 height-90"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar ratio">
                      <img
                        className="b-r-8 height-80"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar ratio">
                      <img
                        className="b-r-8 height-70"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar ratio">
                      <img
                        className="b-r-8 height-60"
                        src={one}
                        alt="#"
                      />
                    </div>
                    <div className="avatar ratio">
                      <img
                        className="b-r-8 height-50"
                        src={one}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>{Groups}</h5>
                </div>
                <div className="card-body avatar-showcase">
                  <div className="customers d-inline-block avatar-group">
                    <ul>
                      <li className="d-inline-block">
                        <img
                          className="img-70 rounded-circle"
                          src={three}
                          alt=""
                        />
                      </li>
                      <li className="d-inline-block">
                        <img
                          className="img-70 rounded-circle"
                          src={five}
                          alt=""
                        />
                      </li>
                      <li className="d-inline-block">
                        <img
                          className="img-70 rounded-circle"
                          src={one}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="customers d-inline-block avatar-group">
                    <ul>
                      <li className="d-inline-block">
                        <img
                          className="img-50 rounded-circle"
                          src={three}
                          alt=""
                        />
                      </li>
                      <li className="d-inline-block">
                        <img
                          className="img-50 rounded-circle"
                          src={five}
                          alt=""
                        />
                      </li>
                      <li className="d-inline-block">
                        <img
                          className="img-50 rounded-circle"
                          src={one}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="customers d-inline-block avatar-group">
                    <ul>
                      <li className="d-inline-block">
                        <img
                          className="img-40 rounded-circle"
                          src={three}
                          alt=""
                        />
                      </li>
                      <li className="d-inline-block">
                        <img
                          className="img-40 rounded-circle"
                          src={five}
                          alt=""
                        />
                      </li>
                      <li className="d-inline-block">
                        <img
                          className="img-40 rounded-circle"
                          src={one}
                          alt=""
                        />
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
  );
}

export default Avatar;
