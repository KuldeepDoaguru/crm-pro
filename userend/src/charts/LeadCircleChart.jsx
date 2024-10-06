import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LeadCircleChart = () => {
  const [series] = useState([14, 23, 21, 17, 25]);
  const [options] = useState({
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["transparent"],
    },
    fill: {
      opacity: 0.8,
    },
    labels: ["Social Media", "Website", "Email", "Direct", "Sales Team"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="bg-slate-200 p-2 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold">Leads details</h2>
      <div id="chart" className="w-[70%] ml-12">
        <ReactApexChart options={options} series={series} type="polarArea" />
      </div>
      <div id="html-dist"></div>
      <div className="flex justify-center">
        <button className="text-cyan-800 font-bold cursor-pointer hover:text-blue-600">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default LeadCircleChart;
