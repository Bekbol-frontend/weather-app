import React from "react";
import SelectCountryAndCity from "../SelectCountryAndCity/SelectCountryAndCity";
import { weatherCodeToString } from "@/lib/weatherCodeToString";
import Image from "next/image";

interface IProps {
  city: string;
  lat: string;
  long: string;
  data: IWeatherRoot;
}

function Sidebar({ city, lat, long, data }: IProps) {
  const [selectCountry, setSelectCountry] =
    React.useState<IOptionCountryValue>(null);
  const [selectCity, setSelectCity] = React.useState<IOptionCityValue>(null);

  const {
    current_weather: { temperature, weathercode },
  } = data;

  return (
    <div className="flex-[3] py-10 px-5 lg:min-h-screen bg-slate-950 text-[#fff]">
      <div>
        <h1 className=" text-[30px] lg:text-[40px] font-bold mb-2">
          {decodeURI(city)}
        </h1>
        <p className="text-xs text-slate-200 capitalize">
          long/lat {long}, {lat}
        </p>
      </div>
      <div className="mt-5 text-black">
        <SelectCountryAndCity
          selectedCountry={selectCountry}
          setSelectedCountry={setSelectCountry}
          selectedCity={selectCity}
          setSelectedCity={setSelectCity}
        />
      </div>
      <hr className="my-5" />

      <div className="flex items-start flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <p className="text-md mb-2 capitalize">
            {new Date().toLocaleString("ru", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xs">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <h3 className="text-[18px] font-bold">
          {new Date().toLocaleTimeString("uz", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </h3>
      </div>

      <hr className="my-5" />

      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[weathercode].icon}.png`}
            alt={`${weatherCodeToString[weathercode].label}`}
            width={75}
            height={75}
          />
          <h1 className=" text-[30px] lg:text-[40px] font-bold">
            {temperature}°C
          </h1>
          <p className=" text-[15px] lg:text-[20px] font-normal ">
            {weatherCodeToString[weathercode].label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
