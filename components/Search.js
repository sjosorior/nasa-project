import React from "react";

const Search = () => {
  return (
    <div className="grid w-full h-full justify-center">
      <div className="grid-col w-full h-full justify-center">
        <div className="grid">
          <span className="text-center font-bold text-6xl text-purple-300">
            Find something amazing
          </span>
          <span className="text-center font-bold text-6xl">
            {" "}
            in our vast file library!
          </span>
        </div>

        <div className="flex mt-12 justify-center">
          <div class="pt-2 relative">
            <input
              className="border-2 border-gray-300 text-white h-10 w-96 px-5 pr-16 rounded-3xl text-sm focus:outline-none bg-transparent"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-5 mr-4 text-gray-300"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex justify-center mt-9">
          <div class="flex items-center mr-4">
            <input
              id="inline-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="inline-checkbox"
              class="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Photos
            </label>
          </div>
          <div class="flex items-center mr-4">
            <input
              id="inline-2-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="inline-2-checkbox"
              class="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Videos
            </label>
          </div>
          <div class="flex items-center mr-4">
            <input
              id="inline-2-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="inline-2-checkbox"
              class="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Audio
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
