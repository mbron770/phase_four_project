import React from "react";

export default function Account() {
    return (
        <>
              <div className="flex bg-gray-100 w-full min-h-screen">
  <div className="w-80 md:w-3/12 lg:w-2/12 bg-white rounded p-3 shadow-lg">
    <div className="flex items-center space-x-4 p-2 mb-5">
      <img
        className="h-12 rounded-full"
        src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
        alt="James Bhatta"
      />
      <div>
        <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James Bhatta</h4>
        <span className="text-sm tracking-wide flex items-center space-x-1">
          <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gray-600">Verified</span>
        </span>
      </div>
    </div>
    <ul className="space-y-2 text-sm">
      <li>
        <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>Dashboard</span>
        </a>
      </li>
      {/* Add other list items here */}
    </ul>
  </div>

  <div className="flex-grow w-full md:w-9/12 lg:w-10/12">
    <div className="p-4 text-gray-500">Content here...</div>
  </div>
</div>



        </>
    ); 
}
