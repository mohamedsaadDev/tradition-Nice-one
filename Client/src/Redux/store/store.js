import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slice/cartSlice"; 
import { authReducer } from "../slice/authSlice";
import {productsReducer} from "../slice/prodectSlice"
import { registerReducer } from "../slice/registerSlice";
const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
        products: productsReducer,
        register: registerReducer
    }
})
export default store;