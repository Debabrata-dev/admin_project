import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function graph() {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Therapist",
        data: [12, 19, 3, 8, 17, 28, 7],
        backgroundColor: "#17a2b8",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Client",
        data: [30, 29, 5, 4, 5, 20, 10],
        backgroundColor: "#03254c",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};
  return (
    <div className="App">
      <div
      style={
        {padding: '2px',
        width: '1%'}}>
        <Bar
          data={data}
          options={options}
        ></Bar>
      </div>
    </div>
  );
}

export default graph;


