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
    <div className="fixed bg-[#131313]/80 w-[100vw] h-[100vh] z-50">
      <RxCrossCircled
        size={40}
        className="text-[#ffffff] absolute z-25 hover:text-cyan-400 mx-8 right-0 my-4 cursor-pointer"
        onClick={() => props.menuFunction(false)}
      />
      <div className="sm:w-[90vw] sm:h-[90vh] md:w-[90vw] md:h-[90vh] lg:w-[40vw] lg:h-[80vh] relative z-50 left-0 right-0 mx-auto top-20 px-4">
        <DailyWeather weather={props.weather} day={props.day} />
      </div>
    </div>
  );
};

export default ShowDailyWeatherMenu;