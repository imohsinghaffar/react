import React, { useState } from "react";

const ExpensesForm = ({ setExpenses }) => {
  /*
  
  //One way is to handle the form data is this, but this is not standard or good way to do so we will update it using state
  // let getFormData = (form) =>{
  //     let formData = new FormData(form)
  //     let data = {};
  //     for (const [key, value] of formData.entries()) {
  //         data[key] = value
  //       }
  //     return (data)
  // }

//   let handleSubmit = (e) => {
//       e.preventDefault()
//       setExpenses((prevState)=>[...prevState, {...getFormData(e.target), id:crypto.randomUUID()} ])
//   }

*/

  const [errors, setErrors] = useState({});
  const [expense, setExpense] = useState({
    title: "",
    color: "",
    category: "",
    price: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setExpense((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let validate = (formData) => {
    const errorsData = {};
    if (!formData.title) {
      errorsData.title = "Title is required!";
    }
    if (!formData.color) {
      errorsData.color = "Color field is required";
    }
    if (!formData.category) {
      errorsData.category = "Category is required";
    }
    if (!formData.price) {
      errorsData.price = "Price is required";
    }
    setErrors(errorsData);
    return errorsData;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let validateResult = validate(expense);
    if (Object.keys(validateResult).length) return
      setExpenses((prevState) => [
        ...prevState,
        { ...expense, id: crypto.randomUUID() },
      ]);
    setExpense({
      title: "",
      color: "",
      category: "",
      price: "",
    });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mx-32 my-20">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  value={expense.title}
                  onChange={handleChange}
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
                <p className="text-red-400 text-md px-2 ">{errors.title}</p>
              </div>
              <div>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Color
                </label>
                <select
                  value={expense.color}
                  onChange={handleChange}
                  id="color"
                  name="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="" hidden>
                    Select color
                  </option>
                  <option name="white">White</option>
                  <option name="black">Black</option>
                  <option name="blue">Blue</option>
                  <option name="navy-blue">Navy Blue</option>
                </select>
                <p className="text-red-400 text-md px-2 ">{errors.color}</p>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  value={expense.category}
                  onChange={handleChange}
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option className="hidden">Select category</option>
                  <option name="TV">TV/Monitors</option>
                  <option name="PC">PC</option>
                  <option name="GA">Gaming/Console</option>
                  <option name="Phones">Phones</option>
                  <option name="access">Accessories</option>
                </select>
                <p className="text-red-400 text-md px-2 ">{errors.category}</p>
              </div>

              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  value={expense.price}
                  onChange={handleChange}
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
                <p className="text-red-400 text-md px-2 ">{errors.price}</p>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white inline-flex items-center px-5 py-3 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ExpensesForm;
