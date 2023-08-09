import React from "react";
import Link from "next/link";

const Product = ({ product, cart, setCart }) => {
  function submitHandler() {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h3>Name: {product.product_name}</h3>
      <p>
        <br />
        Description:
        <br />
        {product.product_category}
        <br />
        Price:
        <br />
        {product.price}
        <br />
      </p>
      <input type="button" onClick={submitHandler} value="Add to Cart" />
    </div>
  );
};

export default Product
