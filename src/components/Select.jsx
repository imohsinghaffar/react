import React from "react";

const Select = ({ id, name, onChange, value, error, label, options }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        value={value}
        onChange={onChange} // Handle Change Function
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        {
        options.map((option, i) => {
            return <option key={i} name={name}> {option} </option>
            })}
      </select>
      <p className="text-red-400 text-md px-2 ">{error}</p>
    </div>
  );
};

export default Select;
