import { useState } from "react";
import getLocation from "./api/getLocation";
import Weather from "../types/weather";
import Location from "../types/location";
import SevenDayWeather from "../src/compontents/sevenDayWeather";
import DropMenu from "../src/compontents/DropMenu";
import ShowDailyWeatherMenu from "../src/compontents/ShowDailyWeatherMenu";

export default function Home() {
  const [weather, setWeather] = useState<Weather>();
  const [city, setCity] = useState<string>("");
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [menu, setMenu] = useState<boolean>(false);
  const [dailyWeatherMenu, setDailyWeatherMenu] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [chosenDay, setChosenDay] = useState<number>(0);

  const errorMessage = () => {
    if (error == true) {
      return <p className="absolute z-50 text-2xl  text-red-400 text-bold">Please enter a correct city name!</p>;
    } else {
      return null;
    }
  };

  const dropMenu = () => {
    if (menu == true && locationList !== undefined) {
      return (
        <DropMenu
          locations={locationList}
          menuFunction={setMenu}
          weatherFunction={setWeather}
        />
      );
    }
  };

  const handleDailyWeatherMenu = () => {
    setDailyWeatherMenu((prevValue) => !prevValue);
  };

  const setDayMenu = (dayNumber: number) => {
    setChosenDay(dayNumber);
  };

  const showDailyWeatherMenu = () => {
    if (dailyWeatherMenu) {
      return (
        <ShowDailyWeatherMenu
          menuFunction={handleDailyWeatherMenu}
          weather={weather}
          day={chosenDay}
        />
      );
    }
  };

  return (
    <div className="w-screen h-screen flex-col flex items-center">
      <video
        autoPlay
        muted
        loop
        className="w-[100%] h-[100%] inset-0 fixed bg-cover object-cover"
      >
        <source src="background.mp4" type="video/mp4" />
      </video>

      <>{showDailyWeatherMenu()}</>
      <>{errorMessage()}</>

      <div className="py-8 z-10">
        <div className="flex w-full h-[10vh] justify-center items-center ">
          <form onSubmit={(e) => e.preventDefault()} className="space-x-4">
            <input
              type="text"
              placeholder="Enter city name..."
              onChange={(e) => setCity(e.target.value)}
              className="h-[40px] border-[#131313] border-2 rounded-lg px-2 focus:border-cyan-400"
            ></input>
            <button
              className="w-[80px] h-[40px] bg-white rounded-lg p-2 border-[#131313] border-2 hover:bg-cyan-400 hover:duration-200  hover:shadow-md"
              onClick={() =>
                getLocation(
                  locationList,
                  city,
                  setMenu,
                  setError,
                  setLocationList
                )
              }
            >
              Search
            </button>
          </form>
        </div>

        <div
          className={
            menu
              ? "border-[#131313] border-2 flex justify-center items-center mx-2 text-[0.8rem] bg-white rounded-lg "
              : "hidden border-none"
          }
        >
          {dropMenu()}
        </div>
      </div>
      <div
        className={
          weather
            ? "w-[100vw] h-[40vh] rounded-lg flex justify-center items-center"
            : "hidden border-none"
        }
      >
        <div className="text-center grid grid-rows-4 z-10 bg-white my-4 md:w-[60vw] mx-4">
          <ul className="h-full justify-center items-center grid grid-cols-7 row-span-1 border-[#131313] border-2 divide-x-2 divide-[#131313]">
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
            className="h-full grid grid-cols-7 row-span-3 min-h-full min-w-full border-[#131313] border-2 divide-x-2 divide-[#131313]"
            onClick={handleDailyWeatherMenu}
          >
            <SevenDayWeather
              fullWeather={weather}
              day={0}
              menuDay={setDayMenu}
            />
            <SevenDayWeather
              fullWeather={weather}
              day={1}
              menuDay={setDayMenu}
            />
            <SevenDayWeather
              fullWeather={weather}
              day={2}
              menuDay={setDayMenu}
            />
            <SevenDayWeather
              fullWeather={weather}
              day={3}
              menuDay={setDayMenu}
            />
            <SevenDayWeather
              fullWeather={weather}
              day={4}
              menuDay={setDayMenu}
            />
            <SevenDayWeather
              fullWeather={weather}
              day={5}
              menuDay={setDayMenu}
            />
            <SevenDayWeather
              fullWeather={weather}
              day={6}
              menuDay={setDayMenu}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
