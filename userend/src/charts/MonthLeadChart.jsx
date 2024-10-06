import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MonthLeadChart = () => {
  // Sample data to simulate the monthDataSeries1 object
  const monthDataSeries1 = {
    prices: [8100, 8101, 8102, 8103, 8104, 8105, 8106, 8107],
    dates: [
      "2023-10-19T00:00:00",
      "2023-10-20T00:00:00",
      "2023-10-21T00:00:00",
      "2023-10-22T00:00:00",
      "2023-10-23T00:00:00",
      "2023-10-24T00:00:00",
      "2023-10-25T00:00:00",
      "2023-10-26T00:00:00",
    ],
  };

  // State to manage chart options and series
  const [chartData] = useState({
    series: [
      {
        name: "Leads",
        data: monthDataSeries1.prices,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#b5d5ba"],
        width: 1,
      },
      title: {
        text: "Analysis of Leads",
        align: "left",
      },
      subtitle: {
        text: "Oct-2024",
        align: "left",
      },
      labels: monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#257b53"],
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0.6,
          stops: [0, 100],
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default MonthLeadChart;
