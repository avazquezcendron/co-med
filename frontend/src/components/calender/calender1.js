import React, { Fragment } from 'react';
import Breadcrumb from "../common/breadcrumb";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from "./events";
import 'react-big-calendar/lib/sass/styles.scss';
import { BasicCalendars } from "../../constant";
const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

const Calender1 = () => {

    return (
        <Fragment>
            <Breadcrumb parent="Admin" title="Turnos" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BasicCalendars}</h5>
                            </div>
                            <div className="card-body">
                                <Calendar
                                    localizer={localizer}
                                    scrollToTime={new Date(1970, 1, 1, 6)}
                                    defaultDate={new Date(2019, 3, 12)}
                                    onSelectEvent={event => alert(event.title)}
                                    views={allViews}
                                    events={myEventsList}
                                    eventOverlap
                                    dragRevertDuration={500}
                                    dragScroll
                                    showMultiDayTimes
                                    step={60}
                                    startAccessor="start"
                                    endAccessor="end"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Calender1;