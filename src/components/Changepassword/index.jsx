"use client"; 
import Breadcrumb from "../Breadcrumbs/Breadcrumb";


const Changepassword = () => {
  
      

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Change Password" />
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mx-auto">
      <form>
        <div className="space-y-6">
          {/* Current Password */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-200 mb-1" htmlFor="current-password">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter current password"
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-200 mb-1" htmlFor="new-password">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-200 mb-1" htmlFor="confirm-password">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        {/* Save Button */}
      <div className="mt-6 text-right">
  <button
    type="submit"
    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Save
  </button>
</div>  
      </form>
    </div>
 

    </div>
  );
};

export default Changepassword;
