import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tbcStatus: "false",
    TBCStep1: {},
    TBCStep2: {},
    TBCStep3: {},
    TBCStep4: {},
    TBCStep5: {},
    TBCStep6: {},
    TBCStep7: {},
    TBCStep8: {},
    TBCStep9: {},
}

export const tbcSlice = createSlice({
    name: 'tbc',
    initialState,
    reducers: {
        activateTBC: (state, action) => {
            const { status } = action.payload;
            if (status) state.tbcStatus = status;
        },
        addTBCStep1: (state, action) => {
            const { email, country, hash } = action.payload;
            if (email) state.emailData.email = email;
            if (country) state.emailData.country = country;
            if (hash) state.emailData.hash = hash;
        }
    },
})

// Action creators are generated for each case reducer function
export const { activateTBC, addTBCStep1 } = tbcSlice.actions

export default tbcSlice.reducer