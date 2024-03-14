import React, { useState } from "react";

type SearchFieldProps = {
  onSearchChange: (value: string) => void;
};

export default function SearchField({ onSearchChange }: SearchFieldProps) {
  const [inputValue, setInputValue] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update local state for controlling the label
    onSearchChange(newValue); // Call the provided onSearchChange prop function
  };

  return (
    <div className="flex justify-center bg-slate-200">
      <div className="relative w-10/12 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange} // Use the handleChange function here
          className="h-10 w-full shadow-md placeholder:pl-4 placeholder:text-slate-500 rounded-lg peer placeholder:text-transparent outline-none pl-4"
        />
        <label
          className={`absolute left-4 px-1 translate-y-2 bg-transparent text-sm duration-100 ease-linear ${
            inputValue
              ? "text-slate-700 -translate-y-5 peer-focus:-translate-y-5"
              : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-4 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm peer-focus:text-slate-700"
          }`}
        >
          Search...
        </label>
      </div>
    </div>
  );
}
