import { data } from "../context";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const Product = ({ productList, cart, setCart }) => {
  const { searchTerm } = useContext(data);
  const { setSearchTerm } = useContext(data);

  const filteredProducts = !searchTerm
    ? productList
    : productList.filter(
        (product) =>
          product.product_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.product_category
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.price.toString().includes(searchTerm)
      );

  return (
    <div className="text-center p-20 bg-gray-50">
      <section
        id="productCards"
        className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-0 mb-5"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={product.image}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-lg"
              />

              <div className="px-4 py-3 w-72">
                <p className="text-md  text-indigo-500 truncate block capitalize">
                  {product.product_category}
                </p>
                <p className="text-lg font-bold text-indigo-500 truncate block capitalize">
                  {product.product_name}
                </p>
                <div className="flex items-center">
                  <p className="text-2xl font-semibold text-indigo-500 cursor-auto my-3">
                    {`$${product.price}`}
                  </p>
                  <del></del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#6366F1"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                      onClick={() => setCart([...cart, product])}
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
