"use client";

import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

interface FinancialData {
  date: string;
  amount: number;
}

const financialData: FinancialData[] = [
  { date: "1", amount: 500 },
  { date: "2", amount: 800 },
  { date: "3", amount: 1200 },
  { date: "4", amount: 1600 },
  { date: "5", amount: 2000 },
  { date: "6", amount: 1500 },
  { date: "7", amount: 900 },
  { date: "8", amount: 2000 },
  { date: "9", amount: 2500 },
  { date: "10", amount: 3000 },
  { date: "11", amount: 3200 },
  { date: "12", amount: 3200 },
  { date: "13", amount: 3000 },
  { date: "14", amount: 2600 },
  { date: "15", amount: 2200 },
  { date: "16", amount: 1800 },
  { date: "17", amount: 1400 },
  { date: "18", amount: 1300 },
  { date: "19", amount: 1300 },
  { date: "20", amount: 1300 },
  { date: "21", amount: 1600 },
  { date: "22", amount: 2000 },
  { date: "23", amount: 2400 },
  { date: "24", amount: 2800 },
  { date: "25", amount: 3200 },
  { date: "26", amount: 3600 },
  { date: "27", amount: 4000 },
  { date: "28", amount: 3800 },
  { date: "29", amount: 3400 },
  { date: "30", amount: 3000 },
];

const LineChart = () => {
  const data = {
    labels: financialData.map((data, index) =>
      index % 3 === 0 ? data.date : ""
    ),
    datasets: [
      {
        label: "Account Balance",
        data: financialData.map((data) => data.amount),
        borderColor: "#83a2a1",
        borderWidth: 2,
        pointRadius: 1,
        pointBorderColor: "#2C5C5C",
        pointBorderWidth: 0,
        tension: 0.5,
        fill: true,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(131, 162, 161,  0.5)");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
          },
          beginAtZero: true,
          callback: function (value: number, index: any, values: any) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
        title: {
          display: false,
          text: "Amount",
          padding: {
            bottom: 10,
          },
          font: {
            size: 14,
            style: "italic",
            family: "Arial",
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
          autoSkip: false,
        },
        grid: {
          display: false,
        },
        title: {
          display: false,
          text: "Date",
          padding: {
            top: 10,
          },
          font: {
            size: 14,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div>
      <Line
        className="h-full w-full bg-white rounded-xl"
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;
