import React from "react";
import Product from "../components/product";
import Cart from "../components/cart";
import { data } from "../context";
import { useContext, useState } from "react";
import NavigationBar from "../components/navbar"

export default function products() {
  const { allData } = useContext(data);
  const { cart } = useContext(data);
  const { setCart } = useContext(data);
  const { setOrderNum } = useContext(data);
  const { orderNum } = useContext(data);
  const { transactions } = useContext(data);
  const productList = allData;

  return (
    <>
    <NavigationBar/>
      {/* <Cart
        cart={cart}
        setOrderNum={setOrderNum}
        orderNum={orderNum}
        setCart={setCart}
        transactions={transactions}
      /> */}
      {/* <h1>Products</h1>; */}
      {/* {productList.map((product) => (
        <Product
          key={product.id}
          setCart={setCart}
          cart={cart}
          product={product}
        />
      ))} */}

      <Product productList = {productList} setCart={setCart}
          cart={cart}/>


    </>
  );
}
