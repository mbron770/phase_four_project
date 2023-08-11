import { useState, useRef, useContext, useEffect } from "react";
import { data } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Register(){
    const { setUser } = useContext(data);
    const { user } = useContext(data);
    const [newUser, setNewUser] = useState({})
    const [info, setInfo] = useState({});
    const router = useRouter()



    function handleChange(e){
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const URL = "http://localhost:5555/user"


    function handlePost(e){
        e.preventDefault()
        fetch(URL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(info)
        }).then(response => {
            if(response.ok){
                return response.json()
            }
            else{
                return response.json().then((error) => Promise.reject(error))
            }

        }).then((info) => {
            if(info){
            setNewUser(info)
            router.push('/products')

            }
            
        }).catch(error => console.log(error.message))

    }

    return (
        <div className="flex h-[100vh] w-screen w-full text-gray-600 bg-gray-50">
        
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
                        Welcome Guest!
                      </span>
                    </a>
                  </div>
    
                  <p className="mb-6 text-indigo-500">Register Below</p>
    
                  <form onSubmit={handlePost} className="mb-4">
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
                        placeholder='username'
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
                          placeholder='first name'
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
                          placeholder='last name'
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
                          placeholder='11 Broadway New York, New York 10004'
                        />
                      </div>
                    </div>
    
                    <div className="mb-4">
                      <button
                        className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                        type="submit"
                      >
                        Sign up and Login
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