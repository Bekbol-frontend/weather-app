"use client";
import React from "react";
import { Card, Title, Text, Divider } from "@tremor/react";
import SelectCountryAndCity from "../SelectCountryAndCity/SelectCountryAndCity";

export default function HomeComponent() {
  const [selectedCountry, setSelectedCountry] =
    React.useState<IOptionCountryValue>(null);
  const [selectedCity, setSelectedCity] =
    React.useState<IOptionCityValue>(null);

  return (
    <Card className="max-w-7xl text-center">
      <Title className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
        Weather AI
      </Title>
      <Text className="md:text-lg lg:text-xl">
        Powered by OpenAI, Next.js 13.4, Tailwind CSS, Tremor 2.0 + More!
      </Text>
      <Divider />
      <Card className="bg-gradient-to-br from-[#394f68] to-[#183b7e] ">
        <SelectCountryAndCity
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </Card>
    </Card>
  );
}
