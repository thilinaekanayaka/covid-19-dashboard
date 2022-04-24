import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const axios = require('axios');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const dataset = [18, 5, 19, 27, 29, 19, 20];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataset,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      maxBarThickness: 40
    },
    // {
    //   label: 'Dataset 2',
    //   data: [18, 5, 19, 27, 29, 19, 20],
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export const Dashboard = () => {
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
      .then((response) => {
        console.log("reponse", response);

        const labels = [];
        response.data.Countries.map((country) => {
          labels.push(country.Country)
        });

        console.log("labels", labels);

      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return <Bar options={options} data={data} />;
}
