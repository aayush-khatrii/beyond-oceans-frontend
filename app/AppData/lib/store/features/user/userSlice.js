import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData:{
        auth: false,
        userId: "",
        name: "",
        email: "",
        phone: "",
        DOB: "",
        maritalStatus: "",
        googleID: "",
        authLv: "",
        address: {}
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const data = action.payload
            if(data.auth) state.userData.auth = data.auth
            if(data.userId) state.userData.userId = data.userId
            if(data.name) state.userData.name = data.name
            if(data.email) state.userData.email = data.email
            if(data.phone) state.userData.phone = data.phone
            if(data.address) state.userData.address = data.address
            if(data.maritalStatus) state.userData.maritalStatus = data.maritalStatus
            if(data.DOB) state.userData.DOB = data.DOB
            if(data.googleID) state.userData.googleID = data.googleID
            if(data.authLv) state.userData.authLv = data.authLv
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions

export default userSlice.reducer