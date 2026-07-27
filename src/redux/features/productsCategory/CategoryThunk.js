import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const getCategory = createAsyncThunk('/product-category',

    async (_, { rejectWithValue }) => {
        try {


            const response = await axios.get(`https://dummyjson.com/products/categories`);
            return response.data;

        } catch (err) {
            return rejectWithValue(err)
        };



    });


const getCategoryItems = createAsyncThunk('/product-category-items',

    async (value, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${value}`);

            return response.data.products;

        } catch (err) {
            return rejectWithValue(err)
        };



    });


export { getCategory, getCategoryItems };