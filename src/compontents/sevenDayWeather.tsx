import Weather from "../../types/weather";
import { currentTime, currentHour } from "./currentTime";
import weatherIcon from "./weatherIcons";

const sevenDayWeather = (props: Weather | undefined): JSX.Element[] => {
  let weatherTable = [];
  for (let i = 1; i <= 7; i++) {
    weatherTable.push(
      <li key={i} className="flex-col flex justify-center items-center">
        {weatherIcon(props?.daily.weathercode[i - 1])}
        <p className="py-8">Temperatue at {currentTime()}</p>
        {props?.hourly.temperature_2m[i * currentHour()]}°C
      </li>
    );
  }
  return weatherTable;
};


export default sevenDayWeather;