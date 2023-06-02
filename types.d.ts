type IOptionCountryValue = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type IOptionCityValue = {
  value: {
    countryCode: string;
    latitude: string | null | undefined;
    longitude: string | null | undefined;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

// ------------------------------------------------ Type Weather
interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  dewpoint_2m: string;
  apparent_temperature: string;
  precipitation_probability: string;
  uv_index: string;
  uv_index_clear_sky: string;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  dewpoint_2m: number[];
  apparent_temperature: number[];
  precipitation_probability: number[];
  uv_index: number[];
  uv_index_clear_sky: number[];
}

interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

interface Daily {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

interface IWeatherRoot {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily_units: DailyUnits;
  daily: Daily;
}
