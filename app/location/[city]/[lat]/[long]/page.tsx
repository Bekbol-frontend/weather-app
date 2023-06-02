"use client";
import Location from "@/components/LocationComponent/Location";
import Sidebar from "@/components/Sidebar/Sidebar";
import { notFound } from "next/navigation";

interface IProps {
  city: string;
  lat: string;
  long: string;
}

const getWeather = async (lat: string, long: string) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FMoscow`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default async function WeatherPage({
  params: { city, lat, long },
}: {
  params: IProps;
}) {
  const data = (await getWeather(lat, long)) as IWeatherRoot;

  if (!data) {
    return notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar city={city} lat={lat} long={long} data={data} />
      <Location data={data} />
    </div>
  );
}
