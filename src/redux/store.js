import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice.js';
import likeToCartReducer from "./features/likeCart/likeCartSlice.js";
import popupReducer from './features/popup/popupSlice.js';
import employeeReducer from './features/employee/employeeSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        like: likeToCartReducer,
        popup: popupReducer,
        employee: employeeReducer

    }
});

export default store 