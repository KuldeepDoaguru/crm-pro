import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const getCurrentMonthsLabels = () => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const year = date.getFullYear();

  const lastDayOfMonth = new Date(year, currentMonth + 1, 0).getDate();

  return Array.from({ length: lastDayOfMonth }, (_, i) => (i + 1).toString());
};

const generateDummyData = (days) => {
  const SocialData = Array.from({ length: days }, () =>
    Math.floor(Math.random() * 100)
  );
  const DirectData = Array.from({ length: days }, () =>
    Math.floor(Math.random() * 100)
  );

  return { SocialData, DirectData };
};
const labels = getCurrentMonthsLabels();
const { SocialData, DirectData } = generateDummyData(labels.length);

const data = {
  labels: labels,
  datasets: [
    {
      label: "Social",
      data: SocialData,
      backgroundColor: "#55efc4", // Tailwind blue-600
      borderRadius: 5,
      barThickness: 10,
    },
    {
      label: "Direct",
      data: DirectData,
      backgroundColor: "#fdcb6e", // Tailwind purple-600
      borderRadius: 5,
      barThickness: 10,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        borderDash: [8, 4],
      },
    },
  },
};

const SalesAndViews = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Leads Details
          </h2>
          <h2>
            Social Media Leads :{" "}
            <span className="text-xl font-bold text-teal-400">65,127</span>
          </h2>
          <h2>
            Direct Leads :{" "}
            <span className="text-xl font-bold text-amber-500">65,127</span>
          </h2>
        </div>

        <div className="">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default SalesAndViews;
