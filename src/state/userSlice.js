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
        setName: (state, action) => {
            state.user.name = action.payload
        },
        setMail: (state, action) => {
            state.user.email = action.payload
        },
        setSumary: (state, action) => {
            state.user.receiveSumary = action.payload
        },
        setFC: (state, action) => {
            state.user.futureContact = action.payload
        },
        setCaptchaChecked: (state, action) => {
            state.captchaChecked = action.payload
        }
    }
})

export const {setName, setMail, setSumary, setFC, setCaptchaChecked} = userSlice.actions;

export default userSlice.reducer;