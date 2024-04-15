"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Nav from "@/components/Nav";
import { CardType, PassedProps } from "@/lib/sharedTypes";
import { useState } from "react";

export default function HomeBlock({ countries }: PassedProps) {
  const [filteredCountries, setFilteredCountries] = useState<CardType[]>([]);

  const handleSelectedValues = (newValues: string[]) => {
    setFilteredCountries(
      countries.filter((country) => newValues.includes(country.name)),
    );
  };

  const CountriesCard = () => {
    return filteredCountries?.map((country, index) => {
      const name = country?.name;
      const articles = country?.articles;
      const cardProps = { name, articles } as CardType;
      return <Card props={cardProps} key={index} />;
    });
  };

  return (
    <>
      <Nav />
      <Dropdown
        countries={countries}
        onSelectedValuesChange={handleSelectedValues}
      />
      <div className="flex flex-col sm:flex-row justify-center pt-14">
        <CountriesCard />
      </div>
    </>
  );
}
