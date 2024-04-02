import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function LineGraph() {
  const data = {
    labels: ["40", "60", "80", "100", "120", "140", "160"],

    datasets: [
      {
        labels: "Sales of the week",
        data: [7, 8, 8, 9, 9, 10, 11, 14, 14],
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8",
        pointBorderColor: "#17a2b8",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    Plugin: {
      Legend: true,
    },
    scales: {
      y: {
        min: 6,
        max: 16,
      },
    },
  };

  return (
    <div className="LineGraph">
      <div
        style={{
          width: "900px",
          height: "300px",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineGraph;
