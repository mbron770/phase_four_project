import { useState, useRef, useContext } from "react";
import { data } from "../context";
import Link from "next/link";

const CartItem = ({ cart, subtotal }) => {
  const [showCart, setShowCart] = useState(false);
  const { setUser } = useContext(data);
  const { user } = useContext(data);
  const dropdownRef = useRef(null);

  const handleMouseOver = () => {
    setShowCart(true);
  };

  const handleMouseLeave = () => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setShowCart(false);
    }
  };

  let sum = 0;

  for (let i = 0; i < subtotal.length; i++) {
    sum += subtotal[i];
  }

  return (
    <>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            strokeWidth={1.5}
            stroke="#6366F1"
            className="w-10 h-10 ml-2 mr-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span className="bg-indigo-300 text-gray-700 ml-0 text-xs font-medium  px-2.5 py-0.5 rounded-full">
            {subtotal.length > 0 ? subtotal.length : 0}
          </span>
        </div>

        {showCart && (
          <div
            ref={dropdownRef}
            id="dropdownHover"
            className="absolute right-4 top-10 z-25 bg-gray-50 rounded-lg shadow w-[30rem] px-4 max-h-80 overflow-y-auto"
          
          >
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-2 divide-y divide-gray-200">
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
                </ul>
              </div>
            </div>

            {}

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{`$${sum.toFixed(2)}`}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">

                <Link
                  href="/checkoutPage"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <Link href="/products">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
