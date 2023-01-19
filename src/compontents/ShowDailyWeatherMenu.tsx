import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import Weather from "../../types/weather";
import DailyWeather from "./DailyWeather";

const ShowDailyWeatherMenu = (props: {
  menuFunction: Function;
  weather: Weather | undefined;
  day: number;
}): JSX.Element => {
  return (
    <div className="absolute bg-black/60 w-screen h-screen z-20">
      <RxCrossCircled
        size={40}
        className="text-white absolute z-25 hover:text-cyan-400 right-[20%] top-10 cursor-pointer"
        onClick={()=>props.menuFunction(false)}
      />
      <div className="w-[600px] h-[600px] absolute z-20 left-0 right-0 mx-auto top-20 border-black border-2">
        <DailyWeather weather={props.weather} day={props.day} />
      </div>
    </div>
  );
};

export default ShowDailyWeatherMenu;
