import {BsPeople} from 'react-icons/bs'
import getWeather from '../../pages/api/getWeather';
import Location from '../../types/location';

const DropMenu = (props:  {locations: Location[], menuFunction: Function, weatherFunction: Function}): JSX.Element => {
    return (
      <div className="block h-[60%] relative">
        <ul className="grid grid-rows divide-y-2 divide-black text-[0.8rem] md:w-[60vw]">
          <li className="grid grid-cols-4 text-bold text-xl p-2 text-[1rem] text-bold">
            <span className="col-span-1 flex justify-center items-center ">
              Name
            </span>
            <span className="col-span-1 flex justify-center items-center">
              Population <BsPeople size={30} className="p-1" />
            </span>
            <span className="col-span-1 flex justify-center items-center">
              Admin. unit
            </span>
            <span className="col-span-1 flex justify-center items-center">
              Country
            </span>
          </li>
          {props.locations.map((place, index) => {
            return (
              <li
                key={index}
                onClick={function () {
                  getWeather(place, props.weatherFunction);
                  props.menuFunction(false);
                }}
                className="grid grid-cols-4 cursor-pointer p-2 hover:bg-cyan-400/70"
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


export default DropMenu;
