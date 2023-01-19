import Location from "../../types/location";

const getLocation = async (locationList: Location[], city: string, setMenu: Function, setError: Function, setLocationList: Function): Promise<void> => {
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

export default getLocation;
