import React, { Fragment } from 'react';

const Loader = ({ show }) => {
  return (
    <Fragment>
      {/* <div className="u-posRelative"> */}
      {/* <div className="row"> */}
      {/* <div className="col-md-12"> */}
      <div className={`loader-wrapper ${show ? '' : 'loderhide'}`}>
        <div className="loader m-t-50 m-b-50">
          <div className="whirly-loader"> </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </Fragment>
  );
};

export default Loader;
