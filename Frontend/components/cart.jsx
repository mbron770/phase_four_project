// export default function Cart() {
//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="#FFFFFF"
//         className="ml-20 w-18 h-10"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//         />
//       </svg>
//       <button
//         id="dropdownDividerButton"
//         data-dropdown-toggle="dropdownDivider"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         Dropdown divider{" "}
//         <svg
//           class="w-2.5 h-2.5 ml-2.5"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       <div
//         id="dropdownDivider"
//         class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//       >
//         <ul
//           class="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDividerButton"
//         >
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Earnings
//             </a>
//           </li>
//         </ul>
//         <div class="py-2">
//           <a
//             href="#"
//             class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//           >
//             Separated link
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';
import Link from 'next/link'
import CartItem from './cartItem'

const Cart = ({cart, setOrderNum, orderNum, setCart, transactions}) => {

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
        <CartItem cart = {cart}/>


        {/* <p>
            {cart.map(item => <CartItem product={item}/>)}
        <input type="button" onClick={clickCart} value="Cart"/>
        </p> */}
        
        </>
    )
}

export default Cart;
