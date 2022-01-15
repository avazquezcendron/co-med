import React, {  Fragment } from 'react';
import { DollarSign, Tag, ShoppingBag, Sun} from 'react-feather';
import CountUp from 'react-countup';
import ChartistGraph from 'react-chartist';
import { chart1, chartsmall } from '../../../data/default';
import configDB from '../../../data/customizer/config';
import {TotalVisits,TotalSale,TotalValue,TotalTax,TotalEarning,ProductionValuation} from '../../../constant'
const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

const EventCharts = () => {
        return (
            <Fragment>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-widget-dashboard">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-0 f-w-600">
                                            <DollarSign />
                                            <span >
                                                <CountUp className="counter" end={5789} />
                                            </span>
                                        </h5>
                                        <p>{TotalVisits}</p>
                                    </div>
                                    <Tag />
                                </div>
                                <div className="dashboard-chart-container">
                                    <div className="small-chart-gradient-1">
                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                            labels: ['01', '02', '03', '04', '05', '06', '07'],
                                            series: [ [0, 2, 1.2, 4, 2, 3, 1.5, 0] ]
                                        }} type={'Line'} listener={{
                                            "created": function (data) {
                                                var defs = data.svg.elem('defs');
                                                    defs.elem('linearGradient', {
                                                        id: 'gradient1',
                                                        x1: 0,
                                                        y1: 0,
                                                        x2: 1,
                                                        y2: 1
                                                    }).elem('stop', {
                                                        offset: 0,
                                                        'stop-color': secondary
                                                    }).parent().elem('stop', {
                                                        offset: 1,
                                                        'stop-color': primary
                                                    });
                                            }
                                        }} options={chartsmall} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-widget-dashboard">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-0 f-w-600">
                                            <DollarSign />
                                            <span>
                                                <CountUp className="counter" end={4986} />
                                            </span>
                                        </h5>
                                        <p>{TotalSale}</p>
                                    </div>
                                    <ShoppingBag />
                                </div>
                                <div className="dashboard-chart-container">
                                    <div className="small-chart-gradient-1">
                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                            labels: ['01', '02', '03', '04', '05', '06'],
                                            series: [ [0, 2, 1.2, 4, 2, 3, 0] ]
                                        }} type={'Line'} listener={{
                                            "created": function (data) {
                                                var defs = data.svg.elem('defs');
                                                    defs.elem('linearGradient', {
                                                        id: 'gradient1',
                                                        x1: 0,
                                                        y1: 0,
                                                        x2: 1,
                                                        y2: 1
                                                    }).elem('stop', {
                                                        offset: 0,
                                                        'stop-color': secondary
                                                    }).parent().elem('stop', {
                                                        offset: 1,
                                                        'stop-color': primary
                                                    });
                                            }
                                        }} options={chartsmall} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-widget-dashboard">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-0 f-w-600">
                                            <DollarSign />
                                            <span>
                                                <CountUp className="counter" end={8568} />
                                            </span>
                                        </h5>
                                        <p>{TotalValue}</p>
                                    </div>
                                    <Sun />
                                </div>
                                <div className="dashboard-chart-container">
                                    <div className="small-chart-gradient-1">
                                        <ChartistGraph key="1" className="ct-chart-line" data={{
                                            labels: ['01', '02', '03', '04', '05', '06', '07'],
                                            series: [ [0, 2, 1.2, 4, 2, 3, 1.5, 2, 0] ]
                                        }} type={'Line'} listener={{
                                            "created": function (data) {
                                                var defs = data.svg.elem('defs');
                                                    defs.elem('linearGradient', {
                                                        id: 'gradient1',
                                                        x1: 0,
                                                        y1: 0,
                                                        x2: 1,
                                                        y2: 1
                                                    }).elem('stop', {
                                                        offset: 0,
                                                        'stop-color': secondary
                                                    }).parent().elem('stop', {
                                                        offset: 1,
                                                        'stop-color': primary
                                                    });
                                            }
                                        }} options={chartsmall} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>{ProductionValuation}</h5>
                        </div>
                        <div className="card-body">
                            <div className="show-value-top d-flex">
                                <div className="value-left d-inline-block">
                                    <div className="square bg-primary d-inline-block"></div><span>{TotalEarning}</span>
                                </div>
                                <div className="value-right d-inline-block">
                                    <div className="square d-inline-block bg-secondary"></div><span>{TotalTax}</span>
                                </div>
                            </div>
                            <div className="smooth-chart flot-chart-container">
                                <ChartistGraph key="1" className="ct-chart-line" data={{
                                    labels: ['2009', '2010', '2011', '2012'],
                                    series: [ [0, 6, 2, 6],
                                    [0, 7, 1, 8]]
                                }} type={'Line'} listener={{
                                    "draw": function (data) {
                                        if (data.type === 'line' || data.type === 'area') {
                                            data.element.animate({
                                                d: {
                                                    begin: 2000 * data.index,
                                                    dur: 2000,
                                                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                                    to: data.path.clone().stringify(),
                                                }
                                            });
                                        }
                                    }
                                }} options={chart1} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

export default EventCharts;