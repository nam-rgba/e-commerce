import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    captchaChecked: false,
    user: {
        name:'',
        email:'',
        receiveSumary: false,
        futureContact: false
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setCaptchaChecked: (state, action) => {
            state.captchaChecked = action.payload
        }
    }
})

export const {setUser, setCaptchaChecked} = userSlice.actions;

export default userSlice.reducer;