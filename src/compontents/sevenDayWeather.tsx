import Weather from "../../types/weather";
import { currentTime, currentHour } from "./currentTime";
import weatherIcon from "./weatherIcons";

const SevenDayWeather = (
  props: {fullWeather: Weather | undefined, day: number, menuDay: any},
): JSX.Element => {

  return (
    <li
      key={props.day}
      className="flex-col flex justify-center items-center hover:bg-cyan-400/70 cursor-pointer"
      onClick={() => props.menuDay(props.day)}
    >
      {weatherIcon(props.fullWeather?.daily?.weathercode[props.day])}
      <p className="py-8">Temperatue at {currentTime()}</p>
      {props.fullWeather?.hourly?.temperature_2m[props.day * currentHour()]}°C
    </li>
  );
};

export default SevenDayWeather;
