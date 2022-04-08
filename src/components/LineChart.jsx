import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];



const len = coinHistory?.data?.history?.length;
  const yLen = coinHistory?.data?.history?.length;
  for (let i = len-1; i > 0; i--) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  for (let i = yLen-1; i > 0; i--) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
  }

  for (let i = yLen-1; i > 0; i--) {
      console.log(new Date(coinHistory?.data?.history[i].timestamp*1000));
  }


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="w-full h-">
        <div className="">{coinName} Price Chart </div>
        <div className="">
          <div className="">Change: {coinHistory?.data?.change}%</div>
          <div  className="current-price">Current {coinName} Price: $ {currentPrice}</div>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;