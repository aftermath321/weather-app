const fetchLocation = (props: string) => {
  fetch("https://geocoding-api.open-meteo.com/v1/search?name=Ringsted")
    .then((response) => response.json())
    .then((location) => {
      console.log(location);
      return location;
    })
    .catch((err) => console.log(err));
};
export default fetchLocation;
