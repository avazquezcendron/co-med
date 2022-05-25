export var barChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: "#4466f2",
            backgroundColor: "rgba(68, 102, 242, 0.4)",
            highlightFill: "rgba(68, 102, 242, 0.95)",
            highlightStroke: "#4466f2",
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: "#2ca6ec",
            backgroundColor: "rgba(30, 166, 236, 0.4)",
            highlightFill: "rgba(30, 166, 236, 0.95)",
            highlightStroke: "#2ca6ec",
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
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export var lineChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            data: [10, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(68, 102, 242, 0.3)',
            borderColor: "#4466f2",
            borderWidth: 2,
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: 'rgba(30, 166, 236, 0.3)',
            borderColor: "#1ea6ec",
            borderWidth: 2,
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export var lineChartOptions = {
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

export const data = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(68, 102, 242, 0.4)',
            borderColor: '#4466f2',
            pointBackgroundColor: 'rgba(68, 102, 242, 0.4)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(68, 102, 242, 0.4)',
            data:[12, 3, 5, 18, 7]
        }
    ]
};

export const lineChart2Data = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [{
        backgroundColor: 'rgba(68, 102, 242, 0.3)',
        borderColor: "#4466f2",
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        lineTension: 0,
    }, 
    {
        backgroundColor: 'rgba(30, 166, 236, 0.3)',
        borderColor: "#1ea6ec",
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        lineTension: 0,
    },
    {
        backgroundColor: 'rgba(68, 102, 242, 0.4)',
        borderColor: "#4466f2",
        data: [60, 10, 40, 30, 80, 30, 20, 90],
        lineTension: 0,
    }
]
}
export const lineChart2option = {
    maintainAspectRatio: false,
    animation: {
        duration: 0 
    },
    legend: {
        display: false,
    },
    scaleShowVerticalLines: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

export const doughnutData = {
    labels:['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
        data:[350, 450, 100],
        backgroundColor: ["#4466f2", "#1ea6ec", "#FF5370"]
    }]
}
export const doughnutOption = {
    maintainAspectRatio: false,
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

export const polarData ={
    labels:['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
    datasets: [
        {
            data: [300, 500, 100, 40, 120],
            backgroundColor:["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff2046"]
        },
        
],
}

export const polarOption = {
    legend: {
        display: false,
    },
}


