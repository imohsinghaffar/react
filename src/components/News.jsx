import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";

const News = () => {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Track search input
  const [loading, setLoading] = useState(false); // Track loading state

  // Fetch news articles from the API
  function fetchApiData(searchQuery = "") {
    setLoading(true); // Set loading state to true when API call starts

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d77b1af35c1479fb5999828cc9d49a7&page=1&pageSize=29`;
    
    // If a search term is provided, add it to the URL
    if (searchQuery) {
      url += `&q=${searchQuery}`;
    }

    axios
      .get(url)
      .then((res) => {
        setApiData(res.data.articles);
        setLoading(false); // Set loading to false when the data is fetched
      })
      .catch((error) => {
        setApiData(error);
        setLoading(false); // Set loading to false if there's an error
      });
  }

  // Fetch data when component mounts and when the search term changes
  useEffect(() => {
    fetchApiData(searchTerm);
  }, [searchTerm]);

  // Handle the search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchApiData(searchTerm);
  };

  return (
    <>
      <div className="text-6xl font-bold text-center pt-20">
        <h1 className="text-gray-900">Fetching data from API</h1>
      </div>

      <form className="mt-5 mb-5 max-w-md mx-auto" onSubmit={handleSearchSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search News ..."
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term state on input change
          />
        </div>
      </form>

      {/* Show a loading indicator while fetching data */}
      {loading ? (
        <div className="flex items-center justify-center mt-5">
          <img className="w-12 h-12" src="src/components/loader.gif" alt="Loader not found" />
        </div>
      ) : (
        <div className="px-10 py-15 flex flex-col items-center justify-between ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
            {apiData &&
              apiData.map((at, index) => {
                return (
                  <NewsItems
                    key={index}
                    title={at.title?.slice(0, 85)}
                    desc={at.description?.slice(0, 64)}
                    img={at.urlToImage}
                    url={at.url}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
