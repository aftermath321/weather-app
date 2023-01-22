import Weather from "../../types/weather";
import { currentTime, currentHour } from "./currentTime";
import weatherIcon from "./weatherIcons";

const SevenDayWeather = (
  props: {fullWeather: Weather | undefined, day: number, menuDay: any},
): JSX.Element => {

  return (
    <li
      key={props.day}
      className="flex-col flex justify-center items-center hover:bg-cyan-400/70 cursor-pointer "
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
