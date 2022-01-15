export var marketChartData = {
  labels: [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30],
  series: [
    [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30]
  ]
}
export var marketChartOptions = {
  axisX: {
    showGrid: false,
    showLabel: true,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    low: 0,
    showLabel: true,
    offset: 0,
  },
  tooltips: {
    disabled: true
  },
  toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
  chartPadding: {
    bottom: 0,
    top: 0,
    left: 0
  },
  responsive: true,
  height: 200

}

export var EarningChartData = {
  labels: [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30],
  series: [
    [60.00, 110.00, 20.00, 60.00, 100.00, 70, 30.00, 80.00, 80.00, 60.00, 20.00, 70, 0, 80]
  ]
}

export var EarningChartOptions = {
  axisX: {
    showGrid: false,
    showLabel: true,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    low: 0,
    showLabel: true,
    offset: 0,
  },
  tooltips: {
    disabled: true
  },
  toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
  chartPadding: {
    bottom: 0,
    top: 0,
    left: 0
  },
  responsive: true,
  height: 200

}


export const liveData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  series: [
    [1, 5, 2, 5, 4, 3, 6],
  ]
}

export const liveOption = {
  maintainAspectRatio: false,
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true,
  height: 300,
  chartPadding: {
    left: -10,
    bottom: -14,
    right: 0
  }
}


export const turnoverData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  series: [
    [1.9, 4.4, 1.5, 5, 4.4, 3.4],
    [6.4, 5.7, 7, 4, 5.5, 3.5],
    [5, 2.3, 3.6, 6, 3.6, 2.3]
  ]
}

export const turnoverOption = {
  maintainAspectRatio: false,
  animation: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      barPercentage: 0.7,
      categoryPercentage: 0.4
    }],
    yAxes: [{
      barPercentage: 0.7,
      categoryPercentage: 0.4
    }]
  },
  height: 300,
  chartPadding: {
    left: -22,
    bottom: -14,
    right: 0
  }
}

export const MonthlySaleData = {
  labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
  series: [
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
  ],

}

export const MonthlySaleOption = {
  maintainAspectRatio: false,
  stackBars: true,
  animation: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      barPercentage: 0.7,
      categoryPercentage: 0.4
    }],
    yAxes: [{
      barPercentage: 0.7,
      categoryPercentage: 0.4
    }]
  },
  height: 300,
  chartPadding: {
    left: -2,
    bottom: -14,
    right: 0
  }
}

export const usesData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  series: [
    [1, 5, 2, 5, 4, 3],
    [2, 3, 4, 8, 1, 2],
    [5, 4, 3, 2, 1, 0.5]
  ],

}

export const usesOption = {
  maintainAspectRatio: false,
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true,
  height: 300,
  chartPadding: {
    left: -22,
    bottom: -14,
    right: 0
  }
}

export const financeData = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  series: [
    [0, 5, 10, 7, 40, 30, 50],
    [3, 27, 24, 32, 27, 47, 70]
  ]
}


export const financeOption = {
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    low: 0,
    showLabel: false,
    offset: 0,
  },
  chartPadding: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  },
  lineTension: 0,
  lineSmooth: false,
  showArea: true,
  fullWidth: true,
  height: 200,
  showPoint: false,

}

export const orderData = {
  series: [
    [40, 15, 25, 20, 15, 20, 10, 25, 35, 13, 35, 10, 30, 20, 10, 15, 20]
  ]
}


export const orderOption = {
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    low: 0,
    showLabel: false,
    offset: 0,
  },
  chartPadding: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  },
  lineTension: 0,
  lineSmooth: false,
  showArea: true,
  fullWidth: true,
  height: 200,
  showPoint: false,

}

export const skillData = {
  series: [
    [5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20]
  ]
}


export const skillOption = {
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0,
  },
  axisY: {
    showGrid: false,
    low: 0,
    showLabel: false,
    offset: 0,
  },
  chartPadding: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  },
  lineTension: 0,
  lineSmooth: false,
  showArea: true,
  fullWidth: true,
  height: 200,
  showPoint: false,

}

export const browserData = {
  labels: ["safari", "chrome", "mozila", "explor"],
  series: [500, 600, 400, 700]
}


export const browserOption = {
  donut: true,
  donutWidth: 40,
  height: 300,
  donutSolid: true,
  showLabel: false,
}

