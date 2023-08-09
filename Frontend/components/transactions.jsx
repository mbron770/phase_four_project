import Transaction from "./transaction";
import { useAuth } from "../pages/_app";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Transactions() {
  const { user, setUser } = useAuth();
  return (
    <div className = "bg-gray-50 h-screen w-full"> 
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
