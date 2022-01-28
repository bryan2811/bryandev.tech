import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section>
      <div className="h-48 max-w-6xl mx-auto antialiased bg-white dark:bg-gray-800">
        <h1 className="relative z-20 py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#5299D3] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="flex justify-center gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-2xl font-semibold text-gray-50">
                Get in touch, let's talk.
              </h1>
              <p className="mt-2 text-base font-light text-gray-200">
              Send me an email and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="inline-flex flex-col w-full my-20 icons-container">
              <a href="tel:+543425220522">
                <div className="flex flex-row items-center p-4 space-x-6 border border-white rounded-md hover:border hover:border-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 text-white bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                    <p className="text-sm font-light text-gray-50">
                      {userData.phone}
                    </p>
                </div>
              </a>
              <a href="mailto:brandonb2816@gmail.com">
                <div className="flex flex-row items-center p-4 my-4 space-x-6 border border-white rounded-md hover:border hover:border-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 text-white bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  
                    <p className="text-sm font-light text-gray-50">
                      {userData.email}
                    </p>
                </div>
              </a>
              <div className="flex flex-row items-center p-4 space-x-6 border border-white rounded-md hover:border hover:border-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 text-white bi bi-pin-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-sm font-light text-gray-50">
                  {userData.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
