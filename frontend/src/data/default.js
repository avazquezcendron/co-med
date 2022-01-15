import 'chartjs-plugin-datalabels';
import * as Chartist from 'chartist';
import configDB from '../data/customizer/config';

const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

export const chartsmall = {
    showArea: true,
    fullWidth: !0,
    legend: {
        display: false
    },
    axisX: {
        low: 0,
        showLabel: false,
        showGrid: false
    },
    axisY: {
        showLabel: false,
        showGrid: false
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false
        }],
    },
    chartPadding: {
        right: 0,
        left: -40,
        bottom: -30,
    }
}
// product valuation
export const chart1 = {
    height: '100%',
    fullWidth: true,
    chartPadding: {
        right: 8,
        left: -10,
        top: 14,
        bottom: -14,
    }
}

export var chartChartOptions1 = {
    animation: false,
    fullWidth: !0,
    showArea: !0,
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            display: false
        }],
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

//   chart 4
export var productionData = {
    labels: ['2009', '2010', '2011', '2012'],
    series: [
        [0, 6, 2, 6],
        [0, 7, 1, 8]
    ]
}
export var productionOptions = {
    low: 0,
    showArea: true
}

//chart 6
export var calcultionData = {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    series: [
        [0, 2, 1.2, 4, 2, 3, 1.5, 0],
        [0, 1, 2.2, 1.5, 3, 1.5, 2.25, 0]
    ]
}
export var calcultionOptions = {
    low: 0,
    showArea: true,
    fullWidth: !0,
    offset: !0,
    chartPadding: {
        left: -22,
        top: 0,
        right: 0,
        bottom: -14,
    },
    axisY: {
        low: 0,
        scaleMinSpace: 50,
    },
    axisX: {
        showGrid: false
    }
}

// ecommerce page
export const saleData = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
        {
            lagend: 'none',
            data: [0, 2.25, 1.25, 3, 1.25, 2.25, 0],
            borderColor: primary,
            pointBackgroundColor: primary,
            backgroundColor: "transparent",
            fill: 'origin',
        }
    ]
};
export const saleOptions = {
    maintainAspectRatio: false,
    height: 45,
    width: 500,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: true
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export var incomeData = {
    labels: ["", "2009", "2010", "2011", "2012", "2013", "2014"],
    datasets: [
        {
            lagend: 'none',
            data: [20, 33, 20, 50, 20, 33, 20, 0],
            lineTension: 0.05,
            borderColor: primary,
            backgroundColor: "transparent",
            pointBackgroundColor: primary,
            borderWidth: '2',
            fill: 'origin',
        }
    ]
}

export var incomeOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: true
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export var profitData = {
    labels: ["", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [
        {
            lagend: 'none',
            data: [5, 0, 5, 0, 15, 0, 5, 0, 5],
            lineTension: 0.05,
            borderColor: primary,
            pointBackgroundColor: primary,
            borderWidth: '2',
            backgroundColor: "transparent",
            fill: 'origin',
        }
    ]
}

export var profitOptions = {
    maintainAspectRatio: false,
    height: 45,
    width: 500,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: true
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}


export var staticData = {
    labels: ["0", "50", "100", "150", "200", "250", "300", "350"],
    datasets: [
        {
            lagend: 'none',
            data: [1.000000000, 0.642787610, -0.173648178, -0.866025404, -0.939692621, -0.342020143, 0.500000000, 0.984807753],
            borderColor: primary,
            pointBackgroundColor: primary,
            borderWidth: '2',
            backgroundColor: "transparent",
            fill: 'origin',
        }
    ]
}

export var staticOptions = {
    maintainAspectRatio: false,
    height: 45,
    width: 500,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: true
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

//university page

export var earningData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    series: [
        [2, 3, 2.5, 5, 1.5, 4.5, 3, 3.1],
        [3, 3.5, 6, 1.1, 5, 2.5, 3.2, 2]
    ]
}
export var earningOptions = {
    low: 0,
    showArea: true,
    showGrid: true,
    showPoint: false,
    chartPadding: {
        left: -22,
        right: 0,
        bottom: 5,
        top: 12,
    },
    axisX: {
        showGrid: false
    },
    axisY: {
        scaleMinSpace: 40
    }
}

export var staticChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    series: [
        [1.5, 3, 2, 1, 4, 1, 4, 2, 3, 2.5],
        [5, 4.7, 4, 3, 3.3, 3.7, 3, 3.8, 3, 2]
    ]
}
export var staticChartOptions = {
    low: 0,
    fullWidth: !0,
    showArea: true,
    showGrid: true,
    showPoint: false,
    chartPadding: {
        left: -22,
        right: 0,
        bottom: -12,
        top: 12,
    },
    axisX: {
        showGrid: false,
    },
    axisY: {
        scaleMinSpace: 40
    }
}

export var yearChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    series: [
        [1, 2, 1.5, 3, 1.5, 0.8, 1.5, 2],
        [6, 4, 5, 6.5, 3, 2, 5.5, 7]
    ]
}
export var yearChartOptions = {
    low: 0,
    fullWidth: !0,
    showArea: true,
    showGrid: true,
    chartPadding: {
        left: -20,
        right: 0,
        bottom: -12,
        top: 12,
    },
    axisX: {
        showGrid: false,
    },
    axisY: {
        scaleMinSpace: 40
    }
}

export var admissionChartData = {
    labels: ["", "1000", "2000", "3000", "4000", "5000", "6000"],
    datasets: [
        {
            lagend: 'none',
            data: [20, 25, 22, 25, 35, 30, 38, 35, 20],
            lineTension: 0.05,
            borderColor: primary,
            backgroundColor: "rgba(68, 102, 242,0.1)",
            fill: 'origin',
        }
    ]
}

export var admissionChartOptions = {
    maintainAspectRatio: false,
    height: 45,
    width: 500,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: true
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export var htmlChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
    series: [
        [50, 200, 150, 400, 300, 600, 700]
    ]

}
export var htmlChartOptions = {
    low: 0,
    fullWidth: !0,
    showLabel: false,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
    }
}

export var phpChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
    series: [
        [50, 200, 150, 400, 300, 600, 700]
    ]

}
export var phpChartOptions = {
    low: 0,
    fullWidth: !0,
    showLabel: false,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
    }
}

//   crypto page

export var bitcoinChartData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
        [8, 3, 7.5, 4, 7, 4]
    ]
}
export var bitcoinChartOptions = {
    low: 0,
    fullWidth: !0,
    showArea: true,
    chartPadding: {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
    }),
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: -5
    },
    axisY: {
        showGrid: false,
        showLabel: false,
        offset: -20
    }
}

export var tradingChartData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
        [8, 3, 7.5, 4, 7, 4]
    ]
}
export var tradingChartOptions = {
    low: 0,
    fullWidth: !0,
    showArea: true,
    chartPadding: {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
    }),
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: -5
    },
    axisY: {
        showGrid: false,
        showLabel: false,
        offset: -20
    }
}

export var ethereumChartData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
        [8, 3, 7.5, 4, 7, 4]
    ]
}
export var ethereumChartOptions = {
    low: 0,
    fullWidth: !0,
    showArea: true,
    chartPadding: {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
    }),
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: -5
    },
    axisY: {
        showGrid: false,
        showLabel: false,
        offset: -20
    }
}

export var marketChartData = {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    series: [
        [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
        [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]
    ]
}
export var marketChartOption = {
    low: 0,
    fullWidth: !0,
    showArea: true,
    showGrid: true,
    chartPadding: {
        left: -10,
        right: 0,
        bottom: -15,
    },
    axisX: {
        showGrid: false,
    },
}

export var salesChartData = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
        {
            lagend: 'none',
            data: [1, 2.5, 1.5, 3, 1.3, 2, 4, 4.5],
            lineTension: 0.05,
            borderColor: primary,
            borderWidth: '2',
            backgroundColor: "transparent",
            pointBackgroundColor: primary,
            fill: 'origin',
        },
        {
            lagend: 'none',
            data: [0, 1, 0.5, 1, 0.3, 1.6, 1.4, 2],
            lineTension: 0.05,
            borderColor: secondary,
            borderWidth: '2',
            backgroundColor: "transparent",
            pointBackgroundColor: secondary,
            fill: 'origin',
        }
    ]
}
export var salesChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: true
        }],
        yAxes: [{
            scaleMinSpace: 40
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export var doughnutData = {
    labels: ['Bitcoin', 'Ripple', 'Invest'],
    datasets: [
        {
            lagend: 'none',
            data: [40, 8, 10],
            borderColor: [primary, '#f6f6f6', secondary],
            backgroundColor: [primary, '#f6f6f6', secondary],
            fill: 'origin',
        }
    ]
}
export var doughnutOptions = {
    maintainAspectRatio: true,
    elements: {
        point: {
            hoverRadius: 7,
            radius: 5
        }
    },
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

//server page
export const buyData = {
    labels: ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min.", "60 min.", "70 min.", "80 min.", "90 min.", "100 min"],
    datasets: [{
        backgroundColor: "transparent",
        borderColor: primary,
        borderWidth: 2,
        pointBackgroundColor: primary,
        data: [0, 59, 80, 40, 100, 60, 95, 20, 70, 40, 70],
    },
    {
        backgroundColor: "transparent",
        borderColor: secondary,
        borderWidth: 2,
        pointBackgroundColor: secondary,
        data: [0, 48, 30, 19, 86, 27, 90, 60, 30, 70, 40],
    },
    {
        backgroundColor: "transparent",
        borderColor: "#31ae47",
        borderWidth: 2,
        pointBackgroundColor: '#31ae47',
        data: [0, 30, 40, 10, 60, 40, 70, 30, 20, 80, 50],
    }]
}
export const buyOption = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: '#e5e5e5'
            },
        }],
        yAxes: [{
            gridLines: {
                color: '#e5e5e5'
            },

        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export var cpuChartData = {
    labels: ["", "2009", "2010", "2011", "2012", "2013", "2014"],
    datasets: [{
        backgroundColor: "transparent",
        borderColor: primary,
        data: [],
    }]
}

export var cpuChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 0
        }
    },
    scales: {
        xAxes: [{
            display: false,
            type: 'realtime',
            realtime: {
                delay: 1000,
                duration: 50000,
                refresh: 1000,
            },
        }],
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                fixedStepSize: 10,
                precision: 0
            }
        }]
    }
}

//Project page

//home tabset
export var taskChartData = {
    labels: ['Frontend', 'Backend', 'Api', 'Issues'],
    datasets: [
        {
            lagend: 'none',
            data: [300, 50, 100],
            borderColor: [primary, '#f85370', secondary],
            backgroundColor: [primary, '#f85370', secondary],
            fill: 'origin',
        }
    ]
}
export var taskChartOptions = {
    maintainAspectRatio: true,
    tooltips: {
        bodyFontSize: 16,
    },
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

export const projectsmall = {
    showArea: true,
    fullWidth: !0,
    legend: {
        display: false
    },
    axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showLabel: false,
        showGrid: false,
        offset: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false
        }],
    },
    chartPadding: {
        right: 0,
        left: 0,
        bottom: 0,
    }
}
export const projectsmall1 = {
    showArea: true,
    fullWidth: !0,
    legend: {
        display: false
    },
    low: 0,
    axisX: {
        low: 0,
        showLabel: false,
        showGrid: false,
        offset: -5
    },
    axisY: {
        low: 0,
        showLabel: false,
        showGrid: false,
        offset: -5
    },
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false
        }],
    },
    chartPadding: {
        right: 0,
        left: 0,
        bottom: 0,
    }
}

export var barChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [3, 3, 0, 2, 0, 3, 0],
            borderColor: primary,
            backgroundColor: primary,
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [2, 0, 1.5, 0, 3.5, 2, 2],
            borderColor: secondary,
            backgroundColor: secondary,
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export var barChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true,
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

//budget tabset
export var pieChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            lagend: 'none',
            data: [15, 10, 15, 20, 25, 20, 10],
            borderColor: [primary, secondary, '#22af47', '#007bff', '#FF5370', '#22af47', '#ff9f40'],
            backgroundColor: [primary, secondary, '#22af47', '#007bff', '#FF5370', '#22af47', '#ff9f40'],
            fill: 'origin',
        }
    ]
}

export var pieChartOption = {
    maintainAspectRatio: true,
    showLabel: true,
    legend: {
        display: false,
        position: 'right',
    },
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                   return sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
            },
            color: '#fff',
        }
    }
}

export var spentChart1Data = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        series: [
            [5, 7, 3, 5, 2, 3, 9, 6, 5, 9],
            [5, 3, 5, 2, 5, 3, 3, 9, 6, 5],
            [9, 2, 9, 6, 5, 9, 7, 3, 5, 2]
        ]
    },
    options: {
        low: 0,
        fullWidth: !0,
        showLabel: false,
        seriesBarDistance: 13.5,
        chartPadding: {
            top: 0,
            bottom: 0
        },
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
        },
        axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 767px)",
            {
                seriesBarDistance: 22.4,
            }
        ],
        [
            "screen and (max-width: 360px)",
            {
                seriesBarDistance: 8,
            }
        ]
    ]
}
export var spentChart2Data = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        series: [
            [5, 7, 3, 5, 2, 3, 9, 6, 5, 9],
            [5, 3, 5, 2, 5, 3, 3, 9, 6, 5],
            [9, 7, 9, 6, 5, 9, 7, 3, 5, 2]
        ]
    },
    options: {
        low: 0,
        fullWidth: !0,
        showLabel: false,
        seriesBarDistance: 13.5,
        chartPadding: {
            top: 0,
            bottom: 0
        },
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
        },
        axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 767px)",
            {
                seriesBarDistance: 22.4,
            }
        ],
        [
            "screen and (max-width: 360px)",
            {
                seriesBarDistance: 8,
            }
        ]
    ]
}
export var spentChart3Data = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        series: [
            [9, 7, 3, 5, 2, 5, 3, 5, 3, 9],
            [6, 5, 9, 3, 5, 2, 5, 3, 6, 5],
            [9, 7, 9, 2, 5, 3, 7, 9, 5, 6]
        ]
    },
    options: {
        low: 0,
        fullWidth: !0,
        showLabel: false,
        seriesBarDistance: 13.5,
        chartPadding: {
            top: 0,
            bottom: 0
        },
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
        },
        axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 767px)",
            {
                seriesBarDistance: 22.4,
            }
        ],
        [
            "screen and (max-width: 360px)",
            {
                seriesBarDistance: 8,
            }
        ]
    ]
}