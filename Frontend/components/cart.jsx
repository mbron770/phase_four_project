
import React from 'react';
import { useContext } from 'react'
import Link from 'next/link'
import { data } from '../context'
import CartItem from './cartItem'

const Cart = ({cart, setCart, transactions}) => {


    
    let subtotal = []
    
  
    subtotal = (cart.map((product) => (product.price)))
    console.log(subtotal)
  
   
   
    return(
        <>
        <CartItem cart = {cart} subtotal = {subtotal}/>


        
        <div>
            </div>



            
        </>
    )
}

export default Cart;
