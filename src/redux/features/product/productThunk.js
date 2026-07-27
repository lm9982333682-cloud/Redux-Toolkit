import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const getProduct = createAsyncThunk('/product', async (details, { rejectWithValue }) => {
    try {
        const { skip, limit, search, category } = details;
        

        let api = ''
        if (search) {
            console.log(search);
            api = `https://dummyjson.com/products/search?q=${search}`
        } else if (category) {
            api = `https://dummyjson.com/products/category/${category}`
        } else  {
            api = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        };

        const response = await axios.get(api);

        return response.data.products;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    };
});

export { getProduct };