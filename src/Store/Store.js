import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './CartSLice';


const store = configureStore({
    reducer : {
       cart : cartReducer
    }
})

export default store