"use client";
import { Card, Title, AreaChart } from "@tremor/react";

interface IProps {
  data: IWeatherRoot;
}

function TempChart({ data }: IProps) {
  const hours = data?.hourly?.time
    .map((hour) =>
      new Date(hour).toLocaleString("en-US", { hour: "numeric", hour12: false })
    )
    .slice(0, 24);

  const chartdata = hours?.map((hour, index) => ({
    hour,
    temperature: data.hourly.temperature_2m[index],
    "UV index": data.hourly.uv_index[index],
  }));

  const dataFormatter = (number: number) => {
    return "°C " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <Card>
      <Title>Temperature {`&`} UV index</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="hour"
        categories={["temperature", "UV index"]}
        colors={["amber", "purple"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default TempChart;
