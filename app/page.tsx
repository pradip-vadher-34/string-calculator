"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {
  const [stringValues, setStringValues] = useState<string>("");
  const [sumValue, setSumValue] = useState<number | string>("");

  const handleOnChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setStringValues(value);
  };

  const handleCalculate = () => {
    const valueArray = stringValues.split(",").map(Number);
    const numberSum = valueArray.reduce((total, value) => total + value, 0);
    setSumValue(numberSum);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-bold text-gray-800">String Calculator</h2>
        <div className="flex flex-col space-y-2 w-80">
          <label htmlFor="input-box" className="text-gray-700 font-medium">
            Enter Values
          </label>
          <input
            id="input-box"
            type="text"
            placeholder="Type here..."
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
            onChange={handleOnChange}
          />

          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-200 cursor-pointer"
            onClick={handleCalculate}
          >
            Calculate
          </button>

          <label className="text-gray-700 font-medium">
            Output: <span className="font-bold text-blue-600">{sumValue}</span>
          </label>
        </div>
      </main>
    </div>
  );
}
