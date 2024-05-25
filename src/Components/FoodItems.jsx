import React from 'react'
import { FoodCards } from './FoodCards'
import FoodData from '../Data/FoodData.jsx'

export const FoodItems = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center md:justify-start mx-6 my-10'>
      {
        FoodData.map(food => {
          return (
            <FoodCards key={food.id} id={food.id} name = {food.name} description={food.desc} price={food.price} rating={food.rating} image={food.img} />
          )
        })
      }
    </div>
  )
}
