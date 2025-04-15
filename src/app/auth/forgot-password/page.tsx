"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  // Validation and submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrors("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors("Please enter a valid email address.");
      return;
    }

    setErrors("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://resumeentry-bend.onrender.com/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Password reset link sent to your email.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Failed to send reset link. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer /> 
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex justify-center">
                      <Image
                        className=" object-cover object-center pt-2"
                        src={"/images/user/resumesentrylogo.jpg"}
                        width={150}
                        height={150}
                        alt="logo"
                      />
                    </div>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Forgot Your Password?</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Enter your email address, and we’ll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 p-3 w-full border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                required
              />
              {errors && <p className="mt-1 text-sm text-red-500">{errors}</p>}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 text-sm font-semibold tracking-wide text-white rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </button>
            </div>

            {/* Back to Login Link */}
            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Remember your password?{" "}
              <Link href="/auth/signin" className="text-blue-600 dark:text-blue-400 hover:underline">
                Back to Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
