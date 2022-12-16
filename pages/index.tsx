import { useState, useEffect } from "react";
import sevenDayWeather from "../src/compontents/sevenDayWeather";
import Weather from "../types/weather";
import Location from "../types/location";

export default function Home() {
  const [weather, setWeather] = useState<Weather>();
  const [city, setCity] = useState<string>("");
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [menu, setMenu] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getWeather = async (place: Location) => {
    let weatherData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${place?.latitude}&longitude=${place?.longitude}&timezone=${place?.timezone}&daily=weathercode&rain_sum&snow_sum&hourly=temperature_2m&hourly=relativehumidity_2m`
    );
    let weatherJSON = await weatherData.json();
    setWeather(weatherJSON);
  };

  const getLocation = async () => {
    if (locationList === undefined || city === "") {
      setMenu(false);
      setError(true);
    } else {
      setError(false);
      let locationData = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      let locationJSON = await locationData.json();
      setLocationList(locationJSON.results);

      setMenu(true);
    }
  };

  const errorMessage = () => {
    if (error == true) {
      return (
        <p className="text-red-500 text-2xl bg-green-500 w-[150px] h-[150px]">
          Please enter a correct city name!
        </p>
      );
    } else {
      return null;
    }
  };

  const dropMenu = () => {
    if (menu == true && locationList !== undefined) {
      return (
        <ul>
          {locationList.map((place, index) => {
            return (
              <li
                key={index}
                onClick={function () {
                  getWeather(place);
                }}
              >
                {place.name} {place.population} {place.country}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-red-300">
      <div className="flex w-full h-[150px] justify-center items-center">
        <>{errorMessage()}</>

        <form onSubmit={(e) => e.preventDefault()}>
          <button
            className="w-[75px] h-[60px] bg-white rounded-lg p-2 border-black border-2"
            onClick={getLocation}
          >
            Locate me
          </button>
          <input type="text" onChange={(e) => setCity(e.target.value)}></input>
        </form>
      </div>
      <div>{dropMenu()}</div>
      <div className="flex justify-center items-center w-[80%] h-[60%] bg-yellow-300">
        <div className="w-full h-full text-center grid grid-rows-2">
          <ul className="h-[30%] grid grid-cols-7 bg-yellow-900 py-4">
            <li key={1}>Day 1</li>
            <li key={2}>Day 2</li>
            <li key={3}>Day 3</li>
            <li key={4}>Day 4</li>
            <li key={5}>Day 5</li>
            <li key={6}>Day 6</li>
            <li key={7}>Day 7</li>
          </ul>
          <ul className="h-full grid grid-cols-7 bg-yellow-500 py-4">
            {sevenDayWeather(weather)}
          </ul>
        </div>
      </div>
    </div>
  );
}
