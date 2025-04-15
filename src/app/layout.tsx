"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { usePathname, useRouter } from "next/navigation";
import  { ProfileProvider }  from "../context/ProfileContext"; 
import  { BankDetailsProvider }  from "../context/BankDetailsContext"; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Define public routes that don't require authentication
  const publicRoutes = [
    "/auth/signin",
    "/auth/signup",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ✅ Redirect to /auth/signin if not logged in and trying to access a private route
    if (!token && !publicRoutes.includes(pathname)) {
      router.push("/auth/signin");
    }
  }, [router, pathname]);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    // Start loader on route change
    handleStart();

    // Simulate loading completion after a delay (you can customize this)
    const timeoutId = setTimeout(handleComplete, 500);

    return () => {
      clearTimeout(timeoutId);
      handleComplete(); // Ensure the loader is stopped when the component unmounts
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {/* {loading ? <Loader /> : children} */}
          {loading ? (
            <Loader />
          ) : (
            // ✅ Wrap children with ProfileProvider
            <ProfileProvider>
              <BankDetailsProvider>

              {children}
              </BankDetailsProvider>
              </ProfileProvider>
          )}
        </div>
      </body>
    </html>
  );
}
