import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./ProductThunk";

const initialState = {
    product: [],
    loading: true,
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setFilterData: (state, action) => {
            state.product = action.payload;
        },
    },

    extraReducers: (builder) => {
        // get product
        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;

        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });
    }


});

export const { setFilterData } = productSlice.actions


export default productSlice.reducer