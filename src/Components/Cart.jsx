import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

export const Cart = () => {

  const [activecart, setActiveCart] = useState(false);
  const navigate = useNavigate();

  const { cart } = useSelector(state => state.cart);
  
  const totalQty = cart.reduce((totalQty,item)=>totalQty + item.qty,0);
  const totalPrice = cart.reduce((total,item)=> total + item.qty* item.price, 0);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full p-5 md:w-[20vw] h-full bg-white ${ activecart ? "translate-x-0" : "translate-x-full" } transition-all duration-500 z-50`} >

           <div className='flex justify-between items-center my-3'>
               <span className='text-xl font-bold text-gray-800'>My Order</span>

               <IoMdClose
                onClick={()=> setActiveCart(!activecart)}
                className='border-2 border-gray-600 text-gray-600 font-bold
                p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
           </div>
           
         { cart && cart.length > 0 ? 
          cart.map(item => <CartItem key={item.id} cartFood = {item} id={item.id} qty = {item.qty} />)
          :  (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty
            </h2>
          )}
            

           <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items : {totalQty} </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice} </h3>
            <hr className='w-[90vw] md:w-[18vw] my-2'/>
           
              <button 
              onClick={()=> {
                totalQty > 0 ? navigate('/success') : ''
              }}
              className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[18vw] mb-5' >Checkout</button>
              
            
            
        </div>
      </div>
      <FaShoppingCart onClick={()=> setActiveCart(!activecart)}
      className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
        totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />

    </>
  )
}
