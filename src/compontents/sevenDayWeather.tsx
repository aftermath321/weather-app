import Weather from "../../types/weather";
import { currentTime, currentHour } from "./currentTime";
import weatherIcon from "./weatherIcons";

const SevenDayWeather = (
  props: {fullWeather: Weather | undefined, day: number, menuDay: any},
): JSX.Element => {

  return (
    <li
      key={props.day}
      className="flex-col flex justify-center items-center cursor-pointer  hover:scale-[110%] duration-500 bg-[#ffffff] hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff]"
      onClick={() => props.menuDay(props.day)}
    >
      <span className="py-6">
        {weatherIcon(props.fullWeather?.daily?.weathercode[props.day])}
      </span>
      {/* <p className="py-8">{currentTime()}</p> */}
      <p className="text-[0.8rem]">
        {props.fullWeather?.hourly?.temperature_2m[props.day * currentHour()]}°C
      </p>
    </li>
  );
};

export default SevenDayWeather;
