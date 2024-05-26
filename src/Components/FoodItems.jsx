import React from 'react'
import { FoodCards } from './FoodCards'
import FoodData from '../Data/FoodData.jsx'
import { useSelector } from 'react-redux'

export const FoodItems = () => {

   const category = useSelector(state => state.category.category)
   const search = useSelector(state => state.search.search)

  return (
    <div className='flex flex-wrap gap-10 justify-center md:justify-start mx-6 my-10'>
      {
           FoodData.filter(food => {
            if(category === 'All' ){
              return food.name.toLowerCase().includes(search.toLowerCase());
            }else{
            return (category === food.category && food.name.toLowerCase().includes(search.toLowerCase()));
            }
           }).map(food => {
          return (
            <FoodCards key={food.id} id={food.id} name = {food.name} description={food.desc} price={food.price} rating={food.rating} image={food.img} />
          )
        })
      }
    </div>
  )
}
