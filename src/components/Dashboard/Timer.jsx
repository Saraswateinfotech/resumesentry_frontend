// import React, { useContext } from 'react'
// import { ProfileContext } from '@/context/ProfileContext';

// const Timer = () => {
//     const timeLeft = {
//         days: 2,
//         hours: 20,
//         minutes: 3,
//         seconds: 43,
//       };

//       const { profile, loadings } = useContext(ProfileContext);

//   return (
//     <div>
//         {loadings ? 'loading' : JSON.stringify(profile.end_date)}

//           <div className="flex flex-col items-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-900">
//   <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">
//     Time Remaining For Submission
//   </h2>
//   <p className="mb-4 text-black dark:text-white text-center">
//     Need to complete a minimum of 300 resumes or a maximum of 700 resumes in
//   </p>
//   <div className="flex flex-wrap justify-center gap-4">
//     {Object.entries(timeLeft).map(([unit, value]) => (
//       <div
//         key={unit}
//         className="flex flex-col items-center p-4 rounded-md w-24 sm:w-32 md:w-48 lg:w-64 bg-blue-900 dark:bg-blue-700"
//       >
//         <span
//           className="text-2xl font-bold text-white"
//           title={`${value} ${unit}`}
//         >
//           {value}
//         </span>
//         <span className="capitalize text-white" title={unit}>
//           {unit}
//         </span>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>
//   )
// }

// export default Timer



import React, { useContext, useState, useEffect } from 'react';
import { ProfileContext } from '@/context/ProfileContext';

const Timer = () => {
  const { profile, loadings } = useContext(ProfileContext);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const endDate = new Date(profile?.end_date ?? 0);
      const timeLeft = Math.max(0, endDate.getTime() - now.getTime());

      setTimeLeft({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
        seconds: Math.floor((timeLeft / 1000) % 60),
      });

      if (timeLeft <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [profile?.end_date]);

  if (loadings) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center p-4 rounded-md shadow-md bg-white dark:bg-gray-900'>
      <h2 className='text-lg font-semibold mb-2 text-black dark:text-white'>
        Time Remaining For Submission
      </h2>
      <p className='mb-4 text-black dark:text-white text-center'>
        Need to complete a minimum of 300 resumes or a maximum of 700 resumes in
      </p>
      <div className='flex flex-wrap justify-center gap-4'>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className='flex flex-col items-center p-4 rounded-md w-24 sm:w-32 md:w-48 lg:w-64 bg-blue-900 dark:bg-blue-700'
          >
            <span
              className='text-2xl font-bold text-white'
              title={`${value} ${unit}`}
            >
              {value}
            </span>
            <span className='capitalize text-white' title={unit}>
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;