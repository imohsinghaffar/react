import React from 'react'
// import './App.css'

const NewsItems = ({desc, title, img, url}) => {
  return (
    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href={url} target='_blank'>
        <img  className="rounded-t-lg"  style={{width:"350px",height:"200px"}}  src={img} alt="" />
    </a>
    <div className="p-5">
        <a href={url} target='_blank'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <a href={url} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
</div>
    </>
  )
}

export default NewsItems
