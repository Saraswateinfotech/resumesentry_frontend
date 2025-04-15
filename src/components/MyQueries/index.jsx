"use client";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const MyQueries = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="My Queries" />
      <div className="mx-auto max-w-7xl py-5">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
            Have a query? Contact us via WhatsApp or Email. We’re here to help!
          </p>

          {/* Contact Options */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917665025123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full transform items-center gap-3 rounded-lg bg-green-500 px-8 py-4 text-white shadow-md transition hover:scale-105 hover:bg-green-600 sm:w-auto"
            >
              <FaSquareWhatsapp size={28} className="flex-shrink-0" />
              <span className="text-lg font-semibold">WhatsApp Us</span>
            </a>

            {/* Email */}
            <a
              href="mailto:resumework071@gmail.com"
              className="flex w-full transform items-center gap-3 rounded-lg bg-blue-500 px-8 py-4 text-white shadow-md transition hover:scale-105 hover:bg-blue-600 sm:w-auto"
            >
              <MdEmail size={28} className="flex-shrink-0" />
              <span className="text-lg font-semibold">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
