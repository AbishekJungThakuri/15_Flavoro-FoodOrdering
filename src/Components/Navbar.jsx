import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Store/SearchSlice';
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className='flex flex-col md:flex-row justify-between mx-6 py-3 mb-10'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>
                {new Date().toUTCString().slice(0,16)}
            </h3>
            <h1 className='text-2xl font-bold cursor-pointer'
            onClick={()=>navigate('/')}
            >Flavoro Foods</h1>
        </div>
        <div>
          <input 
              className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full md:w-[25vw] '
              type="search" 
              name="search"
              placeholder='Search here' 
              onChange={(e)=> dispatch(setSearch(e.target.value))}
              />
        </div>
    </nav>
  )
}
