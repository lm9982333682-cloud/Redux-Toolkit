import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [action.payload, ...state.cart];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(obj => obj.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        changeQty: (state, action) => {
            const { id, finalQty } = action.payload;
            // console.log(id, finalQty);


            state.cart = state.cart.filter(obj => {
                if (obj.id === id) {
                    obj.qty = finalQty;
                };
                return obj;
            });

            localStorage.setItem('cart', JSON.stringify(state.cart));

        },

    },
});


export const { addToCart, removeToCart, changeQty } = cartSlice.actions

export default cartSlice.reducer