"use client"; // Declare the component as a Client Component

import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { useRouter } from "next/navigation"; // Correct import

const Queriescreate = () => {
  const router = useRouter(); // Initialize useRouter
  const handleEditClick = () => {
    router.push(`/myqueries`); // Navigate to the edit page with resume ID
  };
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Add Query" />
      <div class="mb-2 text-end">
        <button
          type="button"
          onClick={() => handleEditClick()}
          class="mb-2 me-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          back
        </button>

      </div>
          <div className="mb-6 border-2 rounded border-solid border-gray-600 p-3">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Question</label>
            <textarea
              type="text"
              id="large-input"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-3 text-center mt-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
          </div>
    </div>
  );
};

export default Queriescreate;
