import fetchLocation from "./fetchLocation";

const fetchWeather = () => {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&hourly=temperature_2m"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};
export default fetchLocation;
