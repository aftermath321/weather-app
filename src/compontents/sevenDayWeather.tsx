import Weather from "../../types/weather";
import { currentTime, currentHour } from "./currentTime";
import weatherIcon from "./weatherIcons";

const SevenDayWeather = (
  props: {fullWeather: Weather | undefined, day: number, menuDay: any},
): JSX.Element => {

  return (
    <span
      key={props.day}
      className="flex-col flex justify-center items-center cursor-pointer hover:z-20 "
      onClick={() => props.menuDay(props.day)}
    >
     
      <span className="py-6">
        {weatherIcon(props.fullWeather?.daily?.weathercode[props.day])}
      </span>
      {/* <p className="py-8">{currentTime()}</p> */}
      <p>
        {props.fullWeather?.hourly?.temperature_2m[props.day * currentHour()]}°C
      </p>
    </span>
  );
};

export default SevenDayWeather;
