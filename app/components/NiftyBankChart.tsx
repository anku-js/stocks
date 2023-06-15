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

export default function NiftyBankChart({ prev_close, close }:Props) {
  const [niftyBankDataForChart, setNiftyBankDataForChart] = useState<DataForChart[]>([]);

  const closeValue = niftyBankDataForChart.map((data) => data.close);
  const closingDate = niftyBankDataForChart.map((data) => data.date);
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
      "https://portal.tradebrains.in/api/index/BANKNIFTY/prices?days=1&type=INTRADAY"
    )
      .then((res) => res.json())
      .then((data) => setNiftyBankDataForChart(data));
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
