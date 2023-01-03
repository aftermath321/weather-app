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
      
      let locationData = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      let locationJSON = await locationData.json();
      if (locationJSON.results) {
        setError(false);
        setLocationList(locationJSON.results);
        setMenu(true);
      } else {
        setError(true);
      }
    }
  };

  const errorMessage = () => {
    if (error == true) {
      return <p className=" text-2xl">Please enter a correct city name!</p>;
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
                  setMenu(false);
                }}
                className="cursor-pointer divide-x-2 divide-black"
              >
                {place.name} {place.population} {place.country}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex-col flex items-center">
      <>{errorMessage()}</>
      <div className="py-8 ">
        <div className="flex w-full h-[10vh] justify-center items-center ">
          <form onSubmit={(e) => e.preventDefault()} className="space-x-4">
            <input
              type="text"
              placeholder="Enter city name..."
              onChange={(e) => setCity(e.target.value)}
              className="h-[40px] border-black border-2 rounded-lg px-2"
            ></input>
            <button
              className="w-[80px] h-[40px] bg-white rounded-lg p-2 border-black border-2 hover:bg-cyan-400 hover:duration-200 hover:shadow-cyan-300 hover:shadow-md"
              onClick={getLocation}
            >
              Search
            </button>
          </form>
        </div>

        <div
          className={
            menu
              ? "border-black border-2 flex justify-center items-center w-[40vw]"
              : "hidden border-none"
          }
        >
          {dropMenu()}
        </div>
      </div>
      <div
        className={
          weather
            ? "w-[80vw] h-[40vh] border-black border-2 rounded-lg flex justify-center items-center"
            : "hidden border-none"
        }
      >
        <div className="w-full h-full text-center grid grid-rows-4 ">
          <ul className="h-full justify-center items-center grid grid-cols-7 row-span-1 border-black border-2 divide-x-2 divide-black">
            <li key={1} className="h-full flex justify-center items-center">
              Day 1
            </li>
            <li key={2} className="h-full flex justify-center items-center">
              Day 2
            </li>
            <li key={3} className="h-full flex justify-center items-center">
              Day 3
            </li>
            <li key={4} className="h-full flex justify-center items-center">
              Day 4
            </li>
            <li key={5} className="h-full flex justify-center items-center">
              Day 5
            </li>
            <li key={6} className="h-full flex justify-center items-center">
              Day 6
            </li>
            <li key={7} className="h-full flex justify-center items-center">
              Day 7
            </li>
          </ul>

          <ul className="h-full grid grid-cols-7 row-span-3 border-black border-2 divide-x-2 divide-black">
            {sevenDayWeather(weather)}
          </ul>
        </div>
      </div>
    </div>
  );
}
