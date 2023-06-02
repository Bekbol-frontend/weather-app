"use client";

import { Card, Title, AreaChart } from "@tremor/react";

interface IProps {
  data: IWeatherRoot;
}

function RainChart({ data }: IProps) {
  const hours = data?.hourly?.time
    .map((hour) =>
      new Date(hour).toLocaleString("en-US", { hour: "numeric", hour12: false })
    )
    .slice(0, 24);

  const chartdata = hours?.map((hour, index) => ({
    hour,
    "Rain (%)": data.hourly.precipitation_probability[index],
  }));

  console.log(chartdata);

  const dataFormatter = (number: number) => {
    return "% " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <Card className="my-8">
      <Title>Chances of Rain</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="hour"
        categories={["Rain (%)"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default RainChart;
