import React, { Fragment } from 'react';
import { Codepen, Clock, Anchor, Server, TrendingDown, ArrowDown, ArrowUp } from 'react-feather';
import CountUp from 'react-countup';
import { Line } from 'react-chartjs-2';
import { buyData, buyOption } from '../../../data/default';
import DataTable from 'react-data-table-component'
import {data,columns} from '../../../data/server-table';
import Breadcrumb from '../../common/breadcrumb';
import LiveChart from './liveChart';
import { Latency,Bandwidth,ClusterLoad,LiveCPUUsage,MemoryUsage,ProcessExplorer,IOActivity,Brandley,Cara,Airi,Cedric,Storage } from "../../../constant";

const ServerComponent = () => {
    const datasetKeyProvider = () => {
        return Math.random()
    }
    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="Server" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="media">
                                    <Codepen />
                                    <div className="top-server">
                                        <h6 className="mb-0">{Storage}</h6>
                                    </div>
                                </div>
                                <div className="bottom-server">
                                    <h5 className="mb-0">{"85GB /"} <span>{"100Gb"}</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style={{ width: "55%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="media">
                                    <Clock />
                                    <div className="top-server">
                                        <h6 className="mb-0">{Latency}</h6>
                                    </div>
                                </div>

                                <div className="bottom-server">
                                    <h5 className="mb-0">
                                        <span className="second-color counter">
                                            <CountUp end={40} />
                                        </span>{"ms"}
                                        </h5>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style={{ width: "25%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="media">
                                    <Server />
                                    <div className="top-server">
                                        <h6 className="mb-0">{Bandwidth}</h6>
                                    </div>
                                </div>
                                <div className="bottom-server">
                                    <h5 className="mb-0">{"75GB /"} <span>{"100Gb"}</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="media">
                                    <Anchor />
                                    <div className="top-server">
                                        <h6 className="mb-0">{ClusterLoad}</h6>
                                    </div>
                                </div>
                                <div className="bottom-server">
                                    <h5 className="mb-0">{"70%"} <span>
                                        <TrendingDown />
                                    </span>
                                    </h5>
                                </div>
                                <div className="last-server">
                                    <h6 className="mb-0 f-14">{"Lower than average"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LiveCPUUsage}</h5>
                            </div>
                            <div className="card-body chart-block">
                                <div className="server-chart-container">
                                    <LiveChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MemoryUsage}</h5>
                            </div>
                            <div className="card-body server-canvas">
                                <Line data={buyData} options={buyOption} width={700} height={350}  datasetKeyProvider={datasetKeyProvider}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 xl-100">
                        <div className="card">
                            <div className="card-header server-header">
                                <h5 className="d-inline-block">{ProcessExplorer}</h5><span className="badge badge-primary m-l-10 d-inline-block mt-0">{"57 Process"}</span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <DataTable
                                         columns={columns}
                                         data={data}
                                         striped={true}
                                         center={true}
                                         persistTableHead
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-100">
                        <div className="card">
                            <div className="card-header server-header">
                                <h5 className="d-inline-block">{IOActivity}</h5><span className="badge badge-primary m-l-10 d-inline-block mt-0">{"Last 10 Activity"}</span>
                            </div>
                            <div className="card-body">
                                <div className="server-activity">
                                    <div className="media">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Brandley}</span>
                                        <div className="media-body text-right"><span>{"14 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="media-body text-right"><span>{"5 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowUp className="font-secondary m-r-10" />
                                        <span>{Airi}</span>
                                        <div className="media-body text-right"><span>{"15 MB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowUp className="font-primary m-r-10" />
                                        <span>{Cedric}</span>
                                        <div className="media-body text-right"><span>{"4 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowDown className="font-secondary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="media-body text-right"><span>{"20 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowUp className="font-primary m-r-10" />
                                        <span>{Airi}</span>
                                        <div className="media-body text-right"><span>{"25 MB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Brandley}</span>
                                        <div className="media-body text-right"><span>{"14 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="media-body text-right"><span>{"5 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowUp className="font-secondary m-r-10" />
                                        <span>{Airi}</span>
                                        <div className="media-body text-right"><span>{"15 MB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowUp className="font-primary m-r-10" />
                                        <span>{Cedric}</span>
                                        <div className="media-body text-right"><span>{"4 KB"}</span></div>
                                    </div>
                                    <div className="media">
                                        <ArrowDown className="font-secondary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="media-body text-right"><span>{"20 KB"}</span></div>
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

export default ServerComponent; 