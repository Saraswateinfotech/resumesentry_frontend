"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BankDetailsContext = createContext();

export const BankDetailsProvider = ({ children }) => {
  const [bankDetails, setBankDetails] = useState(null);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const freelancerId = localStorage.getItem("user");

    if (!freelancerId || !token) {
      console.error("Freelancer ID or token is missing.");
      setLoadings(false);
      return;
    }

    const fetchBankDetails = async () => {
      try {
        const response = await axios.get(
          `https://apis.resumesentry.com/resumes/getBankDetails/${freelancerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setBankDetails(response.data);
        } else {
          console.warn("No bank details data available.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoadings(false);
      }
    };

    fetchBankDetails();
  }, []);

  return (
    <BankDetailsContext.Provider value={{ bankDetails, setBankDetails, loadings }}>
      {children}
    </BankDetailsContext.Provider>
  );
};
