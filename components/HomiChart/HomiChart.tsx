"use client";

import { Card, Title, AreaChart } from "@tremor/react";

interface IProps {
  data: IWeatherRoot;
}

function HomiChart({ data }: IProps) {
  const hours = data?.hourly?.time
    .map((hour) =>
      new Date(hour).toLocaleString("en-US", { hour: "numeric", hour12: false })
    )
    .slice(0, 24);

  const chartdata = hours?.map((hour, index) => ({
    hour,
    Homidity: data.hourly.relativehumidity_2m[index],
  }));

  const dataFormatter = (number: number) => {
    return "% " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <Card>
      <Title>Temperature {`&`} UV index</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="hour"
        categories={["Homidity"]}
        colors={["stone"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default HomiChart;
