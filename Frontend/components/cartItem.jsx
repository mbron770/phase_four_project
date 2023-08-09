import React from 'react';
import Link from 'next/link'

const CartItem = ({product}) => {

    return(
        <>
        <p>
            {product.product_name}
        </p>
        </>
    )
}

export default CartItem;