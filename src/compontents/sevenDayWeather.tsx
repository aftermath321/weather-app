import Weather from "../../types/weather";
import weatherIcon from "./weatherIcons";

const sevenDayWeather = (props: Weather | undefined): JSX.Element[] => {
  let weatherTable = [];
  for (let i = 1; i <= 7; i++) {
    weatherTable.push(
      <li>
        {weatherIcon(props?.daily.weathercode[i - 1])}
        <p>Temperatue at 12:00:</p>
        {props?.hourly.temperature_2m[i * 12]}°C
      </li>
    );
  }
  return weatherTable;
};


export default sevenDayWeather;