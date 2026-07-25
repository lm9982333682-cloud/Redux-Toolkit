import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    like: JSON.parse(localStorage.getItem('like')) || [],
    showLike: JSON.parse(localStorage.getItem('showLike')) || false,
}

const likeCartSlice = createSlice({
    name: 'like to cart',
    initialState,
    reducers: {
        likeToCart: (state, action) => {
            state.like.push(action.payload);
            localStorage.setItem('like', JSON.stringify(state.like))
        },
        deleteLikeToCart: (state, action) => {
            state.like = state.like.filter(obj => obj.id !== action.payload);
            localStorage.setItem('like', JSON.stringify(state.like))
        },
        showItemLike: (state, action) => {
            state.showLike = action.payload;
            localStorage.setItem('showLike', action.payload);
        }
    }
});

export const { likeToCart, deleteLikeToCart, showItemLike } = likeCartSlice.actions;

export default likeCartSlice.reducer