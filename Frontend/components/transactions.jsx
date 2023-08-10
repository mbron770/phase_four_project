import Transaction from "./transaction";
import { data } from "../context";
import { useState, useContext, useEffect } from "react";

export default function Transactions() {
  const { user } = useContext(data);
  const { setUser } = useContext(data)

 function getLastTransaction() {
  useEffect(() => {const URL = "http://localhost:5555/login"
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({

      'username': user.username, 
      'password': user.password,



    }),
  })
    .then((response) => {
      if (response.ok) return response.json()
      return response.json().then((error) => Promise.reject(error))
    })
    .then((user) => {
      setUser(user);
    })
    .catch((error) => alert(error.message || "Error occurred"))},[])

  }



  getLastTransaction()
  
if (user) {
  return (
    <div className = "bg-gray-50 h-[100] w-full"> 
      <div className="h-[-10%] w-[95%] bg-gray-50">
        <h2 className="text-2xl font-semibold ml-[25%] pb-6 mb-6 text-indigo-500">
          My Transactions
        </h2>
      </div>
      <div className="flex flex-col items-center h-full w-full p-4 bg-gray-50">
      <Transaction transactions={user.transactions} />
      </div>
    </div>
  );
}
else{
  useEffect(() => {router.push('/')},[])
}
}
