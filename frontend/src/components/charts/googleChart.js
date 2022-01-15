import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Chart } from "react-google-charts";
import { PieChart,DonutChart,RotatingPieChart,SliceVisibilityThreshold,AreaChart,LineChart,ComboChart,StackingAreaChart,MaterialDesign,BasicBarChart } from "../../constant";

const GoogleChart = () => {
    return (
        <Fragment>
            <Breadcrumb title="Google Chart" parent="Chart" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PieChart} {"1"}</h5>
                            </div>
                            <div className="card-body"> 
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 6.7],
                                        ['Eat', 13.3],
                                        ['Commute', 20],
                                        ['Watch TV', 26.7],
                                        ['Sleep', 33.3],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                        colors: ["#4466f2", "#1ea6ec", "#22af47", "#1b7aff", "#f85370"]
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PieChart} {"2"}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 6.7],
                                        ['Eat', 13.3],
                                        ['Commute', 20],
                                        ['Watch TV', 26.7],
                                        ['Sleep', 33.3],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                        colors: ["#4466f2", "#1ea6ec", "#22af47", "#1b7aff", "#f85370"],
                                        // Just add this option
                                        is3D: true,
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{DonutChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                        colors: ["#4466f2", "#1ea6ec", "#22af47", "#1b7aff", "#f85370"],
                                        // Just add this option
                                        pieHole: 0.4,
                                    }}
                                    rootProps={{ 'data-testid': '3' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{RotatingPieChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Language', 'Speakers (in millions)'],
                                        ['German', 2.85],
                                        ['French', 1.66],
                                        ['Italian', 0.316],
                                        ['Romansh', 0.0791],
                                    ]}
                                    options={{
                                        legend: 'none',
                                        pieSliceText: 'label',
                                        title: 'Swiss Language Use (100 degree rotation)',
                                        colors: ["#4466f2", "#1ea6ec", "#22af47", "#1b7aff", "#f85370"],
                                        pieStartAngle: 100,
                                    }}
                                    rootProps={{ 'data-testid': '4' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{RotatingPieChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Language', 'Speakers (in millions)'],
                                        ['Assamese', 13],
                                        ['Bengali', 83],
                                        ['Bodo', 1.4],
                                        ['Dogri', 2.3],
                                        ['Gujarati', 46],
                                        ['Hindi', 300],
                                        ['Kannada', 38],
                                        ['Kashmiri', 5.5],
                                        ['Konkani', 5],
                                        ['Maithili', 20],
                                        ['Malayalam', 33],
                                        ['Manipuri', 1.5],
                                        ['Marathi', 72],
                                        ['Nepali', 2.9],
                                        ['Oriya', 33],
                                        ['Punjabi', 29],
                                        ['Sanskrit', 0.01],
                                        ['Santhali', 6.5],
                                        ['Sindhi', 2.5],
                                        ['Tamil', 61],
                                        ['Telugu', 74],
                                        ['Urdu', 52],
                                    ]}
                                    options={{
                                        title: 'Indian Language Use',
                                        legend: 'none',
                                        pieSliceText: 'label',
                                        colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff9f40", "#FF5370","#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff9f40", "#FF5370","#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff9f40", "#FF5370", "#fd7b6c", "#22af47","#007bff", "#ff9f40"],
                                        slices: {
                                            4: { offset: 0.2 },
                                            12: { offset: 0.3 },
                                            14: { offset: 0.4 },
                                            15: { offset: 0.5 },
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '5' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SliceVisibilityThreshold}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Pizza', 'Popularity'],
                                        ['Pepperoni', 33],
                                        ['Hawaiian', 26],
                                        ['Mushroom', 22],
                                        ['Sausage', 10], // Below limit.
                                        ['Anchovies', 9], // Below limit.
                                    ]}
                                    options={{
                                        title: 'Popularity of Types of Pizza',
                                        colors: ["#4466f2", "#1ea6ec", "#fa9f40", "#31af47", "#4466f2"],
                                        sliceVisibilityThreshold: 0.2, // 20%
                                    }}
                                    rootProps={{ 'data-testid': '7' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{AreaChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'300px'}
                                    chartType="AreaChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses'],
                                        ['2013', 1000, 400],
                                        ['2014', 1170, 460],
                                        ['2015', 660, 1120],
                                        ['2016', 1030, 540],
                                    ]}
                                    options={{
                                        title: 'Company Performance',
                                        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                                        vAxis: { minValue: 0 },
                                        colors: ["#4466f2", "#1ea6ec"],
                                        // For the legend to fit, we make the chart area smaller
                                        chartArea: { width: '50%', height: '70%' },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{StackingAreaChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'300px'}
                                    chartType="AreaChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses'],
                                        ['2013', 1000, 400],
                                        ['2014', 1170, 460],
                                        ['2015', 660, 1120],
                                        ['2016', 1030, 540],
                                    ]}
                                    options={{
                                        isStacked: true,
                                        height: 300,
                                        legend: { position: 'top', maxLines: 3 },
                                        vAxis: { minValue: 0 },
                                        colors: ["#4466f2", "#1ea6ec"],
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BasicBarChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="BarChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['City', '2010 Population', '2000 Population'],
                                        ['New York City, NY', 8175000, 8008000],
                                        ['Los Angeles, CA', 3792000, 3694000],
                                        ['Chicago, IL', 2695000, 2896000],
                                        ['Houston, TX', 2099000, 1953000],
                                        ['Philadelphia, PA', 1526000, 1517000],
                                    ]}
                                    options={{
                                        title: 'Population of Largest U.S. Cities',
                                        chartArea: { width: '50%' },
                                        colors: ["#4466f2", "#1ea6ec"],
                                        hAxis: {
                                            title: 'Total Population',
                                            minValue: 0,
                                        },
                                        vAxis: {
                                            title: 'City',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MaterialDesign}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="Bar"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses', 'Profit'],
                                        ['2014', 1000, 400, 200],
                                        ['2015', 1170, 460, 250],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                    ]}
                                    options={{
                                        // Material design options
                                        colors: ["#4466f2", "#1ea6ec", "#31af47"],
                                        chart: {
                                            title: 'Company Performance',
                                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LineChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'400px'}
                                    chartType="LineChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        ['x', 'dogs', 'cats'],
                                        [0, 0, 0],
                                        [1, 10, 5],
                                        [2, 23, 15],
                                        [3, 17, 9],
                                        [4, 18, 10],
                                        [5, 9, 5],
                                        [6, 11, 3],
                                        [7, 27, 19],
                                    ]}
                                    options={{
                                        hAxis: {
                                            title: 'Time',
                                        },
                                        vAxis: {
                                            title: 'Popularity',
                                        },
                                        colors: ["#4466f2", "#1ea6ec"],
                                        series: {
                                            1: { curveType: 'function' },
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ComboChart}</h5>
                            </div>
                            <div className="card-body">
                                <Chart
                                    width={'100%'}
                                    height={'300px'}
                                    chartType="ComboChart"
                                    loader={<div>{"Loading Chart"}</div>}
                                    data={[
                                        [
                                            'Month',
                                            'Bolivia',
                                            'Ecuador',
                                            'Madagascar',
                                            'Papua New Guinea',
                                            'Rwanda',
                                            'Average',
                                        ],
                                        ['2004/05', 165, 938, 522, 998, 450, 614.6],
                                        ['2005/06', 135, 1120, 599, 1268, 288, 682],
                                        ['2006/07', 157, 1167, 587, 807, 397, 623],
                                        ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                                        ['2008/09', 136, 691, 629, 1026, 366, 569.6],
                                    ]}
                                    options={{
                                        title: 'Monthly Coffee Production by Country',
                                        vAxis: { title: 'Cups' },
                                        hAxis: { title: 'Month' },
                                        seriesType: 'bars',
                                        colors: ["#4466f2", "#1ea6ec", "#22af47", "#FF5370", "#007bff"],
                                        series: { 5: { type: 'line' } },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default GoogleChart;