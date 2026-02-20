import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklyChart({ data }) {
  const chartData = {
    labels: data.map(item => "Week " + item._id),
    datasets: [
      {
        label: "Total Activities",
        data: data.map(item => item.count),
        borderWidth: 2
      }
    ]
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Weekly Activity Trend</h2>
      <Line data={chartData} />
    </div>
  );
}