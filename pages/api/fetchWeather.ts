import fetchLocation from "./fetchLocation";

const fetchWeather = () => {
  fetch(
    "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={252a333959339cc025eb75126d55773f}"
  ).then();
};

export default fetchWeather;
