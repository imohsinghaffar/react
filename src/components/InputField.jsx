import React from "react";

const InputField = ({id, name, onChange, value, error, label, placeholder}) => {
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={onChange} 
          name={name}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={placeholder}
          required=""
        />
        <p className="text-red-400 text-md px-2 ">{error}</p>
      </div>
    </>
  );
};

export default InputField;
