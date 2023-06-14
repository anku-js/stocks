import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

type StockName = {
  stockName: string;
};

// async function getStocksChart(stockName: StockName) {
//   const res = await fetch(
//     `https://portal.tradebrains.in/api/stock/${stockName}/prices?days=1&type=INTRADAY`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }



export default function StockChart({ stockName, prev_close, close }) {

const [dataForChart, setDataForChart] = useState([])  

  const closeValue = dataForChart.map((data) => data.close);
  const closingDate = dataForChart.map((data) => data.date);
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
        size: 14,
      },
    ],
  };

  useEffect(function () {
    fetch(
        `https://portal.tradebrains.in/api/stock/${stockName}/prices?days=1&type=INTRADAY`
    )
      .then((res) => res.json())
      .then((data) => setDataForChart(data));
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
            colors: {
                enabled: true,
            },          
          },
          scales: {
            x: {
              display: false,              
            },
            y: {
              display: true,
              ticks: {
                font: {
                    size: 14,
                },
            color: "#fff"
            }
            },
          },
        }}
      />
    </div>
  );
}
