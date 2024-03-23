import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    selectedplaylistID: '37i9dQZF1DWZNJXX2UeBij',
    playlists: null,
    track: { song: null, isplaying: true },
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
        }
    }
})

// Action creators are generated for each case reducer function
export const { setToken, gettoken, settokenlocal, getSongs, setcrTrack, setplTracks } = playerSlice.actions

export default playerSlice.reducer