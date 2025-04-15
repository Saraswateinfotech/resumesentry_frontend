"use client"; 
import Breadcrumb from "../Breadcrumbs/Breadcrumb";


const PendingRequest = () => {
    const headers = ["DATE", "PAYOUT MODE", "REQUEST AMOUNT	", "REQUEST STATUS"];
    const data = [
       
        {
          date: "05 Dec, 2024",
          payout_mode: "referral_bonus",
          request_amount: "150",
          request_status: "completed",
        },
   {
          date: "06 Dec, 2024",
          payout_mode: "wallet_topup",
          request_amount: "200",
          request_status: "completed",
        },
        {
          date: "07 Dec, 2024",
          payout_mode: "withdraw_request",
          request_amount: "50",
          request_status: "pending",
        },
        {
          date: "08 Dec, 2024",
          payout_mode: "reward_points",
          request_amount: "120",
          request_status: "completed",
        },
      ];
      

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Pending Request" />

 <div className="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg md:w-full lg:w-full xl:w-full 2xl:w-full">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-700"
                    } border-b dark:border-gray-700`}
                  >
                   
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="px-6 py-4">{row.payout_mode}</td>
                    <td className="px-6 py-4">${row.request_amount}</td>
                    <td className="px-6 py-4">{row.request_status}</td>
                  
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No Request.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>



     
    </div>
  );
};

export default PendingRequest;
