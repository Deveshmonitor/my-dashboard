import React, { useState } from "react";
import Chart from "react-apexcharts";

const ColumnBar = () => {
  // Column chart data and options
  const [columnChartData] = useState({
    series: [
      {
        name: "Sales",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 452, 314],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "Sales (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val}k`,
        },
      },
    },
  });

  // Line chart data and options
  const [lineChartData] = useState({
    series: [
      {
        name: "Revenue",
        data: [31, 40, 28, 51, 42, 109, 100, 50, 60, 75],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "Revenue (thousands)",
        },
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val}k`,
        },
      },
    },
  });

  return (
    <div className="flex justify-between" style={{ textAlign: "center" }}>
      <div  className="w-[50%]">
        <Chart
          options={columnChartData.options}
          series={columnChartData.series}
          type="bar"
          height={250}
        />
      </div>

      <div  className="w-[50%]">

        <Chart
          options={lineChartData.options}
          series={lineChartData.series}
          type="line"
          height={250}
        />
      </div>
    </div>
  );
};

export default ColumnBar;
