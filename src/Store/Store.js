import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './CartSLice';
import categoryReducer from './CategorySlice'
import searchReducer from './SearchSlice'


const store = configureStore({
    reducer : {
       cart : cartReducer,
       category : categoryReducer,
       search : searchReducer,
    }
})

export default store