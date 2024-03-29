type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    windspeed_10m: number[];
    pressure_msl: number[];
    relativehumidity_2m: number[];
    rain: number[];
  };
  daily_units: { time: string; weathercode: number };
  daily: { time: string[]; weathercode: number[] };
};

export default Weather;