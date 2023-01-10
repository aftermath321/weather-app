import { useState, useEffect } from "react";
import sevenDayWeather from "../src/compontents/sevenDayWeather";
import Weather from "../types/weather";
import Location from "../types/location";
import { BsPeople } from "react-icons/bs";
import { stringify } from "querystring";
import dailyWeather from "../src/compontents/dailyWeather";
import { RxCrossCircled } from "react-icons/rx";

type Flag = {
  country: string;
  country_code: string;
};

export default function Home() {
  const [weather, setWeather] = useState<Weather>();
  const [city, setCity] = useState<string>("");
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [menu, setMenu] = useState<boolean>(false);
  const [dailyWeatherMenu, setDailyWeatherMenu] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [flags, setFlags] = useState<string[]>([]);

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

        //      Fetching all the flags with flag codes
        // addFlag(locationJSON.results);
        // fetchFlags();
      } else {
        setError(true);
      }
    }
  };
  const addFlag = (locations: Location[]) => {
    let flagArray: string[] = [];

    for (let i = 0; i < locations.length; i++) {
      flagArray.push(locations[i].country_code);
    }

    let uniqueFlags = new Set(flagArray);

    if (uniqueFlags.size >= 1) {
      setFlags([...uniqueFlags]);
    }
  };
  // Function used to fetch all the flags depending on the Flag state (all the country codes are fetched)
  const fetchFlags = async () => {
    for (let i = 0; i < flags.length; i++) {
      let flag = fetch(`https://countryflagsapi.com/png/${flags[i]}`);
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
        <div className="block w-[100%] h-[40%] relative">
          <ul className="grid grid-rows divide-y-2 divide-black">
            <li className="grid grid-cols-4 text-bold text-xl p-2  ">
              <span className="col-span-1 flex justify-center items-center">
                Name
              </span>
              <span className="col-span-1 flex justify-center items-center">
                Population <BsPeople size={40} className="p-2" />
              </span>
              <span className="col-span-1 flex justify-center items-center">
                Admin. unit
              </span>
              <span className="col-span-1 flex justify-center items-center">
                Country
              </span>
            </li>
            {locationList.map((place, index) => {
              return (
                <li
                  key={index}
                  onClick={function () {
                    getWeather(place);
                    setMenu(false);
                  }}
                  className="grid grid-cols-4 cursor-pointer p-2"
                >
                  <span className="col-span-1 flex justify-center items-center">
                    {place.name}
                  </span>
                  <span className="col-span-1 flex justify-center items-center">
                    {place.population}
                  </span>
                  <span className="col-span-1 flex justify-center items-center">
                    {place.admin1}
                  </span>
                  <span className="col-span-1 flex justify-center items-center">
                    {place.country}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  const handleDailyWeatherMenu = () => {
    setDailyWeatherMenu((prevValue) => !prevValue);
  };

  const showDailyWeatherMenu = () => {
    if (dailyWeatherMenu) {
      return (
        <div className="absolute bg-black/70 w-screen h-screen">
          <RxCrossCircled
            size={40}
            className="text-white absolute z-1 hover:text-cyan-400 right-[30%] top-10"
            onClick={() => setDailyWeatherMenu(false)}
          />
          <div className="w-[600px] h-[600px] absolute left-0 right-0 mx-auto top-20">
            {dailyWeather(weather?.hourly.temperature_2m)}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex-col flex items-center">
      <>{showDailyWeatherMenu()}</>
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
              ? "border-black border-2 flex justify-center items-center w-[60vw]"
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

          <ul
            className="h-full grid grid-cols-7 row-span-3 border-black border-2 divide-x-2 divide-black"
            onClick={handleDailyWeatherMenu}
          >
            {sevenDayWeather(weather)}
          </ul>
        </div>
      </div>
    </div>
  );
}
