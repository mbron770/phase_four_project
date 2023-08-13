import { useState, useRef, useContext } from "react";
import { data } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";
import Transaction from "./transaction";

export default function Checkout() {
  const { allData } = useContext(data);
  const { cart } = useContext(data);
  const { setCart } = useContext(data);
  const { setOrderNum } = useContext(data);
  const { orderNum } = useContext(data);
  const { transactions } = useContext(data);
  const { user } = useContext(data);
  const productList = allData;
  const router = useRouter();

  let quantity = [];
  quantity = cart.map((product) => product.price);
  let sum = 0;

  console.log(quantity.length);

  for (let i = 0; i < quantity.length; i++) {
    sum += quantity[i];
  }

  function purchase() {
    // const user = 1;
    const packet = { user_id: user.id, products: cart, transaction_id: orderNum };
    fetch("https://backend-phase-4.onrender.com/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(packet),
    })
      .then((response) => response.json())
      .then((data) => data);
    console.log(orderNum);
    setOrderNum(orderNum + 1);
    console.log(orderNum);
    setCart([]);
    router.push("/account?view=transactions");
  }


  function remove(e){
    setCart(cart.toSpliced(e.target.key, 1))
  }

  return (
    <>
      <div className="bg-gray-50 h-[88vh]">
        <div className="flex flex-col items-center border-b bg-gray-50 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base bg-gray-50">
            <div className="relative">
              <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4 bg-gray-50">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span className="font-semibold text-gray-900">Shop</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4 bg-gray-50">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white ring ring-indigo-600 ring-offset-2"
                    href="#"
                  >
                    2
                  </a>
                  <span className="font-semibold text-gray-900">Payment</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="text-indigo-500"
                  viewBox="0 0 24 24"
                  stroke="#6366F1"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-400 text-xs font-semibold text-white"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-gray-500">Shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid mt-5 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 bg-gray-50">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex justify-between">
                <p>Total Items</p>
                <p>{quantity.length}</p>
              </div>
              <div className="flex justify-between">
                <p>Transaction Total</p>
                <p>{`$${sum.toFixed(2)}`}</p>
              </div>
            </div>

            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 max-h-[40vh] overflow-y-auto">
              <ul role="list" className="-my-2 divide-y divide-gray-200">
                {cart &&
                  cart.length > 0 &&
                  cart.map((product, index) => (
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                      <li className="flex py-">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.image}
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <p className="text-md text-gray-700 truncate block capitalize">
                                  {product.product_name}
                                </p>
                              </h3>
                              <p className="mt-1 ml-4 text-gray-700">{`$${product.price}`}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.product_category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty 1</p>
                            <div className="flex">
                              <button
                               key = {index}
                               onClick={(e) => remove(e)}
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div>
              <label
                htmlFor="nameOnCard"
                className="mt-4 mb-2 block text-xs font-small"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter the name on your card"
              />
              <label
                htmlFor="cardNumber"
                className="mt-4 mb-2 block text-xs font-small"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your card number"
              />
              <div className="mt-4 grid lg:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="expirationDate"
                    className="mb-2 block text-xs font-small"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="mb-2 block text-sm font-medium"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter CVV"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="mb-2 block text-xs font-small"
                  >
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="ZIP"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex justify-between">
                <p>Total</p>
                <p>{`$${sum.toFixed(2)}`}</p>
              </div>
            </div>
            <button
              onClick={purchase}
              className="mt-10 mb-8 w-full rounded-md bg-indigo-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
