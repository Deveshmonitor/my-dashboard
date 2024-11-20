import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const PieDount = () => {
  // Dummy data for the Pie and Donut chart
  const [chartData] = useState({
    series: [44, 55, 13, 43, 22], // Dummy values
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Grapes'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  // Dummy data for Donut chart (uses same data as Pie chart but in donut style)
  const [donutChartData] = useState({
    series: [44, 55, 41, 17, 15], // Dummy values
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Grapes'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div className='flex justify-between' style={{ textAlign: 'center' }}>
   
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="350"
      />

      <Chart
        options={donutChartData.options}
        series={donutChartData.series}
        type="donut"
        width="350"
       
      />
    </div>
  );
};

export default PieDount;
