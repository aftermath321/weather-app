import Location from "../../types/location";

const getWeather = async (place: Location, setWeather: Function) => {
  let weatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${place?.latitude}&longitude=${place?.longitude}&timezone=${place?.timezone}&daily=weathercode&rain_sum&snow_sum&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m&hourly=pressure_msl`
  );
  let weatherJSON = await weatherData.json();
  console.log(weatherJSON)
  setWeather(weatherJSON);
};
 export default getWeather;