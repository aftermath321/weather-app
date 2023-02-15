import Weather from "../../types/weather";
import { currentTime, currentHour } from "./currentTime";
import weatherIcon from "./weatherIcons";

const SevenDayWeather = (props: {
  fullWeather: Weather | undefined;
  day: number;
  menuDay: any;
}): JSX.Element => {
  return (
    <span
      key={props.day}
      className="flex-col flex justify-center items-center cursor-pointer hover:z-20 "
      onClick={() => props.menuDay(props.day)}
    >
      <span className="py-6">
        {weatherIcon(props.fullWeather?.daily?.weathercode[props.day])}
      </span>
      <p>
        <span className="font-bold text-xl">
          {props.fullWeather?.hourly?.temperature_2m[props.day * currentHour()]}
          °C
        </span>
        <br />
        {
          props.fullWeather?.hourly?.windspeed_10m[props.day * currentHour()]
        }{" "}
        km/h
        <br />
        {props.fullWeather?.hourly?.pressure_msl[props.day * currentHour()]} hPa
        <br />
        {
          props.fullWeather?.hourly?.relativehumidity_2m[
            props.day * currentHour()
          ]
        }
        %
      </p>
    </span>
  );
};

export default SevenDayWeather;
