import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerData: JSON.parse(localStorage.getItem("register")) ||  [],
    loginData: JSON.parse(localStorage.getItem("login"))  || null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.registerData.push(action.payload);
            localStorage.setItem('register', JSON.stringify(state.registerData));
        },
        loginUser: (state, action) => {
            state.loginData = action.payload;
            localStorage.setItem('login', JSON.stringify(state.loginData));
        },
    },

});

export const { registerUser, loginUser} = authSlice.actions


export default authSlice.reducer