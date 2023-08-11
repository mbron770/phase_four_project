import Link from "next/link";
import { data } from "../context";
import { useState, useRef, useContext, useEffect } from "react";

export default function Logout(){
  const { user } = useContext(data)
    return(
        <>
        <div className="flex-shrink-0 mb-4 md:mb-0 mr-6">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6366F1"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <a
                      href="/login"
                      className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full ml-.5"
                    >
                      Logout
                    </a>
                    {console.log(user)}
                  </div>
                </div>
        </>
    )
}