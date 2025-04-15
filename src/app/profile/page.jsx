"use client";

import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FaEdit } from "react-icons/fa";
import { GlobeIcon, FlagIcon, HashtagIcon } from "@heroicons/react/outline";

import {
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  UsersIcon,
  LocationMarkerIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/common/Loader";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { BankDetailsContext } from "@/context/BankDetailsContext";

const Profile = () => {
  const { bankDetails, loadings } = useContext(BankDetailsContext);

  const [data, setData] = useState(null);
  const [documentURL, setDocumentURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const freelancerId = localStorage.getItem("user");
  const token = localStorage.getItem("token"); // Assuming token is stored in local storage

  const router = useRouter();

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!freelancerId || !token) {
        console.error("Freelancer ID or token is missing.");
        return;
      }

      try {
        const response = await axios.get(
          `https://apis.resumesentry.com/freelancer/${freelancerId}/details`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to request headers
            },
          },
        );
        // setData(response.data); // Save fetched data to state
        if (response.data.profile && response.data.profile.length > 0) {
          setData(response.data.profile[0]);
        }
      } catch (error) {
        console.error("Error fetching User data:", error);
      }
    };

    fetchProfileData();
  }, [freelancerId, token]);

  useEffect(() => {
    const fetchDocument = async () => {
      if (!freelancerId) return;

      setLoading(true);
      setError("");
      setDocumentURL("");

      try {
        const url = `https://apis.resumesentry.com/resumes/downloadAadharCard/${freelancerId}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Document not available.");
        }

        const blob = await response.blob();
        const fileURL = URL.createObjectURL(blob);
        setDocumentURL(fileURL);
      } catch (err) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [freelancerId]);

  const handleEditClick = () => {
    router.push(`/profile/edit`);
  };

  const handleCreateKYCClick = () => {
    router.push(`/createkyc`);
  };
  const handleAddBankClick = () => {
    router.push(`/addbankdetails`);
  };



  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5 p-4">
        <Breadcrumb pageName="Profile" />

        {data ? (
          <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {/* Edit Button */}
            <div className="edit-btn m-5 pb-2 text-end">
              <button
                onClick={handleEditClick}
                className="rounded-md bg-indigo-500 p-3 font-medium text-white shadow-lg hover:underline dark:text-white"
              >
                <FaEdit />
              </button>
            </div>

            {/* Profile Image */}
            <div className="mt-10 px-4 pb-6 pt-10 text-center lg:pb-8 xl:pb-11.5">
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <Image
                    className="h-full w-full rounded-full object-cover object-center"
                    src={"/images/user/imageshu.png"}
                    width={160}
                    height={160}
                    alt="profile"
                  />
                  <label
                    htmlFor="profile"
                    className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                  >
                    {/* SVG Icon */}
                    <svg
                      className="fill-current"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                        fill=""
                      />
                    </svg>
                  </label>
                </div>
              </div>

              {/* User Information */}
              <div className="mt-4">
                <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                  {data.name || "User Name"}
                </h3>
                <p className="font-medium">
                  <span className="rounded-sm bg-amber-500 p-1 text-boxdark-2">
                    User ID: {data.user_id || "N/A"}
                  </span>
                </p>
                <p className="pt-3 font-medium">
                <span className="rounded-sm bg-red-600 p-1 text-boxdark-2">
  Last Date:{data?.end_date
    ? new Date(data.end_date).toLocaleDateString("en-GB")
    : "N/A"}

</span>
                </p>

                {/* Personal Information Form */}
                <div className="mt-2 w-full rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-4">
                  <div className="mb-4 border-b">
                    <h5 className="text-left text-xl font-bold text-gray-900 dark:text-white">
                      Personal Information
                    </h5>
                  </div>
                  <form className="space-y-4">
                    {/* Mobile */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="phone_number"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <PhoneIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Mobile:
                      </label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        value={data.phone_number || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Alternate Number */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="alternate_phone"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <PhoneIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Alternate Number:
                      </label>
                      <input
                        type="text"
                        id="alternate_phone"
                        name="alternate_phone"
                        value={data.alternate_phone || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Email ID */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <MailIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Email ID:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Date Of Birth */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="date_of_birth"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <CalendarIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Date Of Birth:
                      </label>
                      <input
                        type="text"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={
                          data.date_of_birth
                            ? new Date(data.date_of_birth).toLocaleDateString(("en-GB"))
                            : "Not Available"
                        }
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="gender"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <UsersIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Gender:
                      </label>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={data.gender || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="address"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <LocationMarkerIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Address:
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={data.address || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="state"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <GlobeIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        State:
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={data.state || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="country"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <FlagIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Country:
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={data.country || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="pincode"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <HashtagIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Pincode:
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={data.pincode || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Education */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="education"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <AcademicCapIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Education:
                      </label>
                      <input
                        type="text"
                        id="education"
                        name="education"
                        value={data.education || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>

                    {/* Occupation */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <label
                        htmlFor="occupation"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <BriefcaseIcon className="h-5 w-5 text-gray-900 dark:text-white" />
                        Occupation:
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={data.occupation || "Not Available"}
                        disabled
                        className="w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-500 focus:border-gray-200 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 dark:placeholder-gray-400 sm:w-1/2"
                      />
                    </div>
                  </form>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-center space-x-4">

                  <div>
                    {loading ? (
                      <svg
                        className="mr-2 inline h-5 w-5 animate-spin text-white"
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
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                    ) 
                    : error ? ( 
                      (bankDetails?.id_reject_reason == null ?
                      <div>
                        <button
                          type="button"
                          onClick={handleCreateKYCClick}
                          className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                          Create KYC
                        </button>
                      </div>: <div>
                        <button
                          type="button"
                          onClick={handleCreateKYCClick}
                          className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                         Re-Create KYC
                        </button>
                      </div> )
                    ) : documentURL ?
                     (
                      data.is_approved == true ? (
                        <button
                          type="button"
                          className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                          KYC Approved
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                          >
                            KYC process is going on...
                          </button>
                        </>
                      )
                    ) : (
                      <p>No Found KYC is prosseing......</p>
                    )}
                  </div>
                  
           
                  
                  <button
                    type="button"
                    onClick={handleAddBankClick}
                    className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    Add Bank Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </DefaultLayout>
  );
};

export default Profile;

