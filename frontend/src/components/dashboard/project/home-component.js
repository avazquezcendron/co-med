import React, {Fragment, useState, useEffect } from 'react';
import Countup from 'react-countup';
import { Doughnut, Bar } from 'react-chartjs-2';
import ChartistGraph from 'react-chartist';
import { taskChartData, taskChartOptions, barChartData, barChartOptions, projectsmall, projectsmall1 } from '../../../data/default';
import { MoreHorizontal } from 'react-feather';
import configDB from '../../../data/customizer/config'
import { DueTasks,Features,Completed,Proposals,Implemented,Issues,Open,ReOpened,Overdue,Tasks,TaskSolved,TaskDistribution,Schedule,GroupMeeting,Project,Requirements,Discussion,Planning,PublicBetaRelease,Lunch,ClientsTiming,GithubIsuues,Created,ClosedToday,Fixed,WontFix,NeedTest,ClosedIssues,Closed } from "../../../constant";
const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

const HomeComponent = () =>  {
    const [open,setOpen] = useState(false)

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    },[])

    const handleClickOutside = () => {
        setOpen(false)
    };
    const handleButtonClick = () => {
        setOpen(!open)
    };

    return (
        <Fragment>
            <div className="tab-content active default" id="tab-1">
                <div className="row">
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <div className="select2-drpdwn-project select-options">
                                        <select className="form-control form-control-primary btn-square" name="select">
                                            <option value="opt1">{"Today"}</option>
                                            <option value="opt2">{"Yesterday"}</option>
                                            <option value="opt3">{"Tomorrow"}</option>
                                            <option value="opt4">{"Monthly"}</option>
                                            <option value="opt5">{"Weekly"}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="project-widgets text-center">
                                    <h1 className="font-primary counter">
                                        <Countup end={45} /></h1>
                                    <h6 className="mb-0">{DueTasks}</h6>
                                </div>
                            </div>
                            <div className="card-footer project-footer">
                                <h6 className="mb-0">{Completed}:
                                    <span className="counter ml-1">
                                        <Countup end={14} />
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <h5 className="mb-0">{Features}</h5>
                                </div>
                                <div className="project-widgets text-center">
                                    <h1 className="font-primary counter">
                                        <Countup end={80} />
                                    </h1>
                                    <h6 className="mb-0">{Proposals}</h6>
                                </div>
                            </div>
                            <div className="card-footer project-footer">
                                <h6 className="mb-0">{Implemented}:
                                    <span className="counter ml-1">
                                        <Countup end={14} />
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <h5 className="mb-0">{Issues}</h5>
                                </div>
                                <div className="project-widgets text-center">
                                    <h1 className="font-primary counter">
                                        <Countup end={34} />
                                    </h1>
                                    <h6 className="mb-0">{Open}</h6>
                                </div>
                            </div>
                            <div className="card-footer project-footer">
                                <h6 className="mb-0">{ClosedToday}:
                                    <span className="counter ml-1">
                                        <Countup end={10} />
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="media">
                                    <h5 className="mb-0">{Overdue}</h5>
                                </div>
                                <div className="project-widgets text-center">
                                    <h1 className="font-primary counter">7</h1>
                                    <h6 className="mb-0">{Tasks}</h6>
                                </div>
                            </div>
                            <div className="card-footer project-footer">
                                <h6 className="mb-0">{TaskSolved}:
                                    <span className="counter ml-1">
                                        <Countup end={4} />
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header project-header">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h5>{TaskDistribution}</h5>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="select2-drpdwn-project select-options">
                                            <select className="form-control form-control-primary btn-square" name="select">
                                                <option value="opt1">{"Today"}</option>
                                                <option value="opt2">{"Yesterday"}</option>
                                                <option value="opt3">{"Tomorrow"}</option>
                                                <option value="opt4">{"Monthly"}</option>
                                                <option value="opt5">{"Weekly"}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body chart-block chart-vertical-center project-charts">
                                <Doughnut data={taskChartData} options={taskChartOptions} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header project-header">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h5>{Schedule}</h5>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="select2-drpdwn-project select-options">
                                            <select className="form-control form-control-primary btn-square" name="select">
                                                <option value="opt1">{"Today"}</option>
                                                <option value="opt2">{"Yesterday"}</option>
                                                <option value="opt3">{"Tomorrow"}</option>
                                                <option value="opt4">{"Monthly"}</option>
                                                <option value="opt5">{"Weekly"}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="schedule">
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>{GroupMeeting}</h6>
                                            <p>{"30 minutes"}</p>
                                        </div>
                                        <div className="dropdown schedule-dropdown">
                                            <button className="btn dropdown-toggle" id="dropdownMenuButton" type="button" onClick={handleButtonClick} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <MoreHorizontal />
                                            </button>
                                            {open && (
                                                <div className="dropdown">
                                                    <ul>
                                                        <li>{Project}</li>
                                                        <li>{Requirements}</li>
                                                        <li>{Discussion}</li>
                                                        <li>{Planning}</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <select className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <option className="dropdown-item" href="#javascript">{Project}</option>
                                                <option className="dropdown-item" href="#javascript">{Requirements}</option>
                                                <option className="dropdown-item" href="#javascript">{Discussion}</option>
                                                <option className="dropdown-item" href="#javascript">{Planning}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>{PublicBetaRelease}</h6>
                                            <p>{"10:00 PM"}</p>
                                        </div><MoreHorizontal />
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>{Lunch}</h6>
                                            <p>{"12:30 PM"}</p>
                                        </div><MoreHorizontal />
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>{ClientsTiming}</h6>
                                            <p>{"2:00 PM to 6:00 PM"}</p>
                                        </div><MoreHorizontal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{GithubIsuues}</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 xl-100">
                                        <div className="row more-projects">
                                            <div className="col-sm-6 xl-4">
                                                <div className="projects-main">
                                                    <div className="project-content">
                                                        <h6>{Created}</h6>
                                                        <h5 className="counter mb-0">
                                                            <Countup end={27} />
                                                        </h5>
                                                    </div>
                                                    <div className="project-small-chart-1 project-small">
                                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                                            labels: ['01', '02', '03', '04', '05', '06'],
                                                            series: [[1, 5, 2, 5, 4, 3]]
                                                        }} type={'Line'} listener={{
                                                            "created": function (data) {
                                                                var defs = data.svg.elem('defs');
                                                                defs.elem('linearGradient', {
                                                                    id: 'gradient1',
                                                                    x1: 1,
                                                                    y1: 0,
                                                                    x2: 0,
                                                                    y2: 1
                                                                }).elem('stop', {
                                                                    offset: 0,
                                                                    'stop-color': primary
                                                                }).parent().elem('stop', {
                                                                    offset: 1,
                                                                    'stop-color': secondary
                                                                });
                                                            }
                                                        }} options={projectsmall} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 xl-4">
                                                <div className="projects-main">
                                                    <div className="project-content">
                                                        <h6>{Fixed}</h6>
                                                        <h5 className="counter mb-0">
                                                            <Countup end={8} />
                                                        </h5>
                                                    </div>
                                                    <div className="project-small-chart-2 project-small">
                                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                                            labels: ['01', '02', '03', '04', '05', '06'],
                                                            series: [[5, 2, 3, 1, 3, 2]]
                                                        }} type={'Line'} listener={{
                                                            "created": function (data) {
                                                                var defs = data.svg.elem('defs');
                                                                defs.elem('linearGradient', {
                                                                    id: 'gradient1',
                                                                    x1: 1,
                                                                    y1: 0,
                                                                    x2: 0,
                                                                    y2: 1
                                                                }).elem('stop', {
                                                                    offset: 0,
                                                                    'stop-color': primary
                                                                }).parent().elem('stop', {
                                                                    offset: 1,
                                                                    'stop-color': secondary
                                                                });
                                                            }
                                                        }} options={projectsmall1} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 xl-4">
                                                <div className="projects-main">
                                                    <div className="project-content">
                                                        <h6>{ReOpened}</h6>
                                                        <h5 className="counter mb-0">
                                                            <Countup end={2} />
                                                        </h5>
                                                    </div>
                                                    <div className="project-small-chart-3 project-small">
                                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                                            labels: ['01', '02', '03', '04', '05', '06'],
                                                            series: [[1, 2, 5, 1, 4, 3]]
                                                        }} type={'Line'} listener={{
                                                            "created": function (data) {
                                                                var defs = data.svg.elem('defs');
                                                                defs.elem('linearGradient', {
                                                                    id: 'gradient1',
                                                                    x1: 1,
                                                                    y1: 0,
                                                                    x2: 0,
                                                                    y2: 1
                                                                }).elem('stop', {
                                                                    offset: 0,
                                                                    'stop-color': primary
                                                                }).parent().elem('stop', {
                                                                    offset: 1,
                                                                    'stop-color': secondary
                                                                });
                                                            }
                                                        }} options={projectsmall1} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 xl-4">
                                                <div className="projects-main">
                                                    <div className="project-content">
                                                        <h6>{Closed}</h6>
                                                        <h5 className="counter mb-0">
                                                            <Countup end={10} />
                                                        </h5>
                                                    </div>
                                                    <div className="project-small-chart-4 project-small">
                                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                                            labels: ['01', '02', '03', '04', '05', '06'],
                                                            series: [[1, 2, 4, 3, 2, 3]]
                                                        }} type={'Line'} listener={{
                                                            "created": function (data) {
                                                                var defs = data.svg.elem('defs');
                                                                defs.elem('linearGradient', {
                                                                    id: 'gradient1',
                                                                    x1: 1,
                                                                    y1: 0,
                                                                    x2: 0,
                                                                    y2: 1
                                                                }).elem('stop', {
                                                                    offset: 0,
                                                                    'stop-color': primary
                                                                }).parent().elem('stop', {
                                                                    offset: 1,
                                                                    'stop-color': secondary
                                                                });
                                                            }
                                                        }} options={projectsmall1} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 xl-4">
                                                <div className="projects-main">
                                                    <div className="project-content">
                                                        <h6>{WontFix}</h6>
                                                        <h5 className="counter mb-0">
                                                            <Countup end={25} />
                                                        </h5>
                                                    </div>
                                                    <div className="project-small-chart-5 project-small">
                                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                                            labels: ['01', '02', '03', '04', '05', '06'],
                                                            series: [[0, 5, 2, 3, 1, 3]]
                                                        }} type={'Line'} listener={{
                                                            "created": function (data) {
                                                                var defs = data.svg.elem('defs');
                                                                defs.elem('linearGradient', {
                                                                    id: 'gradient1',
                                                                    x1: 1,
                                                                    y1: 0,
                                                                    x2: 0,
                                                                    y2: 1
                                                                }).elem('stop', {
                                                                    offset: 0,
                                                                    'stop-color': primary
                                                                }).parent().elem('stop', {
                                                                    offset: 1,
                                                                    'stop-color': secondary
                                                                });
                                                            }
                                                        }} options={projectsmall1} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 xl-4">
                                                <div className="projects-main">
                                                    <div className="project-content">
                                                        <h6>{NeedTest}</h6>
                                                        <h5 className="counter mb-0">
                                                            <Countup end={5} />
                                                        </h5>
                                                    </div>
                                                    <div className="project-small-chart-6 project-small">
                                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                                            labels: ['01', '02', '03', '04', '05', '06'],
                                                            series: [[1, 2, 3, 1, 2, 3]]
                                                        }} type={'Line'} listener={{
                                                            "created": function (data) {
                                                                var defs = data.svg.elem('defs');
                                                                defs.elem('linearGradient', {
                                                                    id: 'gradient1',
                                                                    x1: 1,
                                                                    y1: 0,
                                                                    x2: 0,
                                                                    y2: 1
                                                                }).elem('stop', {
                                                                    offset: 0,
                                                                    'stop-color': primary
                                                                }).parent().elem('stop', {
                                                                    offset: 1,
                                                                    'stop-color': secondary
                                                                });
                                                            }
                                                        }} options={projectsmall1} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 xl-100 github-lg">
                                        <div className="show-value-top d-flex">
                                            <div className="value-left d-inline-block">
                                                <div className="square bg-primary d-inline-block"></div><span>{ClosedIssues}</span>
                                            </div>
                                            <div className="value-right d-inline-block">
                                                <div className="square d-inline-block bg-secondary"></div><span>{Issues}</span>
                                            </div>
                                        </div>
                                        <div className="github-chart">
                                            <div className="flot-chart-placeholder" id="github-issues">
                                                <Bar data={barChartData} options={barChartOptions} height={178} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
    }

export default HomeComponent;