"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import Timer from "./Timer";
import { MdPendingActions } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { BiRupee } from "react-icons/bi";
import axios from "axios";

import { ProfileContext } from "../../context/ProfileContext";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});
interface PaymentReport {
  userid: string;
  totalPayment: number;
}
const ECommerce: React.FC = () => {
  const steps = [
    { id: 1, title: "Account Registered" },
    { id: 2, title: "Work in Progress" },
    { id: 3, title: "Work Submitted" },
    { id: 4, title: "Review Report" },
    { id: 5, title: "Final Report" },
    { id: 6, title: "Payout Requested" },
    { id: 7, title: "Payout Approved" },
    { id: 8, title: "Payout Released" },
  ];

  const [resumeStats, setResumeStats] = useState<any>(null); // Use a default value of null
  const freelancerId = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchResumeStats = async () => {
      try {
        const response = await fetch(
          "https://resumeentry-bend.onrender.com/resumes/getResumeStats",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ freelancerId }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setResumeStats(data); // Set the response data to resumeStats
        } else {
          console.error("Failed to fetch resume stats");
        }
      } catch (error) {
        console.error("Error fetching resume stats:", error);
      }
    };

    fetchResumeStats();
  }, [freelancerId, token]);
  // const timeLeft = {
  //   days: 2,
  //   hours: 20,
  //   minutes: 3,
  //   seconds: 43,
  // };



const [data, setData] = useState<PaymentReport | null>(null);
const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
    const fetchResumeStats = async () => {
        setLoading(true); // Start loading
        try {
            console.log("📡 Fetching payment report...");

            const response = await fetch(
                "https://resumeentry-bend.onrender.com/resumes/GetUserPaymentReport",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );

            if (response.ok) {
                const result: PaymentReport[] = await response.json();
                console.log("✅ Fetched data:", result);

                const filteredData = result.find((item: PaymentReport) => {
                    console.log(`🔍 Checking item: ${item.userid} === ${freelancerId}`);
                    return item.userid === freelancerId;
                });

                console.log("🎯 Filtered data:", filteredData);
                setData(filteredData || null);
            } else {
                console.error("❌ Failed to fetch GetUserPaymentReport. Status:", response.status);
            }
        } catch (error) {
            console.error("💥 Error fetching GetUserPaymentReport:", error);
        } finally {
            setLoading(false); // End loading
        }
    };

    console.log("📥 Calling fetchResumeStats...");
    fetchResumeStats();
}, [freelancerId, token]);




  return (
    <>
        
 <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
  {/* Resumes Completed Today */}
  {/* {JSON.stringify(data)} */}
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Resumes Completed Today</h3>
      <p className="text-2xl font-bold">
        {resumeStats ? resumeStats.completed_today_resumes : "Loading..."}
      </p>
    </div>
    <div className="text-3xl bg-zinc-700 p-2 rounded-md">
      <MdPendingActions />
    </div>
  </div>

  {/* Total Resumes Completed */}
  <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Total Resumes Completed</h3>
      <p className="text-2xl font-bold">
        {resumeStats ? resumeStats.completed_resumes : "Loading..."}
      </p>
    </div>
    <div className="text-3xl bg-zinc-700 p-2 rounded-md">
      <SiFuturelearn />
    </div>
  </div>

  {/* Total Estimated Earnings */}
  <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Total Estimated Earnings</h3>
      <p className="text-2xl font-bold">
      {loading ? "Loading..." : data ? data.totalPayment : " "}
      </p>
    </div>
    <div className="text-3xl bg-zinc-700 p-2 rounded-md">
    <BiRupee />
    </div>
  </div>

  {/* Joining Bonus */}
  {/* <div className="bg-gradient-to-r from-yellow-900 to-orange-900 text-white rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div>
      <h3 className="text-sm font-medium">Joining Bonus</h3>
      <p className="text-2xl font-bold">
        2000.00
      </p>
    </div>
    <div className="text-3xl bg-zinc-700 p-2 rounded-md">
    <BiRupee />
    </div>
  </div> */}
  <div className="bg-gradient-to-r from-yellow-900 to-orange-900 text-white rounded-lg p-4 shadow-lg flex justify-between items-center relative group">
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-center text-md font-semibold">
      Collecting it after submitting more than 500 accurate resumes
    </p>
  </div>

  <div className="group-hover:opacity-0 transition-opacity duration-300">
    <h3 className="text-sm font-medium">Joining Bonus</h3>
    <p className="text-2xl font-bold">2000.00</p>
  </div>

  <div className="text-3xl bg-zinc-700 p-2 rounded-md group-hover:opacity-0 transition-opacity duration-300">
    <BiRupee />
  </div>
</div>

</div>



      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo resumeData={resumeStats} />
        {/* <ChartThree />
        <MapOne /> */}

        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
        {/* <ChatCard /> */}
      </div>
      <div className="mt-4 grid border rounded-md shadow-md w-full">
  <div className="flex flex-col md:flex-row items-center justify-center py-6 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-6">
    {steps.map((step, index) => (
      <div
        key={step.id}
        className="relative flex flex-col items-center w-full md:w-auto"
      >
        {/* Line between steps */}
        {index !== 0 && (
          <div className="absolute hidden md:block left-0 top-5 h-0.5 w-[95%] -translate-x-1/2 bg-gray-300"></div>
        )}
        {index !== 0 && (
          <div className="absolute md:hidden top-0 left-5 h-[90%] w-0.5 bg-gray-300"></div>
        )}

        {/* Step Circle */}
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 shadow-md">
          <span className="text-base font-semibold text-gray-700">
            {step.id}
          </span>
        </div>

        {/* Step Title */}
        <p className="mt-3 text-center text-sm md:text-base text-gray-600 leading-tight md:leading-relaxed">
          {step.title}
        </p>
      </div>
    ))}
  </div>
</div>
<div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      
        <ChartThree />
        <MapOne />

        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
        {/* <ChatCard /> */}
      </div>
      <Timer/>
      {/* <div className="flex flex-col items-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-900">
  <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">
    Time Remaining For Submission
  </h2>
  <p className="mb-4 text-black dark:text-white text-center">
    Need to complete a minimum of 300 resumes or a maximum of 700 resumes in
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    {Object.entries(timeLeft).map(([unit, value]) => (
      <div
        key={unit}
        className="flex flex-col items-center p-4 rounded-md w-24 sm:w-32 md:w-48 lg:w-64 bg-blue-900 dark:bg-blue-700"
      >
        <span
          className="text-2xl font-bold text-white"
          title={`${value} ${unit}`}
        >
          {value}
        </span>
        <span className="capitalize text-white" title={unit}>
          {unit}
        </span>
      </div>
    ))}
  </div>
</div> */}

    </>
  );
};

export default ECommerce;
