import React from 'react';

function Index({ isOpen, onClose }) {
  if (!isOpen) return null; // Agar modal open nahi hai, toh kuch bhi render mat karo

  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed mt-15  inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-lg md:max-w-xl lg:max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-0 border-b rounded-t dark:border-gray-600">
          
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose} // Close modal on click
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="w-full">
              <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="row align-items-center p-2">
                  <div className="col-6 border-b border-gray-200 pb-3 dark:border-gray-700">
                    <h6 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      <i>Resume in PDF</i>
                    </h6>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <embed
                    src="https://freelancify.in/storage/resume/1391.pdf#toolbar=0"
                    type="application/pdf"
                    className="h-[50vh] md:h-[60vh] lg:h-[70vh] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
