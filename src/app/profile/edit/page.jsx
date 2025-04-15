

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Loader from "@/components/common/Loader";
import { ArrowLeftIcon } from '@heroicons/react/outline';


const Edit = () => {
  const [formData, setFormData] = useState({
    freelancer_id: "",
    user_id: "",
    name: "",
    phone_number: "",
    alternate_phone: "",
    email: "",
    date_of_birth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    education: "",
    occupation: "",
    monthly_income: "",
  });

  const router = useRouter();
  const freelancerId = localStorage.getItem("user");
  const token = localStorage.getItem("token");

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
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.profile && response.data.profile.length > 0) {
          setFormData(response.data.profile[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchProfileData();
  }, [freelancerId, token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://apis.resumesentry.com/freelancer/${freelancerId}/edit`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Profile updated successfully!");
      router.push("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating the profile.");
    }
  };

  const handleBackClick = () => {
    router.push(`/profile`);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <ToastContainer />
        <Breadcrumb pageName=  "Edit Profile" />
      {formData ? (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<div className="mb-2 mt-5 flex justify-end">

  <button
    type="button"
    onClick={handleBackClick}
    className="flex items-center gap-2 rounded-full bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
  >
    <ArrowLeftIcon className="h-5 w-5" />
    Back
  </button>
</div>


          <div className="w-full max-w-6xl dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Alternate Phone</label>
                <input
                  type="text"
                  name="alternate_phone"
                  value={formData.alternate_phone || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  // value={formData.date_of_birth || ""}
                  value={formData.date_of_birth ? new Date(formData.date_of_birth).toISOString().split("T")[0] : ""}

                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender || "Male"}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1 ">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-white font-medium mb-1">Monthly Income</label>
                <input
                  type="text"
                  name="monthly_income"
                  value={formData.monthly_income || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none  dark:border-gray-600 dark:bg-gray-400 dark:text-gray-700 dark:placeholder-gray-400"
                />
              </div>

              <div className="mt-8 flex flex-col justify-end col-span-1 md:col-span-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>

        ):(
          <Loader/>
        )
      }

      </div>
    </DefaultLayout>
  );
};

export default Edit;
