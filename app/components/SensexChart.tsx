import { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

interface Props {
  prev_close: number,
  close: number
};

interface DataForChart {
  close?: number,
  date?: number
}

export default function SensexChart({prev_close, close}: Props) {
  const [sensexDataForChart, setSensexDataForChart] = useState<DataForChart[]>([]);

  const closeValue = sensexDataForChart.map((data) => data.close);
  const closingDate = sensexDataForChart.map((data) => data.date);
  const chartData = {
    labels: closingDate,
    datasets: [
      {
        label: "",
        data: closeValue.reverse(),
        fill: true,
        backgroundColor:  close > prev_close ? "#2e4659" : "#443344", 
        borderColor: close > prev_close ? "#388680" : "#bc3755",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  useEffect(function () {
    fetch(
      "https://portal.tradebrains.in/api/index/SENSEX/prices?days=1&type=INTRADAY"
    )
      .then((res) => res.json())
      .then((data) => setSensexDataForChart(data));
  }, []);
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              position: "bottom",
            },
            tooltip: {
              usePointStyle: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
