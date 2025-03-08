import React, { useEffect, useState } from 'react'

const ProductTable = ({expenses}) => {
    let [sum, setSum] = useState(0)
    function addAllPricess()
    {
    let total = 0;
    expenses.map(product=>{
    //    setSum(sum+=Number(product.price))
        total += Number(product.price);
    })
    setSum(total)

   
}
useEffect(()=>{
    addAllPricess()
},[expenses])
  return (
    <>


<div className="shadow-md sm:rounded-lg mx-32 mt-20"  >
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
            <tr>
                <th  scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
        {expenses.map((pDetails) => {
              return (
                <>
                  <tr key={pDetails.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {pDetails.title}
                </th>
                <td className="px-6 py-4">
                    {pDetails.color}
                </td>
                <td className="px-6 py-4">
                    {pDetails.category}
                </td>
                <td className="px-6 py-4">
                    ${pDetails.price}
                </td>
            </tr>
                </>
              );
            })}
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Total</th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <th className="px-6 py-4">${sum}</th>     
            </tr>
        </tbody>
    </table>
</div>

    </>
  )
}

export default ProductTable
