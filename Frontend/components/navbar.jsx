import React from "react";
import Link from "next/link";
import Cart from '../components/cart'
import Search from "../components/search";
import { data } from "../context";
import { useContext, useState } from "react";



export default function NavigationBar() {
  const { allData } = useContext(data);
  const { cart } = useContext(data);
  const { setCart } = useContext(data);
  const { setOrderNum } = useContext(data);
  const { orderNum } = useContext(data);
  const { transactions } = useContext(data);
  const productList = allData;
  console.log(productList)

  // allData.filter(product => product.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
  // const productName = allData.filter(product => product.product_name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <div className="bg-gray-50 p-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center ">
            {/* Logo */}
            <div className="flex-shrink-0 mb-4 md:mb-0 mr-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#6366F1"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                <Link
                  href="/"
                  className="ml-2 flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
                >
                  <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
                    Ecommerce.
                  </span>
                </Link>
              </div>
            </div>

            {/* Search Box */}
            <Search/>

          

            <Cart
        cart={cart}
        setOrderNum={setOrderNum}
        orderNum={orderNum}
        setCart={setCart}
        transactions={transactions}
      />
            {/* <Cart/> */}
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="border-t border-gray-200 container mx-auto pb-4"></div>
      </div>

      <div className="bg-gray-50">
        <div className="ml-20 mt-0 md:mt-0 flex space-x-10 bg-gray-50">
          <Link
            href="/"
            className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full"
          >
            Products
          </Link>
          
          <Link
            href="/login"
            className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full"
          >
            Login
          </Link>
          <Link
            href="/account"
            className="text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-1 rounded-full"
          >
            My Account
          </Link>
        </div>
      </div>
    </>
  );
}
