import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Store/CategorySlice';

export const CategoryMenu = () => {

   const [categories, setCategories] = useState([]);
   const dispatch = useDispatch()
   const selectedCategory = useSelector(state => state.category.category)

   const uniqueCategories = () => {
    const uniqueListCategories = [
      ...new Set(FoodData.map(item => item.category))    // new Set(...) is used to create a Set object, which automatically removes duplicate values, resulting in only unique categories.
    ]                                                    // [...new Set(...)] uses the spread operator to convert the Set back into an array of unique categories.
    setCategories(uniqueListCategories);
   }

   useEffect(()=>{
    uniqueCategories()
   },[])

  return (
    <div className='ml-6'> 
        <h3 className='text-xl font-semibold'>Find the best food</h3> 
     <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth md:overflow-x-hidden'>
        <button onClick={()=>dispatch(setCategory("All"))}
        className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
          selectedCategory === "All" && "bg-green-500 text-white"
        }`}>All</button>
          {
            categories.map((category, index) =>
              <button
              onClick={()=>dispatch(setCategory(category))}
              key={index} 
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
              >
                {category}
              </button>
            ) 
          }

     </div>
    </div>
  )
}
