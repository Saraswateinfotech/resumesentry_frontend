
"use client";

import { useContext, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { BankDetailsContext } from "@/context/BankDetailsContext";

const CreateKYC = () => {
  const { bankDetails, loadings } = useContext(BankDetailsContext);

  const router = useRouter();
  const [file, setFile] = useState(null);
  const [addressProofFile, setAddressProofFile] = useState(null);
  const [idProofType, setIdProofType] = useState("Aadhar Card");
  const [addressProofType, setAddressProofType] = useState("Electricity Bill");
  const [isVisible, setIsVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for the button

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleBackClick = () => router.push("/profile");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Enable loading state

    const freelancerId = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!freelancerId || !token) {
      toast.error("User session expired. Please log in again.");
      setIsSubmitting(false); // Disable loading state
      return;
    }

    if (!file || !addressProofFile) {
      toast.error("Please upload both files before submitting.");
      setIsSubmitting(false); // Disable loading state
      return;
    }

    const formData1 = new FormData();
    formData1.append("document", file);
    formData1.append("idProofType", idProofType);

    const formData2 = new FormData();
    formData2.append("document", addressProofFile);
    formData2.append("addresstype", addressProofType);

    try {
      const response1 = await fetch(
        `https://resumeentry-bend.onrender.com/resumes/uploadAadharCard/${freelancerId}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData1,
        },
      );

      const response2 = await fetch(
        `https://resumeentry-bend.onrender.com/resumes/uploadAddressCard/${freelancerId}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData2,
        },
      );

      if (response1.ok && response2.ok) {
        toast.success("Both proofs uploaded successfully!");
        setTimeout(() => router.push("/profile"), 2000);
      } else {
        toast.error("Failed to upload proofs.");
      }
    } catch (error) {
      console.error("Error uploading proofs:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false); // Disable loading state
    }
  };

  return (
    <>
      <ToastContainer />
      <Breadcrumb pageName="Create KYC" />

      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={handleBackClick}
          className="flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back
        </button>
      </div>

      {isVisible && bankDetails?.id_reject_reason && (
        <div className="mb-5 mt-5 flex w-full flex-wrap items-center justify-between rounded-md bg-red-500 p-4 text-white">
          <div className="mb-2 flex min-w-0 flex-grow items-center sm:mb-0">
            <div className="mb-2 flex min-w-0 flex-grow items-center sm:mb-0">
              <svg
                className="mr-2 h-6 w-6 flex-shrink-0 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
                />
              </svg>
              {loadings ? (
                "loading"
              ) : (
                <span className="truncate">{bankDetails.id_reject_reason}</span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto rounded-lg bg-white p-6 shadow-lg transition-colors duration-300 dark:bg-gray-800 dark:text-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ID Proof Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Select ID Proof Type
              </label>

              <select
                value={idProofType}
                onChange={(e) => setIdProofType(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm 
             text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
             dark:bg-gray-700 dark:text-white 
             dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="Pass Port">Passport</option>
                <option value="Voter Id">Voter ID</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Upload ID Proof (PDF)
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-1 w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm
                text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600
                dark:bg-gray-700 dark:text-white
                dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address Proof Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Select Address Proof Type
              </label>
              <select
                value={addressProofType}
                onChange={(e) => setAddressProofType(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm 
                text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
                dark:bg-gray-700 dark:text-white 
                dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="Electricity Bill">Electricity Bill</option>
                <option value="Water Bill">Water Bill</option>
                <option value="Gas Bill">Gas Bill</option>
                <option value="Other Utility Bill">Other Utility Bill</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Upload Address Proof (PDF)
              </label>

              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setAddressProofFile(e.target.files[0])}
                className="mt-1 w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm
             text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600
             dark:bg-gray-700 dark:text-white
             dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting} // Disable button when submitting
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateKYC;