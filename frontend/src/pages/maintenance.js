import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {MAINTENANCE,BACK_TO_HOME_PAGE} from "../constant";
const Maintenance = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="error-wrapper maintenance-bg">
                    <div className="container">
                        <ul className="maintenance-icons">
                            <li><i className="fa fa-cog"></i></li>
                            <li><i className="fa fa-cog"></i></li>
                            <li><i className="fa fa-cog"></i></li>
                        </ul>
                        <div className="maintenance-heading">
                            <h2 className="headline">{MAINTENANCE}</h2>
                        </div>
                        <h4 className="sub-content">{"Our Site is Currently under maintenance We will be back Shortly"} <br />
                            {"Thank You For Patience"}</h4>
                        <div><Link className="btn btn-info-gradien btn-lg text-light" to={`${process.env.PUBLIC_URL}/dashboard/default`}>{BACK_TO_HOME_PAGE}</Link></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Maintenance;