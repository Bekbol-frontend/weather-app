"use client";
import React from "react";
import TempChart from "../TempChart/TempChart";
import { Card, Metric, Text } from "@tremor/react";
import RainChart from "../RainChart/RainChart";
import HomiChart from "../HomiChart/HomiChart";

interface IProps {
  data: IWeatherRoot;
}

export default function Location({ data }: IProps) {
  const {
    daily: { temperature_2m_max, temperature_2m_min },
    daily_units: { temperature_2m_max: cel },
    elevation,
    current_weather: { windspeed, winddirection },
  } = data;

  let maxTemp = temperature_2m_max[0];
  let minTemp = temperature_2m_min[0];

  for (let i = 1; i < temperature_2m_max.length; i++) {
    if (maxTemp < temperature_2m_max[i]) {
      maxTemp = temperature_2m_max[i];
    }
  }

  for (let i = 1; i < temperature_2m_min.length; i++) {
    if (temperature_2m_min[i] < minTemp) {
      minTemp = temperature_2m_min[i];
    }
  }

  return (
    <div className="p-10 flex-[10] lg:min-h-screen bg-slate-100">
      <div className="flex flex-col gap-1 mb-5">
        <h1 className="capitalize text-[28px] font-bold text-[#111]">
          today overview
        </h1>
        <div className="text-[#b1b1b1]">
          Last updated at: {new Date().toLocaleString("ru", {})}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div>
          <Card className="flex-1" decoration="top" decorationColor="emerald">
            <Text>Maximum Temperature</Text>
            <Metric>{`${maxTemp} ${cel}`}</Metric>
          </Card>
        </div>
        <div>
          <Card className="flex-1" decoration="top" decorationColor="indigo">
            <Text>Minimum Temperature</Text>
            <Metric>{`${temperature_2m_min[0]} ${cel}`}</Metric>
          </Card>
        </div>
        <div>
          <Card className="flex-1" decoration="top" decorationColor="orange">
            <Text>Elevation</Text>
            <Metric>{elevation}</Metric>
          </Card>
        </div>
        <div className="flex gap-3 flex-col md:flex-row ">
          <Card className="flex-1" decoration="top" decorationColor="pink">
            <Text>Wind Speed</Text>
            <Metric>{windspeed} m/s</Metric>
          </Card>
          <Card className="flex-1" decoration="top" decorationColor="pink">
            <Text>Wind Direction</Text>
            <Metric>{winddirection}°</Metric>
          </Card>
        </div>
      </div>

      <hr className="my-10" />

      <TempChart data={data} />
      <RainChart data={data} />
      <HomiChart data={data} />
    </div>
  );
}
