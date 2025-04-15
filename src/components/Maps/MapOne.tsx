// "use client";
// import jsVectorMap from "jsvectormap";
// import "jsvectormap/dist/jsvectormap.css";
// import React, { useEffect } from "react";
// import "../../js/us-aea-en";

// const MapOne: React.FC = () => {
//   useEffect(() => {
//     const mapOne = new jsVectorMap({
//       selector: "#mapOne",
//       map: "us_aea_en",
//       zoomButtons: true,

//       regionStyle: {
//         initial: {
//           fill: "#C8D0D8",
//         },
//         hover: {
//           fillOpacity: 1,
//           fill: "#3056D3",
//         },
//       },
//       regionLabelStyle: {
//         initial: {
//           fontFamily: "Satoshi",
//           fontWeight: "semibold",
//           fill: "#fff",
//         },
//         hover: {
//           cursor: "pointer",
//         },
//       },

//       labels: {
//         regions: {
//           render(code: string) {
//             return code.split("-")[1];
//           },
//         },
//       },
//     });

//     return () => {
//       const map = document.getElementById("mapOne");
//       if (map) {
//         map.innerHTML = "";
//       }
//       // mapOne.destroy();
//     };
//   }, []);

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
//         Region labels
//       </h4>
//       <div className="h-90">
//         <div id="mapOne" className="mapOne map-btn"></div>
//       </div>
//     </div>
//   );
// };

// export default MapOne;




"use client";


const MapOne: React.FC = () => {


  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-4 text-md font-semibold text-black dark:text-white">
        Get Expert Help | Connect with Professionals | Get<br/> your Job Done
      </h4>
      <div className="flex flex-col gap-4">
     
        <a 
  href="https://wa.me/917665025123" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="w-full py-3 rounded-md bg-green-500 text-white text-lg font-medium mt-10">
    Contact To Customer Support
  </button>
</a>
<a href="mailto:resumework071@gmail.com">
  <button className="w-full py-3 rounded-md bg-blue-500 text-white text-lg font-medium mt-5">
    Get Extra Days & Help
  </button>
</a>

      </div>
    </div>
  );
};

export default MapOne;
