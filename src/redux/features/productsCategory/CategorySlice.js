import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getCategoryItems } from "./CategoryThunk";

const initialState = {
    category: [],
    categoryItem: [],
    loading: true,
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,

    extraReducers: (builder) => {
        // Get all products categories
        builder.addCase(getCategory.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.loading = false;

        });

        builder.addCase(getCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });


        // Get products by a category
        builder.addCase(getCategoryItems.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getCategoryItems.fulfilled, (state, action) => {
            state.categoryItem = action.payload;
            state.loading = false;

        });

        builder.addCase(getCategoryItems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });
    },


});



export default categorySlice.reducer