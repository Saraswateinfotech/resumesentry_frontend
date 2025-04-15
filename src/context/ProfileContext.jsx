"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const freelancerId = localStorage.getItem("user");

    if (!freelancerId || !token) {
      console.error("Freelancer ID or token is missing.");
      setLoadings(false);
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `https://apis.resumesentry.com/freelancer/${freelancerId}/details`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data?.profile?.length > 0) {
          setProfile(response.data.profile[0]);
        } else {
          console.warn("No profile data available.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoadings(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, loadings }}>
      {children}
    </ProfileContext.Provider>
  );
};
