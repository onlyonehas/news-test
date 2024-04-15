"use client";
import { CardType } from "@/lib/sharedTypes";
import { useEffect, useRef, useState } from "react";

export interface DropdownType {
  countries: CardType[];
  onSelectedValuesChange: (newValues: string[]) => void;
}

export default function Dropdown({
  countries,
  onSelectedValuesChange,
}: DropdownType) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current != null &&
        !dropdownRef?.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    const isSelected = selectedValues.includes(value);
    const filterSelectValues = selectedValues.filter((item) => item !== value);

    if (isSelected) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
      onSelectedValuesChange(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
      onSelectedValuesChange([...selectedValues, value]);
    }
  };

  const DisplayList = () => {
    const list = countries.map((country) => {
      return (
        <li key={country.name}>
          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input
              id={`checkbox-${country.name}`}
              type="checkbox"
              value={country.name}
              checked={selectedValues.includes(country.name)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor={`checkbox-${country.name}`}
              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
              {country.name}
            </label>
          </div>
        </li>
      );
    });

    const ul = (
      <ul
        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownBgHoverButton"
      >
        {list ? list : <li>Loading ...</li>}
      </ul>
    );
    return ul;
  };

  return (
    <div
      onClick={() => {
        setIsOpen(true);
      }}
      className="flex flex-col items-center pt-6"
    >
      <p className="lg:text-4xl items-center text-2xl font-extrabold">
        TOP HEADLINES FROM..
      </p>
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selectedValues.length > 0
          ? `${[...selectedValues]} Selected`
          : `Select Country`}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdownBgHover"
          className="z-10 w-48 bg-white rounded-lg shadow dark:bg-gray-700"
          ref={dropdownRef}
        >
          <DisplayList />
        </div>
      )}
    </div>
  );
}
