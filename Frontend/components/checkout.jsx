import { useState, useRef, useContext } from "react";
import { data } from "../context";
import Link from "next/link";

export default function Checkout(){
const { allData } = useContext(data);
const { cart } = useContext(data);
const { setCart } = useContext(data);
const { setOrderNum } = useContext(data);
const { orderNum } = useContext(data);
const { transactions } = useContext(data);
const { user } = useContext(data)
const productList = allData;

let subtotal = []
subtotal = (cart.map((product) => (product.price)))
let sum = 0;

  for (let i = 0; i < subtotal.length; i++) {
    sum += subtotal[i];
  }





  function clickCart() {
    const user = 1
    const packet = {"user_id":user, "products":cart, "transaction_id":orderNum}
    fetch("http://localhost:5555/checkout", {method: "POST",
headers:{"Content-Type":"application/json"}, body: JSON.stringify(packet)})
.then(response=>response.json()).then(data => data)
console.log(orderNum)
setOrderNum(orderNum +1)
console.log(orderNum)
setCart([])
}

    return(
        <>
        <div className = 'bg-gray-50 h-[88vh]'>

<div className="flex flex-col items-center border-b bg-gray-50 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base bg-gray-50">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4 bg-gray-50">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </a>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4 bg-gray-50">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="grid mt-5 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 bg-gray-50">



    

    


  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div className="flex justify-between">
        <p>Item Total</p>
        <p>$250.00</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>Calculated at next step</p>
      </div>
      <div className="flex justify-between">
        <p>Tax</p>
        <p>$20.00</p>
      </div>
      <div className="flex justify-between">
        <p>Discount</p>
        <p>- $50.00</p>
      </div>
    </div>


    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div className="flex justify-between">
        <p>Item Total</p>
        <p>$250.00</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>Calculated at next step</p>
      </div>
      <div className="flex justify-between">
        <p>Tax</p>
        <p>$20.00</p>
      </div>
      <div className="flex justify-between">
        <p>Discount</p>
        <p>- $50.00</p>
      </div>
    </div>






    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <label className="flex items-center">
        <input type="radio" name="shipping" className="h-5 w-5 border rounded" />
        <span className="ml-4">Standard - $5.00</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="shipping" className="h-5 w-5 border rounded" />
        <span className="ml-4">Express - $10.00</span>
      </label>
    </form>
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <div>
      <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div className="relative">
        <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" placeholder="Enter your email" />
      </div>
      <label htmlFor="nameOnCard" className="mt-4 mb-2 block text-sm font-medium">Name on Card</label>
      <input type="text" id="nameOnCard" className="w-full px-4 py-2 border rounded-md" placeholder="Enter the name on your card" />
      <label htmlFor="cardNumber" className="mt-4 mb-2 block text-sm font-medium">Card Number</label>
      <input type="text" id="cardNumber" className="w-full px-4 py-2 border rounded-md" placeholder="Enter your card number" />
      <div className="mt-4 grid lg:grid-cols-3 gap-6">
        <div>
          <label htmlFor="expirationDate" className="mb-2 block text-sm font-medium">Expiration Date</label>
          <input type="text" id="expirationDate" className="w-full px-4 py-2 border rounded-md" placeholder="MM/YY" />
        </div>
        <div>
          <label htmlFor="cvv" className="mb-2 block text-sm font-medium">CVV</label>
          <input type="text" id="cvv" className="w-full px-4 py-2 border rounded-md" placeholder="Enter CVV" />
        </div>
        <div>
          <label htmlFor="zipCode" className="mb-2 block text-sm font-medium">ZIP / Postal Code</label>
          <input type="text" id="zipCode" className="w-full px-4 py-2 border rounded-md" placeholder="Enter ZIP / Postal Code" />
        </div>
      </div>
    </div>
    <div className="mt-6 border-t border-b py-2">
      <div className="flex justify-between">
        <p>Total</p>
        <p>$220.00</p>
      </div>
    </div>
    <button onClick={clickCart} className="mt-10 mb-8 w-full rounded-md bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-indigo-700">Place Order</button>
  </div>
</div>











        




        

        {/* <ul role="list" className="-my-2 divide-y divide-gray-200">
                  {cart &&
                    cart.length > 0 &&
                    cart.map((product) => (
                      <li className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpK4hpSfeC2lOjI6oJnzgmwf4bI96Uf94LYg&usqp=CAU"
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <p className="text-lg text-gray-700 truncate block capitalize">
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
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul> */}
        
        
        
        </div>
        
        
        
        
        </>
    )

}