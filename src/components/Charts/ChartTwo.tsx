"use client";

import React from "react";

// Define prop types for ProgressBar
interface ProgressBarProps {
  label: string;
  value: number;
  total: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, total, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {value}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="h-4 rounded-full"
          style={{
            width: `${(value / total) * 100}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

// Define prop types for ChartTwo
interface ResumeData {
  total_resumes?: number;
  completed_resumes?: number;
  in_progress_resumes?: number;
  rejected_resumes?: number;
  completed_today_resumes?: number;
}

interface ChartTwoProps {
  resumeData?: ResumeData;
}

const ChartTwo: React.FC<ChartTwoProps> = ({ resumeData }) => {
  const safeResumeData = resumeData || {};

  const totalResumes = safeResumeData.total_resumes || 0;

  const data = [
    // { label: "Total Resumes", value: safeResumeData.total_resumes || 0, total: totalResumes, color: "#3C50E0" },
    { label: "Completed Resumes", value: safeResumeData.completed_resumes || 0, total: totalResumes, color: "#FF6B6B" },
    { label: "Saved Resumes", value: safeResumeData.in_progress_resumes || 0, total: totalResumes, color: "#E0E0E0" },
    { label: "Rejected Resumes", value: safeResumeData.rejected_resumes || 0, total: totalResumes, color: "#FFAB00" },
    { label: "Completed Today Resumes", value: safeResumeData.completed_today_resumes || 0, total: totalResumes, color: "#34C759" },
  ];

  return (
    <div className="col-span-12 rounded-md border border-stroke bg-white p-6 shadow-lg dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="text-2xl font-semibold text-black dark:text-white mb-6">
        My Progress
      </h4>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          value={item.value}
          total={item.total}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ChartTwo;
