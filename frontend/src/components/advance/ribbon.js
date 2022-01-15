import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import {ColoredBreadcrumb,Ribbon} from '../../constant'
const Ribbons = () => {
  return (
    <div>
      <Breadcrumb parent="Advance" title="Ribbons" />
      <div className="container-fluid">
        {/* <!-- ribbon left (default) side--> */}
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>{ColoredBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb-colored .bg-primary"}</code></span>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-xl-4">
                    <div className="ribbon-wrapper">
                      <div className="ribbon ribbon-primary ribbon-space-bottom">{Ribbon}</div>
                      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <div className="ribbon-wrapper">
                      <div className="ribbon ribbon-primary ribbon-space-bottom">{Ribbon}</div>
                      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <div className="ribbon-wrapper">
                      <div className="ribbon ribbon-primary ribbon-space-bottom">{Ribbon}</div>
                      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- demo ribbon end here--> */}
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-info">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-warning">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-danger">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ribbon right side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-primary ribbon-right">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-secondary ribbon-right">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-success ribbon-right">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-info ribbon-right">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-warning ribbon-right">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-danger ribbon-right">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ribbon vertical left side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-left-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-primary ribbon-vertical-left"><i className="icofont icofont-love"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-left-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-secondary ribbon-vertical-left"><i className="icon-gift"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-left-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-success ribbon-vertical-left"><i className="icon-signal"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ribbon vertical right side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-right-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-primary ribbon-vertical-right"><i className="fa fa-chain-broken"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-right-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-secondary ribbon-vertical-right"><i className="fa fa-ticket"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-right-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-success ribbon-vertical-right"><i className="fa fa-taxi"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bookmark ribbon left side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bookmark ribbon right side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-right card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-right ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-right card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-right ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-right card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-right ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ribbon bookmark vertical left side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-left-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-primary"><i className="icofont icofont-love"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-left-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i className="icon-gift"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-left-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-success"><i className="icon-signal"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ribbon bookmark vertical right side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-right-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-primary"><i className="icofont icofont-love"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-right-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-secondary"><i className="icon-gift"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-vertical-right-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-success"><i className="icon-signal"></i></div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bookmark ribbon left side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-clip ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-clip ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper card">
              <div className="card-body">
                <div className="ribbon ribbon-clip ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bookmark ribbon right side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-right card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-right ribbon-right ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-right card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-right ribbon-right ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-right card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-right ribbon-right ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bookmark ribbon left side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-bottom card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-bottom ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-bottom card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-bottom ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-bottom card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-bottom ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bookmark ribbon left side--> */}
        <div className="row">
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-bottom card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-bottom-right ribbon-primary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-bottom card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-bottom-right ribbon-secondary">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-14 col-xl-4">
            <div className="ribbon-wrapper-bottom card">
              <div className="card-body">
                <div className="ribbon ribbon-clip-bottom-right ribbon-success">{Ribbon}</div>
                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ribbons;