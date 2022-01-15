import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Homes,Library,Data,NavBreadcrumb,Bootstrap,ColoredBreadcrumb,DefaultBootstrapBreadcrumb } from '../../constant';
const Uibreadcrumb = () => {
  return (
    <div>
      <Breadcrumb parent="Advance" title="Breadcrumb" />
      <div className="container-fluid">
        <div className="row">
          {/* <!-- default breadcrumb start--> */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{DefaultBootstrapBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb to ol"}</code></span>
              </div>
              <div className="card-body">
                <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                  <li className="breadcrumb-item active">{Homes}</li>
                </ol>
                <ol className="breadcrumb m-b-0 bg-white p-l-0">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb bg-white m-b-0 p-l-0">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item"><a href="#javascript">{Library}</a></li>
                  <li className="breadcrumb-item active">{Data}</li>
                </ol>
                <ol className="breadcrumb bg-white m-b-0 p-b-0 p-l-0">
                  <li className="breadcrumb-item"><a href="#javascript"><i className="fa fa-home"></i></a></li>
                  <li className="breadcrumb-item">{Library}</li>
                  <li className="breadcrumb-item active">{Data}</li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- default breadcrumb ends-->
              <!-- Nav breadcrumb start--> */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{NavBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb to nav"}</code> {"similar to navigation"}</span>
              </div>
              <div className="card-body">
                <nav className="breadcrumb m-b-0"><a className="breadcrumb-item" href="#javascript">{Homes}</a><a className="breadcrumb-item" href="#javascript">{Library}</a><span className="breadcrumb-item active">{Bootstrap}</span></nav>
              </div>
            </div>
          </div>
          {/* <!-- Nav breadcrumb ends--> */}
          {/* <!-- colored navigation start--> */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{ColoredBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb-colored .bg-primary"}</code></span>
              </div>
              <div className="card-body">
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-primary">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-secondary">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-success">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-info">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-warning">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-danger">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-30 bg-light">
                  <li className="breadcrumb-item"><a className="txt-dark" href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item txt-dark active">{Library}</li>
                </ol>
                <ol className="breadcrumb breadcrumb-colored m-b-0 bg-dark">
                  <li className="breadcrumb-item"><a href="#javascript">{Homes}</a></li>
                  <li className="breadcrumb-item active">{Library}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Uibreadcrumb;