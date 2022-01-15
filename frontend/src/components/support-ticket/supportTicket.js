import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import DataTable from 'react-data-table-component'
import { supportDB,supportColumns } from '../../data/support-ticket';
import {Order,Done,Cancel,Pending,Profit,Loss,Running,Smooth} from '../../constant'
const SupportTicket = () => {
    
    return (
        <Fragment>
            <Breadcrumb title="Support Ticket" parent="Support Ticket" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{"Support Ticket List"}</h5>
                                <span>{"List of ticket opend by customers"}</span>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card ecommerce-widget">
                                            <div className="card-body support-ticket-font">
                                                <div className="row">
                                                    <div className="col-5"><span>{Order}</span>
                                                        <h3 className="total-num counter">{"2563"}</h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card ecommerce-widget">
                                            <div className="card-body support-ticket-font">
                                                <div className="row">
                                                    <div className="col-5"><span>{Pending}</span>
                                                        <h3 className="total-num counter">{"8943"}</h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card ecommerce-widget">
                                            <div className="card-body support-ticket-font">
                                                <div className="row">
                                                    <div className="col-5"><span>{Running}</span>
                                                        <h3 className="total-num counter">{"2500"}</h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-showcase mt-4">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card ecommerce-widget">
                                            <div className="card-body support-ticket-font">
                                                <div className="row">
                                                    <div className="col-5"><span>{Smooth}</span>
                                                        <h3 className="total-num counter">{"2060"}</h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-showcase mt-4">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card ecommerce-widget">
                                            <div className="card-body support-ticket-font">
                                                <div className="row">
                                                    <div className="col-5"><span>{Done}</span>
                                                        <h3 className="total-num counter">{"5600"}</h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-showcase mt-4">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card ecommerce-widget">
                                            <div className="card-body support-ticket-font">
                                                <div className="row">
                                                    <div className="col-5"><span>{Cancel}</span>
                                                        <h3 className="total-num counter">{"2560"}</h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive support-table">
                                    <DataTable
                                            columns={supportColumns}
                                            data={supportDB}
                                            striped={true}
                                            center={true}
                                            pagination
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SupportTicket;