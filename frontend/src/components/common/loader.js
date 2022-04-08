import React, { Fragment } from 'react';

const Loader = ({ show }) => {
    return (
        <Fragment>
            <div className={`loader-wrapper ${show ? '' : 'loderhide'}`} >
                <div className="loader bg-white">
                    <div className="whirly-loader"> </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Loader;