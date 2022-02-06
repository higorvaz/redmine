function showBurnUp(elementId, labels, total_tarefas, tarefas_concluidas, esforco_realizado) {
  var speedCanvas = document.getElementById(elementId);

  Chart.defaults.global.defaultFontFamily = "Arial";
  Chart.defaults.global.defaultFontSize = 12;

  var speedData = {
    labels: labels,
    datasets: [
      {
        label: "Tarefas concluídas",
        yAxisID: "issue",
        data: tarefas_concluidas,
        borderColor: "#EE6868",
        backgroundColor: "#EE6868",
        fill: true,
        lineTension: 0,
      },
      {
        label: "Total de tarefas",
        yAxisID: "issue",
        borderColor: "#6C8893",
        backgroundColor: "#6C8893",
        lineTension: 0,
        borderDash: [5, 5],
        fill: false,
        data: total_tarefas,
      },
      {
        label: "Esforço realizado",
        yAxisID: "effort",
        borderColor: "#7ED850",
        backgroundColor: "#7ED850",
        lineTension: 0,
        borderDash: [5, 5],
        fill: false,
        data: esforco_realizado,
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
            id: 'issue',
            type: 'linear',
            position: 'left',
            scaleLabel: {
					         display: true,
					         labelString: "Tarefas"}
        }, {
            id: 'effort',
            type: 'linear',
            position: 'right',
            ticks: {
                min: 0,
                max: Math.round(esforco_realizado[esforco_realizado.length-1] * 1.1)
            },
            scaleLabel: {
					         display: true,
					         labelString: "Horas"}
        }]
    }
  };

  new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });

}
