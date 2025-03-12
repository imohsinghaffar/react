import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterHook";
import ContextMenu from "./ContextMenu";

const ProductTable = ({
  expenses,
  setExpenses,
  setExpense,
  setEditingRowId,
}) => {
  let [sum, setSum] = useState(0);
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
const [sortCallback, setSortCallback] = useState(()=>()=>{})

  const [category, setCategory] = useState("");
  // const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);
  //SUM
  function addAllPricess() {
    let total = 0;
    expenses.map((product) => {
      //    setSum(sum+=Number(product.price))
      total += Number(product.price);
    });
    setSum(total);
  }

  useEffect(() => {
    addAllPricess();
  }, [expenses]);

  //Filtering Categories
  let filterData = expenses.filter((expenses) => expenses.category.toLowerCase().includes(category));

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpense={setExpense}
        expenses={expenses}
        setExpenses={setExpenses}
        rowId={rowId}
        setEditingRowId={setEditingRowId}
      />
      <div className="shadow-md sm:rounded-lg mx-32 mt-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" onClick={()=>{
          if(menuPosition.left)
          {
            setMenuPosition({})
          }
        }
        }>
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Flowbite products designed to help you work and
              play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" px-6 flex items-center ">
                Product name
                <svg
                    className=" w-6 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                    onClick={()=>setSortCallback(()=>(a, b) => a.title.localeCompare(b.title))}
                  >
                    <path d="M11 3h2v15l5-5 2  2-8 8-8-8 2-2 5 5V3z" />
                  </svg>
                  <svg
                  onClick={()=>setSortCallback(()=>(a, b) => b.title.localeCompare(a.title))}
                    className="w-6 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                  >
                    <path d="M11 21h2V6l5 5 2-2-8-8-8 8 2 2 5-5v15z" />
                  </svg>
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                <select
                  onChange={(e) => setCategory(e.target.value.toLowerCase())}
                >
                  <option value="TV/Monitor"> TV/Monitor</option>
                  <option value="PC">PC</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Phones">Phones</option>
                  <option value="Gaming/Console">Gaming/Console</option>
                </select>
              </th>
              <th scope="col" className="flex items-center ">
                Price
                  <svg
                    className=" w-6 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                    onClick={()=>setSortCallback(()=>(a, b) => a.price.localeCompare(b.price))}
                  >
                    <path d="M11 3h2v15l5-5 2  2-8 8-8-8 2-2 5 5V3z" />
                  </svg>
                  <svg
                  onClick={()=>setSortCallback(()=>(a, b) => b.price.localeCompare(a.price))}
                    className="w-6 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                  >
                    <path d="M11 21h2V6l5 5 2-2-8-8-8 8 2 2 5-5v15z" />
                  </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData.sort(sortCallback).map((pDetails) => {
              return (
                <>
                  <tr
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setMenuPosition({ left: e.clientX, top: e.clientY });
                      setRowId(pDetails.id);
                    }}
                    key={pDetails.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {pDetails.title}
                    </th>
                    <td className="px-6 py-4">{pDetails.color}</td>
                    <td className="px-6 py-4">{pDetails.category}</td>
                    <td className="px-6 py-4">${pDetails.price}</td>
                  </tr>
                </>
              );
            })}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td className="px-6 py-4 cursor-pointer" onClick={()=>setSortCallback(()=>{})}>Clear Sort</td>
              <td className="px-6 py-4"></td>
              <th className="px-6 py-4">${sum}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
