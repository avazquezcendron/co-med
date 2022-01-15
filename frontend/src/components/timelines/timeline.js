import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import Timeline1 from './timeline1';
import VerticalTimelineComp from './verticalTimelineComp';
import {Examples} from "../../constant";
const Timeline = () => {
    return (
        <Fragment>
            <Breadcrumb title="Timeline 1" parent="Timeline" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{Examples} {"1"}</h5>
                            </div>
                            <div className="card-body">
                                <Timeline1 />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{Examples} {"2"}</h5>
                            </div>
                            <div className="card-body">
                                <VerticalTimelineComp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Timeline;