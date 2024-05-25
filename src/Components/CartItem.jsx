import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../Store/CartSLice';
import { useDispatch } from 'react-redux';


export const CartItem = ({cartFood}) => {

      const dispatch = useDispatch();

      const handleRemove = () =>{
           dispatch(removeFromCart(cartFood.id))
      }

      console.log(cartFood)
  
 
  return (
    
   <>
   {   cartFood &&
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
          
         <MdDelete onClick={handleRemove} className='absolute right-7 text-gray-600 cursor-pointer'/>

        <img src={cartFood.image} alt=""
        className='w-[50px] h-[50px]' />

        <div className='leading-5' >
            <h2 className='font-bold text-gray-800'> {cartFood.name} </h2>
            <div className='flex justify-between'>
                <span className='text-green-500 font-bold'>Rs {cartFood.price} </span>

                <div className='flex justify-center items-center gap-2 absolute right-7 mb-3'>
                <FaPlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none p-1 rounded-md text-xl transition-all ease-linear cursor-pointer' />
                <span className='text-green-500 font-bold'>1</span> 
                <FaMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none p-1 rounded-md text-xl transition-all ease-linear cursor-pointer' />
               </div>
            </div>
        </div>
    </div>
}
    </>
  )
}
