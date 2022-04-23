import React from "react";
import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = ({ data, backgroundColor }) => {
  const options = {
    animation: {
      animateRotate: 1,
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "#A1B1CA",
        borderColor: "#DEE2EC",
        borderWidth: 1,
        padding: 13,
        usePointStyle: true,
        titleAlign: "center",
        bodyAlign: "center",
        caretSize: 7,
        callbacks: {
          beforeTitle: function (context) {
            return context[0].label;
          },
          label: function (context) {
            return context.formattedValue + "%";
          },
        },
      },
    },
  };
  const chartData = {
    labels: data.map((v) => v.name),
    datasets: [
      {
        data: data.map((v) => v.percent),
        backgroundColor,
        borderWidth: 5,
        cutout: "80%",
      },
    ],
  };

  return <Doughnut options={options} data={chartData} />;
};
