"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { toast, ToastContainer } from "react-toastify";

const ShowResume = ({ row, allData }) => {
  // State to manage the current index of selected resume
  const [currentIndex, setCurrentIndex] = useState(
    allData.findIndex((item) => item.resume_id === row.resume_id),
  );

  const token = localStorage.getItem("token");
  const freelancerId = localStorage.getItem("user");
  // State to manage the form data
  const [formData, setFormData] = useState({
    submission_id: row.submission_id || "",
    resume_id: row.resume_id || "",
    freelancer_id: freelancerId || "",
    first_name: row.first_name || "",
    middle_name: row.middle_name || "",
    last_name: row.last_name || "",
    date_of_birth: row.date_of_birth || "",
    gender: row.gender || "",
    nationality: row.nationality || "",
    marital_status: row.marital_status || "",
    passport: row.passport || "",
    hobbies: row.hobbies || "",
    languages_known: row.languages_known || "",
    address: row.address || "",
    landmark: row.landmark || "",
    city: row.city || "",
    state: row.state || "",
    pincode: row.pincode || "",
    mobile: row.mobile || "",
    email: row.email || "",
    ssc_result: row.ssc_result || "",
    ssc_board: row.ssc_board || "",
    ssc_year_of_passing: row.ssc_year_of_passing || "",
    hsc_result: row.hsc_result || "",
    hsc_board: row.hsc_board || "",
    hsc_year_of_passing: row.hsc_year_of_passing || "",
    graduation_degree: row.graduation_degree || "",
    graduation_result: row.graduation_result || "",
    graduation_university: row.graduation_university || "",
    graduation_year_of_passing: row.graduation_year_of_passing || "",
    post_graduation_degree: row.post_graduation_degree || "",
    post_graduation_result: row.post_graduation_result || "",
    post_graduation_year_of_passing: row.post_graduation_year_of_passing || "",
    higher_education_qualification: row.higher_education_qualification || "",
    total_work_experience_in: row.total_work_experience_in || "Month",
    total_work_experience_months: row.total_work_experience_months || "",
    number_of_companies_worked: row.number_of_companies_worked || "",
    last_employer: row.last_employer || "",
    status: row.status || "",
  });

  // Function to handle "Next" button click
  const handleNext = () => {
    if (currentIndex < allData.length - 1) {
      setCurrentIndex(currentIndex + 1);

      setFormData({
        submission_id: allData[currentIndex + 1]?.submission_id || "",
        resume_id: allData[currentIndex + 1]?.resume_id || "",
        freelancer_id: freelancerId || "",
        first_name: allData[currentIndex + 1]?.first_name || "",
        middle_name: allData[currentIndex + 1]?.middle_name || "",
        last_name: allData[currentIndex + 1]?.last_name || "",
        date_of_birth: allData[currentIndex + 1]?.date_of_birth || "",
        gender: allData[currentIndex + 1]?.gender || "",
        nationality: allData[currentIndex + 1]?.nationality || "",
        marital_status: allData[currentIndex + 1]?.marital_status || "",
        passport: allData[currentIndex + 1]?.passport || "",
        hobbies: allData[currentIndex + 1]?.hobbies || "",
        languages_known: allData[currentIndex + 1]?.languages_known || "",
        address: allData[currentIndex + 1]?.address || "",
        landmark: allData[currentIndex + 1]?.landmark || "",
        city: allData[currentIndex + 1]?.city || "",
        state: allData[currentIndex + 1]?.state || "",
        pincode: allData[currentIndex + 1]?.pincode || "",
        mobile: allData[currentIndex + 1]?.mobile || "",
        email: allData[currentIndex + 1]?.email || "",
        ssc_result: allData[currentIndex + 1]?.ssc_result || "",
        ssc_board: allData[currentIndex + 1]?.ssc_board || "",
        ssc_year_of_passing: allData[currentIndex + 1]?.ssc_year_of_passing || "",
        hsc_result: allData[currentIndex + 1]?.hsc_result || "",
        hsc_board: allData[currentIndex + 1]?.hsc_board || "",
        hsc_year_of_passing: allData[currentIndex + 1]?.hsc_year_of_passing || "",
        graduation_degree: allData[currentIndex + 1]?.graduation_degree || "",
        graduation_result: allData[currentIndex + 1]?.graduation_result || "",
        graduation_university:
          allData[currentIndex + 1]?.graduation_university || "",
        graduation_year_of_passing: allData[currentIndex + 1]?.graduation_year_of_passing || "",
        post_graduation_degree:
          allData[currentIndex + 1]?.post_graduation_degree || "",
        post_graduation_result:
          allData[currentIndex + 1]?.post_graduation_result || "",
        post_graduation_year_of_passing:
          allData[currentIndex + 1]?.post_graduation_year_of_passing || "",
        higher_education_qualification:
          allData[currentIndex + 1]?.higher_education_qualification || "",
        total_work_experience_in:
          allData[currentIndex + 1]?.total_work_experience_in || "Month",
        total_work_experience_months:
          allData[currentIndex + 1]?.total_work_experience_months || "",
        number_of_companies_worked: allData[currentIndex + 1]?.number_of_companies_worked || "",
        last_employer: allData[currentIndex + 1]?.last_employer || "",
        status: allData[currentIndex + 1]?.status || "",
      });
    }
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      setFormData({
        submission_id: allData[currentIndex - 1]?.submission_id || "",
        resume_id: allData[currentIndex - 1]?.resume_id || "",
        freelancer_id: freelancerId || "",
        first_name: allData[currentIndex - 1]?.first_name || "",
        middle_name: allData[currentIndex - 1]?.middle_name || "",
        last_name: allData[currentIndex - 1]?.last_name || "",
        date_of_birth: allData[currentIndex - 1]?.date_of_birth || "",
        gender: allData[currentIndex - 1]?.gender || "",
        nationality: allData[currentIndex - 1]?.nationality || "",
        marital_status: allData[currentIndex - 1]?.marital_status || "",
        passport: allData[currentIndex - 1]?.passport || "",
        hobbies: allData[currentIndex - 1]?.hobbies || "",
        languages_known: allData[currentIndex - 1]?.languages_known || "",
        address: allData[currentIndex - 1]?.address || "",
        landmark: allData[currentIndex - 1]?.landmark || "",
        city: allData[currentIndex - 1]?.city || "",
        state: allData[currentIndex - 1]?.state || "",
        pincode: allData[currentIndex - 1]?.pincode || "",
        mobile: allData[currentIndex - 1]?.mobile || "",
        email: allData[currentIndex - 1]?.email || "",
        ssc_result: allData[currentIndex - 1]?.ssc_result || "",
        ssc_board: allData[currentIndex - 1]?.ssc_board || "",
        ssc_year_of_passing: allData[currentIndex - 1]?.ssc_year_of_passing || "",
        hsc_result: allData[currentIndex - 1]?.hsc_result || "",
        hsc_board: allData[currentIndex - 1]?.hsc_board || "",
        hsc_year_of_passing: allData[currentIndex - 1]?.hsc_year_of_passing || "",
        graduation_degree: allData[currentIndex - 1]?.graduation_degree || "",
        graduation_result: allData[currentIndex - 1]?.graduation_result || "",
        graduation_university:
          allData[currentIndex - 1]?.graduation_university || "",
        graduation_year_of_passing: allData[currentIndex - 1]?.graduation_year_of_passing || "",
        post_graduation_degree:
          allData[currentIndex - 1]?.post_graduation_degree || "",
        post_graduation_result:
          allData[currentIndex - 1]?.post_graduation_result || "",
        post_graduation_year_of_passing:
          allData[currentIndex - 1]?.post_graduation_year_of_passing || "",
        higher_education_qualification:
          allData[currentIndex - 1]?.higher_education_qualification || "",
        total_work_experience_in:
          allData[currentIndex - 1]?.total_work_experience_in || "Month",
        total_work_experience_months:
          allData[currentIndex - 1]?.total_work_experience_months || "",
        number_of_companies_worked: allData[currentIndex - 1]?.number_of_companies_worked || "",
        last_employer: allData[currentIndex - 1]?.last_employer || "",
        status: allData[currentIndex - 1]?.status || "",
      });
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for saving
  const handleSave = async (e) => {
    e.preventDefault();
    formData.resume_id = row.resume_id;
    formData.status = "Saved";

    try {
      const response = await fetch(
        "https://resumeentry-bend.onrender.com/resumes/updateResumeData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        toast.success("Resume Saved successfully!");
        handleNext();
      } else {
        toast.error("Error uploading resume");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Error uploading resume");
    }
  };

  // Handle form submission for submitting
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.resume_id = row.resume_id;
    formData.status = "Submitted";

    try {
      const response = await fetch(
        "https://resumeentry-bend.onrender.com/resumes/updateResumeData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        toast.success("Resume Submitted successfully!");
        handleNext();
      } else {
        toast.error("Error uploading resume");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Error uploading resume");
    }
  };

  // const resume_id = allData[currentIndex]?.resume_id;
  // const selectedResume = {
  //   resume_url: `https://resumeentry-bend.onrender.com/resumes/download/${resume_id}#toolbar=0`,
  // };

  // Loading state for showing the loader
  const [loading, setLoading] = useState(true);
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    setLoading(true); // Start loading
    const resume_id = allData[currentIndex]?.resume_id;

    // Simulate a delay to fetch the resume URL
    if (resume_id) {
      const url = `https://resumeentry-bend.onrender.com/resumes/download/${resume_id}#toolbar=0`;

      // Set the selected resume and stop loading
      setSelectedResume({ resume_url: url });
      setLoading(false);
    }
  }, [currentIndex, allData]);

  return (
    <div className="mx-auto max-w-7xl">
      <ToastContainer/>
      <Breadcrumb pageName="Show Resume" />

      <div className="mb-5 flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex h-10 -space-x-px text-base">
            <li>
              <button
                onClick={handlePrevious}
                className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            <li>
              <button className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {currentIndex + 1}
              </button>
            </li>
            <li>
              <button
                onClick={handleNext}
                className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next....
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="w-full lg:w-[65%]">
          <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="row align-items-center p-2">
              <div className="col-6 border-b border-gray-200 pb-3 dark:border-gray-700">
                <h6 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                  <i>Resume in PDF</i>
                </h6>
              </div>
            </div>
            <div className="flex-1 p-2">
              {/* <embed
src={selectedResume.resume_url}
                type="application/pdf"
                className="h-[600px] w-full"
              /> */}
              {loading ? (
                <div className="flex h-[600px] items-center justify-center">
                  <p>Loading...</p>
                </div>
              ) : (
                <embed
                  src={selectedResume?.resume_url}
                  type="application/pdf"
                  className="h-[600px] w-full"
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="row align-items-center p-2">
              <div className="col-6 border-b border-gray-200 pb-3 dark:border-gray-700">
                <h6 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                  <i>Fill the form</i>
                </h6>
              </div>
            </div>
            <div className="mb-2 mt-2 h-[600px] w-full flex-1 overflow-auto p-2">
              <form className="mx-auto max-w-sm ">
                <h2 className="mb-4 text-lg font-semibold text-primary">
                  Personal Details
                </h2>

                <div className="mb-5">
                  <label
                    htmlFor="first_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    // defaultValue={formData.first_name}
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="middle_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Middle Name
                  </label>
                  <input
                    type="text"
                    id="middle_name"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="last_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                {/* <div className="mb-5">
                  <label
                    htmlFor="date_of_birth"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date Of Birth
                  </label>
                  <input
                    type="text"
                    id="date_of_birth"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div> */}
                <div className="mb-5">
  <label
    htmlFor="date_of_birth"
    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
  >
    Date Of Birth
  </label>
  <input
    type="text"
    id="date_of_birth"
    name="date_of_birth"
    value={formData.date_of_birth ? formData.date_of_birth.split('T')[0] : ''}
    onChange={handleInputChange}
    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  />
</div>

                <div className="mb-5">
                  <label
                    htmlFor="gender"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="nationality"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="marital_status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Marital Status
                  </label>
                  <input
                    type="text"
                    id="marital_status"
                    name="marital_status"
                    value={formData.marital_status}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="passport"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Passport
                  </label>
                  <input
                    type="text"
                    id="passport"
                    name="passport"
                    value={formData.passport}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="hobbies"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hobbies
                  </label>
                  <input
                    type="text"
                    id="hobbies"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="language_known"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Language Known
                  </label>
                  <input
                    type="text"
                    id="languages_known"
                    name="languages_known"
                    value={formData.languages_known}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                <h2 className="mb-4 text-lg font-semibold text-primary">
                  Communication Details
                </h2>

                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="landmark"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="pincode"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                <h2 className="mb-4 text-lg font-semibold text-primary">
                  Qualification Details
                </h2>

                <div className="mb-5">
                  <label
                    htmlFor="SSC_result"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    SSC Result
                  </label>
                  <input
                    type="text"
                    id="ssc_result"
                    name="ssc_result"
                    value={formData.ssc_result}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="SSC_board"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    SSC Board
                  </label>
                  <input
                    type="text"
                    id="ssc_board"
                    name="ssc_board"
                    value={formData.ssc_board}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="ssc_year_of_passing"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    SSC Pass Year
                  </label>
                  <input
                    type="text"
                    id="ssc_year_of_passing"
                    name="ssc_year_of_passing"
                    value={formData.ssc_year_of_passing}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="hsc_result"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    HSC Result
                  </label>
                  <input
                    type="text"
                    id="hsc_result"
                    name="hsc_result"
                    value={formData.hsc_result}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="hsc_board"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    HSC Board
                  </label>
                  <input
                    type="text"
                    id="hsc_board"
                    name="hsc_board"
                    value={formData.hsc_board}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="hsc_year_of_passing"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    HSC Pass Year
                  </label>
                  <input
                    type="text"
                    id="hsc_year_of_passing"
                    name="hsc_year_of_passing"
                    value={formData.hsc_year_of_passing}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="graduation_degree"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Graduation Degree
                  </label>
                  <input
                    type="text"
                    id="graduation_degree"
                    name="graduation_degree"
                    value={formData.graduation_degree}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="graduation_result"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Graduation Result
                  </label>
                  <input
                    type="text"
                    id="graduation_result"
                    name="graduation_result"
                    value={formData.graduation_result}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="graduation_university"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Graduation University
                  </label>
                  <input
                    type="text"
                    id="graduation_university"
                    name="graduation_university"
                    value={formData.graduation_university}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="graduation_year_of_passing"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Graduation Year
                  </label>
                  <input
                    type="text"
                    id="graduation_year_of_passing"
                    name="graduation_year_of_passing"
                    value={formData.graduation_year_of_passing}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="post_graduation_degree"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Graduation Degree
                  </label>
                  <input
                    type="text"
                    id="post_graduation_degree"
                    name="post_graduation_degree"
                    value={formData.post_graduation_degree}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="post_graduation_result"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Graduation Result
                  </label>
                  <input
                    type="text"
                    id="post_graduation_result"
                    name="post_graduation_result"
                    value={formData.post_graduation_result}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="post_graduation_year_of_passing_of_passing"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Graduation Year
                  </label>
                  <input
                    type="text"
                    id="post_graduation_year_of_passing"
                    name="post_graduation_year_of_passing"
                    value={formData.post_graduation_year_of_passing}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="higher_education_qualification"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Higher Level Education
                  </label>
                  <input
                    type="text"
                    id="higher_education_qualification"
                    name="higher_education_qualification"
                    value={formData.higher_education_qualification}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                <h2 className="mb-4 text-lg font-semibold text-primary">
                  Employment Details
                </h2>
                {/* <div className="mb-5">
                  <label
                    htmlFor="total_work_experience_in"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Work Experience In
                  </label>
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option value="Month">Month</option>
                    <option value="Years">Years</option>
                  </select>
                </div> */}
                <div className="mb-5">
                  <label
                    htmlFor="total_work_experience_months"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Work Experience (in months)
                  </label>
                  <input
                    type="text"
                    id="total_work_experience_months"
                    name="total_work_experience_months"
                    value={formData.total_work_experience_months}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="number_of_companies_worked"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    No Of Companies
                  </label>
                  <input
                    type="text"
                    id="number_of_companies_worked"
                    name="number_of_companies_worked"
                    value={formData.number_of_companies_worked}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="last_employer"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Employer
                  </label>
                  <input
                    type="text"
                    id="last_employer"
                    name="last_employer"
                    value={formData.last_employer}
                    onChange={handleInputChange}
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                <div className="bothbtn border-t border-gray-200 pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="mb-2 me-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-8 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    Save Resume
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mb-2 me-2 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 px-8 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400"
                  >
                    {" "}
                    Submit Resume
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowResume;
