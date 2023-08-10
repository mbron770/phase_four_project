import { useState, useContext } from "react";
import { data } from "../context";

export default function AccountDetails() {
  const { setUser } = useContext(data);
  const { user } = useContext(data);
  const [info, setInfo] = useState({});

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  console.log(user);
  const URL = "http://localhost:5555/user";

  function handleEdit(e) {
    e.preventDefault();
    fetch(`${URL}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => Promise.reject(error));
        }
      })
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="flex h-[110%] w-screen w-full text-gray-600 bg-gray-50">
    
      <div className="w-full flex items-center justify-center">
        <div className="relative">
          <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a
                  href="#"
                  className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
                >
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-indigo-500 pb-1"></span>
                  <span className="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">
                    {user ? `${user.fname}'s info` : "Please sign in"}!
                  </span>
                </a>
              </div>

              <p className="mb-6 text-indigo-500">Edit your info below</p>

              <form onSubmit={handleEdit} className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    placeholder={user.username}
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="password"
                      onChange={handleChange}
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="text"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="text"
                      onChange={handleChange}
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="fname"
                      placeholder={user.fname}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="text"
                      onChange={handleChange}
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="lname"
                      placeholder={user.lname}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="text"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Address
                  </label>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="text"
                      onChange={handleChange}
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="address"
                      placeholder={user.address}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
