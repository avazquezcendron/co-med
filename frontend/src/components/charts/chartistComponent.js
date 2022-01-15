import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import ChartistGraph from 'react-chartist';
import {chart1 ,chart2Data,chart9Data,chart11Data, chart7Data,chart7Options, chart2Option ,chart3Data,chart3Options,chart6Data,chart6Options ,chart4Data ,chart4Options ,chart5Data ,chart5Options, chart10Data, chart10Options, chart11Options, chart12Data, chart12Options} from '../../data/chartistData';
import {AdvancedSMILAnimations,SVGPathAnimation,BipolarChatAreaOnly,BipolarBarChart,LineChartWithArea,StackedBarChart,HorizontalBarChart,ExtremeResponsiveConfiguration,HolesInData,FilledHolesInData,SimpleLineChart} from "../../constant";

const ChartistComponent = () => {
    return (
        <Fragment>
            <Breadcrumb title="Chartist" parent="Chart" />
            <div className="container-fluid">
                <div className="row chartist-page">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{AdvancedSMILAnimations}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph key="1" className="ct-chart-line flot-chart-container" data={{
                                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                                    series: [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                                    [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                                    [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                                    [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]
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
                                }} options={chart1}  />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SVGPathAnimation}</h5>
                            </div>
                            <div className="card-body">
                            <ChartistGraph key="1" className="ct-chart-line flot-chart-container" data={{
                                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                                    series: [ [1, 5, 2, 5, 4, 3],
                                    [2, 3, 4, 8, 1, 2],
                                    [5, 4, 3, 2, 1, 0.5]]
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
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SVGPathAnimation}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart2Data} options={chart2Option} type={'Pie'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BipolarChatAreaOnly}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart3Data} options={chart3Options} type={'Line'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LineChartWithArea}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart4Data} options={chart4Options} type={'Line'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BipolarBarChart}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart5Data} options={chart5Options} type={'Bar'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{StackedBarChart}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart6Data} options={chart6Options} type={'Bar'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{HorizontalBarChart}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart7Data} options={chart7Options} type={'Bar'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ExtremeResponsiveConfiguration}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart9Data.data} options={chart9Data.options} responsiveOptions={chart9Data.responsiveOptions} type={'Bar'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SimpleLineChart}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart10Data} options={chart10Options} type={'Line'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{HolesInData}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart11Data} options={chart11Options} type={'Line'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{FilledHolesInData}</h5>
                            </div>
                            <div className="card-body">
                                <ChartistGraph data={chart12Data} options={chart12Options} type={'Line'} className="flot-chart-container"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ChartistComponent;