"use client";
import React, { useId } from "react";
import { Country, City } from "country-state-city";
import Select from "react-select";
import { useRouter } from "next/navigation";

interface IProps {
  selectedCountry: IOptionCountryValue | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<IOptionCountryValue>>;
  selectedCity: IOptionCityValue | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<IOptionCityValue>>;
}

function SelectCountryAndCity({
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
}: IProps) {
  const router = useRouter();

  const countryies = Country.getAllCountries().map((el) => ({
    value: {
      latitude: el.latitude,
      longitude: el.longitude,
      isoCode: el.isoCode,
    },
    label: el.name,
  }));

  const cities = City.getCitiesOfCountry(selectedCountry?.value.isoCode!)?.map(
    (el) => ({
      value: {
        countryCode: el.countryCode,
        latitude: el.latitude,
        longitude: el.longitude,
        name: el.name,
        stateCode: el.stateCode,
      },
      label: el.name,
    })
  );

  const handleSelectCountry = (val: IOptionCountryValue) => {
    setSelectedCountry(val);
    setSelectedCity(null);
  };

  const handleSelectCity = (val: IOptionCityValue) => {
    setSelectedCity(val);
    router.push(
      `/location/${val?.value.name}/${val?.value.latitude}/${val?.value.longitude}`
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <Select
        instanceId={`Country-select-box`}
        placeholder="Select country..."
        value={selectedCountry}
        options={countryies}
        onChange={handleSelectCountry}
        className="cursor-pointer"
      />
      {selectedCountry && (
        <Select
          instanceId={`City-select-box`}
          placeholder="Select city..."
          options={cities}
          value={selectedCity}
          onChange={handleSelectCity}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}

export default SelectCountryAndCity;
