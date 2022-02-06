function destroyChartInstance(elementId){
  Chart.helpers.each(Chart.instances, function(instance){
    if (instance.chart.canvas.id === elementId)
      instance.destroy();
    });
}

function showBurnDown(elementId, labels, velocidade_ideal, esforco_restante, esforco) {
  destroyChartInstance(elementId);

  var speedCanvas = document.getElementById(elementId);

  Chart.defaults.global.defaultFontFamily = "Arial";
  Chart.defaults.global.defaultFontSize = 12;

  var speedData = {
    labels: labels,
    datasets: [
      {
        label: "Burndown",
        data: esforco_restante,
        fill: false,
        borderColor: "#EE6868",
        backgroundColor: "#EE6868",
        lineTension: 0,
      },
      {
        label: "Ideal",
        borderColor: "#6C8893",
        backgroundColor: "#6C8893",
        lineTension: 0,
        borderDash: [5, 5],
        fill: false,
        data: velocidade_ideal,
      },
      {
        label: "Esforço",
        borderColor: "#7ED850",
        backgroundColor: "#7ED850",
        lineTension: 0,
        borderDash: [5, 5],
        fill: false,
        data: esforco,
      },
    ]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: Math.round(esforco_restante[0] * 1.1)
            }
        }]
    }
  };

  new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });

}
