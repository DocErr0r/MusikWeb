import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null
}

 const playerSlice = createSlice({
    name: 'playerSlice',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        settokenlocal:(state)=>{
            localStorage.setItem('token',state.token)
        },
        gettoken:(state)=>{
            state.token=localStorage.getItem('token');
        }
    }
})

// Action creators are generated for each case reducer function
export const { setToken, gettoken, settokenlocal } = playerSlice.actions

export default playerSlice.reducer