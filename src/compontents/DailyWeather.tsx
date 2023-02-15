import React from "react";
import { Line, Bar } from "react-chartjs-2";
import Weather from "../../types/weather";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

const DailyWeather = (props: {
  weather: Weather | undefined;
  day: number;
}): JSX.Element => {
  const data = {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Temperature [°C]",
        data: [
          props.weather?.hourly.temperature_2m[0 + props.day * 24],
          props.weather?.hourly.temperature_2m[1 + props.day * 24],
          props.weather?.hourly.temperature_2m[2 + props.day * 24],
          props.weather?.hourly.temperature_2m[3 + props.day * 24],
          props.weather?.hourly.temperature_2m[4 + props.day * 24],
          props.weather?.hourly.temperature_2m[5 + props.day * 24],
          props.weather?.hourly.temperature_2m[6 + props.day * 24],
          props.weather?.hourly.temperature_2m[7 + props.day * 24],
          props.weather?.hourly.temperature_2m[8 + props.day * 24],
          props.weather?.hourly.temperature_2m[9 + props.day * 24],
          props.weather?.hourly.temperature_2m[10 + props.day * 24],
          props.weather?.hourly.temperature_2m[11 + props.day * 24],
          props.weather?.hourly.temperature_2m[12 + props.day * 24],
          props.weather?.hourly.temperature_2m[13 + props.day * 24],
          props.weather?.hourly.temperature_2m[14 + props.day * 24],
          props.weather?.hourly.temperature_2m[15 + props.day * 24],
          props.weather?.hourly.temperature_2m[16 + props.day * 24],
          props.weather?.hourly.temperature_2m[17 + props.day * 24],
          props.weather?.hourly.temperature_2m[18 + props.day * 24],
          props.weather?.hourly.temperature_2m[19 + props.day * 24],
          props.weather?.hourly.temperature_2m[20 + props.day * 24],
          props.weather?.hourly.temperature_2m[21 + props.day * 24],
          props.weather?.hourly.temperature_2m[22 + props.day * 24],
          props.weather?.hourly.temperature_2m[23 + props.day * 24],
        ],
        yAxisID: "y",
      },
      {
        label: "Rain [mm]",
        data: [
          props.weather?.hourly.rain[0 + props.day * 24],
          props.weather?.hourly.rain[1 + props.day * 24],
          props.weather?.hourly.rain[2 + props.day * 24],
          props.weather?.hourly.rain[3 + props.day * 24],
          props.weather?.hourly.rain[4 + props.day * 24],
          props.weather?.hourly.rain[5 + props.day * 24],
          props.weather?.hourly.rain[6 + props.day * 24],
          props.weather?.hourly.rain[7 + props.day * 24],
          props.weather?.hourly.rain[8 + props.day * 24],
          props.weather?.hourly.rain[9 + props.day * 24],
          props.weather?.hourly.rain[10 + props.day * 24],
          props.weather?.hourly.rain[11 + props.day * 24],
          props.weather?.hourly.rain[12 + props.day * 24],
          props.weather?.hourly.rain[13 + props.day * 24],
          props.weather?.hourly.rain[14 + props.day * 24],
          props.weather?.hourly.rain[15 + props.day * 24],
          props.weather?.hourly.rain[16 + props.day * 24],
          props.weather?.hourly.rain[17 + props.day * 24],
          props.weather?.hourly.rain[18 + props.day * 24],
          props.weather?.hourly.rain[19 + props.day * 24],
          props.weather?.hourly.rain[20 + props.day * 24],
          props.weather?.hourly.rain[21 + props.day * 24],
          props.weather?.hourly.rain[22 + props.day * 24],
          props.weather?.hourly.rain[23 + props.day * 24],
        ],
        borderColor: `rgba(0, 140, 255, 1)`,
        pointBorderColor: "rgba(0, 140, 255,1)",
        backgroundColor: "rgba(0, 140, 255,0.4)",
        pointHoverBackgroundColor: "rgba(0, 140, 255,1)",
        pointHoverBorderColor: "rgba(20, 140, 255,1)",
        pointBackgroundColor: "rgba(20, 140, 255,1)",
        borderCapStyle: "rgba(20, 140, 255,1)",
        type: "bar",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    fill: false,
    lineTension: 0.1,
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 2,
    pointHitRadius: 10,

    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointBorderColor: "rgba(75,192,192,1)",
    pointBackgroundColor: "rgba(75,192,192,1)",
    borderCapStyle: "rgba(75,192,192,1)",
    scales: {
      y: {
        title:{
          text: "Temperature",
          display: true
        },
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        title:{
          text: "Rain",
          display: true
        },
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    // Shows error but works fine, might be library issue. Caused by providing Dataset different options and custom scales in config.
    <Line
      data={data}
      width={300}
      height={300}
      options={options}
      className=" bg-white items-center justify-center"
    />
  );
};

export default DailyWeather;
