import { useState } from "react";
import getLocation from "./api/getLocation";
import Weather from "../types/weather";
import Location from "../types/location";
import SevenDayWeather from "../src/compontents/sevenDayWeather";
import DropMenu from "../src/compontents/DropMenu";
import ShowDailyWeatherMenu from "../src/compontents/ShowDailyWeatherMenu";
// import Logo from "../../public/logo.png";
import Image from "next/image";

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
      return (
        <p className="z-50 text-2xl animate-pulse text-[#d33333] text-bold">
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
    <div className="w-screen h-[100vh] flex-col flex items-center">
      {/* <video
        autoPlay
        muted
        loop
        className="w-[100%] h-[100%] inset-0 fixed bg-cover object-cover"
      >
        <source src="background.mp4" type="video/mp4" />
      </video> */}

      <>{showDailyWeatherMenu()}</>
      {/* Main hud */}
      <div className="flex flex-col z-10  h-[100%] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] padding-4 ">
        <Image src="/logo.png" alt="logo" width={150} height={150} id="logo" />

        <div className="py-2 md:py-8 z-10 m-2 md:m-4">
          <div className="flex-col left-0 right-0 mx-auto justify-center items-center flex">
            <>{errorMessage()}</>

            {/* FORM */}
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Enter city name..."
                onChange={(e) => setCity(e.target.value)}
                className="w-[250px] h-[50px] border-[#13131336] outline-none shadow-md border-solid border-2 rounded-xl px-2 focus:bg-[#e7e7e7] focus:outline-[#00eeff]"
              />
              <button
                className="w-[100px] h-[50px] mx-2
              bg-gradient-to-tr from-[#00eeff] to-[#008cff] 
              active:translate-y-1 active:shadow-lg active:duration-100
              rounded-xl p-2  border shadow-xl text-[#fff]
              "
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
                ? "border-[#131313]  flex justify-center items-center mx-2 text-[0.8rem] rounded-lg "
                : "hidden border-none"
            }
          >
            {dropMenu()}
          </div>

          <div
            className={
              weather
                ? "w-[100%] rounded-lg flex justify-center items-center  my-4"
                : "hidden border-none"
            }
          >
            <div className="text-center z-10">
              <ul className="justify-center items-center rounded-t-lg grid md:grid-cols-4 grid-cols-2 lg:grid-cols-7 gap-4">
                <li
                  key={1}
                  className="width-[150px] grid grid-rows-4 hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className="row-span-1 h-full">Day 1</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={0}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
                <li
                  key={2}
                  className="width-[150px] grid grid-rows-4  hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className=" h-full row-span-1">Day 2</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={1}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
                <li
                  key={3}
                  className="grid grid-rows-4  hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className="h-full row-span-1">Day 3</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={2}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
                <li
                  key={4}
                  className="grid grid-rows-4  hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className="h-full row-span-1">Day 4</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={3}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
                <li
                  key={5}
                  className="grid grid-rows-4  hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className="h-full row-span-1">Day 5</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={4}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
                <li
                  key={6}
                  className="grid grid-rows-4  hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className="h-full row-span-1">Day 6</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={5}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
                <li
                  key={7}
                  className="grid grid-rows-4  hover:scale-[110%] duration-500  hover:bg-gradient-to-t hover:from-[#00eeff] hover:to-[#008cff] text-[#fff] shadow-xl"
                  onClick={handleDailyWeatherMenu}
                >
                  <div className="h-full row-span-1">Day 7</div>
                  <div className="row-span-3">
                    <SevenDayWeather
                      fullWeather={weather}
                      day={6}
                      menuDay={setDayMenu}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
