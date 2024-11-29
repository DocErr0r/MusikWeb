import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: false,
    playlists: null,
    track: { song: null },
    trackIndex: null,
    pltracks: [],

}

const playerSlice = createSlice({
    name: 'playerSlice',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        settokenlocal: (state) => {
            localStorage.setItem('token', state.token)
        },
        gettoken: (state) => {
            state.token = localStorage.getItem('token');
        },
        getSongs: (state, action) => {
            state.playlists = action.payload;
        },
        setplTracks: (state, action) => {
            state.pltracks = action.payload;
        },
        setcrTrack: (state, action) => {
            state.track = action.payload
        },
        setTrackIndex: (state, action) => {
            state.trackIndex = action.payload
        },
        setPlatlists: (state, action) => {
            state.playlists = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setToken, gettoken, settokenlocal, getSongs, setcrTrack, setplTracks,setPlatlists ,setTrackIndex} = playerSlice.actions

export default playerSlice.reducer