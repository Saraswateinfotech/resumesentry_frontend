"use client";
import Image from 'next/image';
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchWithInterceptor } from "./fetchWrapper"; // Adjust the import path as needed

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.userId.trim()) newErrors.userId = "User ID is required.";
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetchWithInterceptor(
        "https://resumeentry-bend.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (response) {
        if (response.ok) {
          const data = await response.json();
          // Store the token and user information
          localStorage.setItem("token", data.token); // Consider using HTTP-only cookies for better security
          localStorage.setItem("user", formData.userId);

          toast.success("Log In successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Redirect to dashboard or desired page
          router.push("/");
        } else {
          const errorData = await response.json();
          toast.error(
            errorData.message ||
              "Log In failed. Please check your credentials.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
          console.error("Log In failed:", response.statusText);
        }
      } else {
        // Handle the case where no response is received
        toast.error("No response received. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred during log in. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error during log in:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="flex justify-center">
            <Image
              className=" object-cover object-center pt-2"
              src={"/images/user/resumesentrylogo.jpg"}
              width={150}
              height={150}
              alt="logo"
            />
          </div>
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Log In to Your Account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor="userId"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  User ID
                </label>
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  className={`focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
                    errors.userId ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your User ID"
                  required
                />
                {errors.userId && (
                  <p className="mt-1 text-sm text-red-500">{errors.userId}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="!mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-lg bg-blue-600 px-4 py-3 text-sm tracking-wide text-white hover:bg-blue-700 focus:outline-none ${
                    isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </button>
              </div>
              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                {/* Don’t have an account?{" "} */}
                <Link
                  href="/auth/signup"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {/* Sign Up */}
                </Link>
              </p>

              {/* Forgot Password Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Forgot your password?{" "}
                <Link
                  href="/auth/forgot-password"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Reset Password
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
