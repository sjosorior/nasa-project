import React from "react";

const Filters = () => {
  return (
    <div className="flex w-full ">
      <div className="flex w-full mt-8 pb-6 mx-28 justify-end border-b-2 border-indigo-400">
        <span className="text-white text-3xl text-base justify-start w-full">
          Results for{" "}
          <span className="text-3xl font-semibold">Orion</span>
        </span>

        <select
          name="Species"
          placeholder="Specie"
          className="w-20 h-9 rounded-lg bg-blue-900 border-1 border-blue-900  text-white mb-3 px-2 flex justify-end mr-6"
        >
          <option value="Specie" disabled selected>
            Sort
          </option>
          <option value="Human">value1</option>
          <option value="Alien">value2</option>
          <option value="Humanoid">value3</option>
          <option value="Unknown">value4</option>
        </select>

        <label
          for="Toggle4"
          className="w-20 h-9 inline-flex items-center p-1 cursor-pointer dark:bg-blue-900 dark:text-gray-800 rounded-lg"
        >
          <input id="Toggle4" type="checkbox" className="hidden peer" />
          <span className="text-indigo-300 w-9 h-8 pt-1 pl-1.5 dark:bg-indigo-600 peer-checked:dark:bg-blue-900 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>
          <span className="text-indigo w-9 h-8 pt-1 pl-1.5 dark:bg-blue-900  peer-checked:dark:bg-indigo-300 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 fill-blue-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
