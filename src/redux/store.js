import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice.js';
import likeToCartReducer from "./features/likeCart/likeCartSlice.js";
import popupReducer from './features/popup/popupSlice.js';
import employeeReducer from './features/employee/employeeSlice.js';
import productReducer from './features/product/productSlice.js';
import categoryReducer from './features/productsCategory/CategorySlice.js';
import authSliceReducer from './features/auth/authSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        like: likeToCartReducer,
        popup: popupReducer,
        employee: employeeReducer,
        product: productReducer,
        category: categoryReducer,
        auth:authSliceReducer,

    }
});

export default store 