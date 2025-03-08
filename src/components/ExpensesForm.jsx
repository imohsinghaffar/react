import React, { useState } from "react";
import InputField from "./InputField";
import Select from "./Select";

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
    // This function is assigning value when any changes happened
    let { name, value } = e.target;
    setExpense((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let validate = (formData) => {
    // This function validates input field if we submit form without any details these errors will be shown
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
    //This function has main working while submitting form // ->1
    e.preventDefault();
    let validateResult = validate(expense); // validate function assigning expense as argument to formData
    if (Object.keys(validateResult).length) return;
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
            {" "}
            {/* -> 1   */}
            <div v className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <InputField
                id="title"
                name="title"
                value={expense.title}
                onChange={handleChange}
                error={errors.title}
                label="Title"
                placeholder = 'Enter Product Name'

/>

              
              <Select
                id="color"
                options={[
                  "White",
                  "Black",
                  "Blue",
                  "Navy Blue",
                ]}
                name="color"
                label="color"
                value={expense.color}
                onChange={handleChange}
                error={errors.color}
              />

              <Select
                id="category"
                options={[
                  "TV/Monitors",
                  "PC",
                  "Gaming/Console",
                  "Phones",
                  "Accessories",
                ]}
                name="category"
                label="Category"
                value={expense.category}
                onChange={handleChange}
                error={errors.category}
              />

              <InputField
                id="price"
                name="price"
                value={expense.price}
                onChange={handleChange}
                error={errors.price}
                label='Price'
                placeholder = 'Price'
              />
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
