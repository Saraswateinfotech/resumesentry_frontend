"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import axios from "axios";
import Loader from "../common/Loader";

const AddBank = () => {
  const router = useRouter();

  // State hooks for form  data
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [paymentMobileNumber, setPaymentMobileNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const freelancer_id = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  // Handle back navigation
  const handleBackClick = () => {
    router.push(`/profile`);
  };

  // Fetch bank details on component load
  useEffect(() => {
    const fetchBankDetails = async () => {
      if (!freelancer_id) return;

      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://apis.resumesentry.com/resumes/getBankDetails/${freelancer_id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data) {
          const details = response.data;
          setAccountNumber(details.account_number || "");
          setIfscCode(details.ifsc_code || "");
          setBankName(details.bank_name || "");
          setAccountHolderName(details.account_holder_name || "");
          setAccountType(details.account_type || "");
          setPaymentMobileNumber(details.payment_mobile_number || "");
          setPaymentMethod(details.payment_method || "");
        }
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to load bank details. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBankDetails();
  }, [freelancer_id, token]);

  // Validate and submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accountNumber || !ifscCode || !bankName || !accountHolderName || !accountType || !paymentMethod || !paymentMobileNumber) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const payload = {
      freelancer_id: freelancer_id,
      account_number: accountNumber,
      ifsc_code: ifscCode,
      bank_name: bankName,
      account_holder_name: accountHolderName,
      account_type: accountType,
      payment_mobile_number: paymentMobileNumber,
      payment_method: paymentMethod,
    };

    try {
      const response = await fetch(
        "https://apis.resumesentry.com/resumes/saveOrUpdateBankDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Bank details saved successfully!");
        setTimeout(() => router.push(`/profile`), 3000); // Navigate back after 3 seconds
      } else {
        toast.error("Failed to save bank details. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Add Bank Details" />

      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={handleBackClick}
          className="flex items-center rounded-full bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800"
        >
          <ArrowLeftIcon className="h-5 w-5 me-2" />
          Back
        </button>
      </div>

        {loading ? <>
    <Loader/>
        </>:
        <>

      <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md w-full">
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-2 gap-4">
          {/* Bank Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Bank Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-blue-500 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Account Number
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-blue-500  dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>

          {/* Account Holder Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Account Holder Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-blue-500  dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
            />
          </div>

          {/* IFSC Code */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              IFSC Code
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-blue-500  dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Account Type
            </label>
            <select
              className="w-full p-2 border rounded-md focus:outline-blue-500  dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="">Select Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Payment Method
            </label>
            <select
              className="w-full p-2 border rounded-md focus:outline-blue-500  dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="NEFT">NEFT</option>
              <option value="RTGS">RTGS</option>
            </select>
          </div>

          {/* Payment Mobile Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Payment Mobile Number
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-blue-500  dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              value={paymentMobileNumber}
              onChange={(e) => setPaymentMobileNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
        </>}

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddBank;
