import { useState } from "react";
import sevenDayWeather from "../src/compontents/sevenDayWeather";
import weatherIcon from "../src/compontents/weatherIcons";
import Weather from "../types/weather";

export default function Home() {
  const [data, setData] = useState<Weather>();

  const getWeather = async () => {
    let weatherData = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&timezone=Europe/London&daily=weathercode&rain_sum&snow_sum&hourly=temperature_2m&hourly=relativehumidity_2m"
    );
    let weatherJSON = await weatherData.json();
    console.log(weatherJSON);
    setData(weatherJSON);
  };

  return (
    <div className="w-screen h-screen bg-red-300">
      <div className="flex w-full h-[150px] justify-center items-center">
        <button
          className="w-[75px] h-[60px]  bg-white rounded-lg p-2 border-black border-2"
          onClick={getWeather}
        >
          Locate me
        </button>
      </div>
      <div className="flex justify-center items-center w-[80%] h-[60%] bg-yellow-300">
        <div className="w-full h-full text-center grid grid-rows-2">
          <ul className="h-[30%] grid grid-cols-7 bg-yellow-900 py-4">
            <li>Day 1</li>
            <li>Day 2</li>
            <li>Day 3</li>
            <li>Day 4</li>
            <li>Day 5</li>
            <li>Day 6</li>
            <li>Day 7</li>
          </ul>
          <ul className="h-full grid grid-cols-7 bg-yellow-500 py-4">
            {sevenDayWeather(data)}
          </ul>
        </div>
      </div>
    </div>
  );
}
