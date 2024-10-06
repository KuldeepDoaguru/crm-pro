import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SalesFunnel = () => {
  // State to manage chart options and series
  const [chartData] = useState({
    series: [
      {
        name: "Funnel Series",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: "80%",
          isFunnel: true,
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        text: "Sales Funnel",
        align: "middle",
      },
      xaxis: {
        categories: [
          "Awareness",
          "Interest",
          "Consideration",
          "Intent",
          "Evaluation",
          "Purchase",
          "Retention",
          "Advocacy",
        ],
      },
      colors: [
        "#34D399",
        "#60A5FA",
        "#F59E0B",
        "#F87171",
        "#A78BFA",
        "#FB923C",
        "#2DD4BF",
        "#9CA3AF",
      ],
      legend: {
        show: false,
      },
    },
  });

  return (
    <>
      <div className="flex justify-center items-center p-4 bg-gray-100 shadow-xl rounded-xl h-auto">
        <div className="bg-gradient-to-l from-green-200 to-cyan-100 shadow-lg p-6 rounded-lg w-full max-w-lg">
          <div id="chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={350}
            />
          </div>
          <div className="flex justify-center">
            <button className="text-cyan-800 font-bold cursor-pointer hover:text-blue-600">
              View More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesFunnel;
