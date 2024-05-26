import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { decrementQty, incrementQty, removeFromCart } from '../Store/CartSLice';
import { useDispatch } from 'react-redux';

export const CartItem = ({ cartFood, qty, id }) => {

    const dispatch = useDispatch();

   

    return (
        <>
            {cartFood &&
                <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
                    <MdDelete
                        onClick={() => {
                            dispatch(removeFromCart({id}));
                          }} 
                    className='absolute  right-7 text-gray-600 cursor-pointer' />

                    <img src={cartFood.image} alt="" className='w-[50px] h-[50px]' />

                    <div className='leading-5'>
                        <h2 className='font-bold text-gray-800'> {cartFood.name}</h2>
                        <div className='flex justify-between'>
                            <span className='text-green-500 font-bold'>Rs {cartFood.price} </span>

                            <div className='flex justify-center items-center gap-2 absolute right-7 mb-3'>
                                <FaPlus
                                      onClick={() =>
                                        qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                                      }
                                    className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none p-1 rounded-md text-xl transition-all ease-linear cursor-pointer' />
                                <span className='text-green-500 font-bold'> {qty} </span>
                                <FaMinus
                                     onClick={() =>
                                        qty > 1 ? dispatch(decrementQty({id})): (qty = 0)
                                      }
                                    className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none p-1 rounded-md text-xl transition-all ease-linear cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
