import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  phoneData:{
    phone: "",
    country: "",
    hash: "",
  },
  emailData:{
    email: "",
    country: "",
    hash: "",
  },
  intEmailData:{
    phone: "",
    email: "",
    country: "",
    hash: "",
  },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addPhoneAuthData: (state, action) => {
            const { phone, country, hash } = action.payload;
            if (phone) state.phoneData.phone = phone;
            if (country) state.phoneData.country = country;
            if (hash) state.phoneData.hash = hash;
        },
        addEmailAuthData: (state, action) => {
            const { email, country, hash } = action.payload;
            if (email) state.emailData.email = email;
            if (country) state.emailData.country = country;
            if (hash) state.emailData.hash = hash;
        },
        addIntEmailAuthData: (state, action) => {
            const { phone, email, country, hash } = action.payload;
            if (phone) state.intEmailData.phone = phone;
            if (email) state.intEmailData.email = email;
            if (country) state.intEmailData.country = country;
            if (hash) state.intEmailData.hash = hash;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addPhoneAuthData, addEmailAuthData, addIntEmailAuthData } = authSlice.actions

export default authSlice.reducer