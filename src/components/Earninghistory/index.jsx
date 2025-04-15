"use client"; 
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { BiSolidShow } from "react-icons/bi";


const Earninghistory = () => {
  // "Payment From","Status"
    const headers = ["NO", "Tnx ID", "Tnx Date", "Amount",];
    const data = [
        {
          no: "1",
          tnx_id: "TNX-20241203110154",
          tnx_date: "04 Dec, 2024",
          payment_from: "joining_bonus",
          amount: "100",
          status: "pending",
        },
        {
          no: "2",
          tnx_id: "TNX-20241204110233",
          tnx_date: "05 Dec, 2024",
          payment_from: "referral_bonus",
          amount: "150",
          status: "completed",
        },
        {
          no: "3",
          tnx_id: "TNX-20241205110321",
          tnx_date: "06 Dec, 2024",
          payment_from: "wallet_topup",
          amount: "200",
          status: "completed",
        },
        {
          no: "4",
          tnx_id: "TNX-20241206110445",
          tnx_date: "07 Dec, 2024",
          payment_from: "withdraw_request",
          amount: "50",
          status: "pending",
        },
        {
          no: "5",
          tnx_id: "TNX-20241207110555",
          tnx_date: "08 Dec, 2024",
          payment_from: "reward_points",
          amount: "120",
          status: "completed",
        },
      ];
      

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Earning History" />


      <div className="flex flex-wrap gap-[10px]">
  {/* Total Amount in Wallet */}
  <div className="w-full sm:w-[49.50%] bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">pending Amount</h3>
      <p className="text-2xl font-bold">2000.00</p>
    </div>
    <div className="text-3xl">👛</div>
  </div>

  {/* Joining Bonus */}
  {/* <div className="w-full sm:w-[24%] bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Joining Bonus</h3>
      <p className="text-2xl font-bold">2000.00</p>
    </div>
    <div className="text-3xl">💰</div>
  </div> */}

  {/* Total Earnings */}
  <div className="w-full sm:w-[49.50%] bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Total Earnings</h3>
      <p className="text-2xl font-bold">10000</p>
    </div>
    <div className="text-3xl">📈</div>
  </div>

  {/* Withdrawl Amount */}
  {/* <div className="w-full sm:w-[24%] bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Withdrawl Amount</h3>
      <p className="text-2xl font-bold">0</p>
    </div>
    <div className="text-3xl">🏦</div>
  </div> */}
</div>

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
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {row.no}
                    </td>
                    <td className="px-6 py-4">{row.tnx_id}</td>
                    <td className="px-6 py-4">{row.tnx_date}</td>
                    {/* <td className="px-6 py-4">{row.payment_from}</td> */}
                    <td className="px-6 py-4">{row.amount}</td>
                    {/* <td className="px-6 py-4">{row.status}</td> */}
                  
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>



     
    </div>
  );
};

export default Earninghistory;
