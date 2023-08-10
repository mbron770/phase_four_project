
import React from 'react';
import { useContext } from 'react'
import Link from 'next/link'
import { data } from '../context'
import CartItem from './cartItem'

const Cart = ({cart, setCart, transactions}) => {

    // const { user } = useContext(data)
    // const { setOrderNum } = useContext(data)
    // const { orderNum } = useContext(data)

    
    let subtotal = []
    // let sum = 0
  
    subtotal = (cart.map((product) => (product.price)))
    console.log(subtotal)
  
   
    // console.log(sum)
    return(
        <>
        <CartItem cart = {cart} subtotal = {subtotal}/>


        {/* <p>
            {cart.map(item => <CartItem product={item}/>)}
        <input type="button" onClick={clickCart} value="Cart"/>
        </p> */}
        <div>
            </div>



            
        </>
    )
}

export default Cart;
