import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axiosInstance.js';


const getEmployees = createAsyncThunk('/employee/getEmployees',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('employee');
            return response.data;

        } catch (err) {
            return rejectWithValue(err)
        };



    });

const postEmployees = createAsyncThunk('/employee/postEmployees',
    async (details, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.post('employee', details);
            dispatch(getEmployees());
            return response.data;

        } catch (err) {
            return rejectWithValue(err)
        };
    });


const deleteEmployees = createAsyncThunk('/employee/deleteEmployees',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.delete(`employee/${id}`);
            dispatch(getEmployees());
            return response.data;

        } catch (err) {
            return rejectWithValue(err)
        };
    });


const updateEmployees = createAsyncThunk('/employee/updateEmployees',
    async (details, { rejectWithValue, dispatch }) => {
        try {
            const id = details.id;
            const response = await api.put(`employee/${id}`, details);
            dispatch(getEmployees());
            return response.data;

        } catch (err) {
            return rejectWithValue(err)
        };
    });

export { getEmployees, postEmployees, deleteEmployees, updateEmployees };