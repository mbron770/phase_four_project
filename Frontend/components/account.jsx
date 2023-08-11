import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import AccountDetails from "./accountdetails";
import Transactions from "./transactions";
import Logout from "./logout";
import { data } from "../context";
import { useRouter } from "next/router";

export default function Account() {
  const { setUser } = useContext(data);
  const { user } = useContext(data);
  const [activeSection, setActiveSection] = useState("account");

  const router = useRouter();

  useEffect(() => {
    if (router.query.view === "transactions") {
      setActiveSection("transactions");
    }
  }, [router.query.view]);

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  if (user) {
    return (
      <>
        <div className="flex bg-gray-50">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path clipRule="evenodd" fillRule="evenodd" d="..."></path>
            </svg>
          </button>

          <aside
            id="logo-sidebar"
            className="fixed top-20vh left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
            aria-label="Sidebar"
            style={{ height: "calc(100vh)" }}
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
              <h1 className="flex items-center pl-2.5 mb-5">
                <br></br>
                <br></br>

                {
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-indigo-500 pb-1">
                    Welcome {user ? user.fname : "Guest"}!
                  </span>
                }
              </h1>

              <div className="bg-gray-50">
                <div className="border-t border-gray-200 container mx-auto pb-4"></div>
              </div>
              <ul className="space-y-2 font-medium">
                <div className="flex-shrink-0 mb-4 md:mb-0 mr-6 pb-2">
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
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <a
                      onClick={() => toggleSection("account")}
                      className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full ml-.5"
                      style={{ cursor: "pointer" }}
                    >
                      My Account
                    </a>
                  </div>
                </div>

                <div className="flex-shrink-0 mb-4 md:mb-0 mr-6 pb-2">
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
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>

                    <Link
                      href="/register"
                      className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full ml-.5"
                    >
                      Register
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0 mb-4 md:mb-0 mr-6 pb-2">
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <a
                      onClick={() => toggleSection("transactions")}
                      className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full ml-.5"
                      style={{ cursor: "pointer" }}
                    >
                      My Transactions
                    </a>
                  </div>
                </div>
                {!user ? (
                  <div className="flex-shrink-0 mb-4 md:mb-0 mr-6 pb-2">
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
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>

                      <Link
                        href="/login"
                        className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full ml-.5"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Logout />
                )}
              </ul>
            </div>
          </aside>

          <div className="flex-grow bg-gray-50 p-4">
            {activeSection === "account" && <AccountDetails />}
            {activeSection === "transactions" && <Transactions />}
          </div>
        </div>
      </>
    );
  } else {
    useEffect(() => {
      router.push("/");
    }, []);
  }
}
