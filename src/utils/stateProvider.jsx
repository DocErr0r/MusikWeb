import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export const myContext = createContext();

export const Stateprovider = ({ children, reducer }) => {
    const [initialState, setInitialState] = useState({
        token: null,
        playlists: null,
        selectedplaylistID: '37i9dQZF1DWZNJXX2UeBij',
        selectedPlaylist: null,
        profile: null,
        songid: null,
        track: null,
    });

    const setToken = (token) => {
        setInitialState({ ...initialState, token: token });
    };
    const getsongs = async (token, selectedplaylistID) => {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedplaylistID}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        let yourSong = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.images[0].url,
            tracks: response.data.tracks.items.map(({ track }) => ({
                id: track.id,
                name: track.name,
                image: track.album.images[1].url,
            })),
        };
        // return yourSong;
        setInitialState({ ...initialState, playlists: yourSong });
        // console.log(yourSong);
    };
    const changesong = async (token, type) => {
       await axios.post(`https://api.spotify.com/v1/me/player/${type}`,{}, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    };
    const getcurrentsong = async (token) => {
        const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing `, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        if (response.data) {
            let playingsong = {
                id: response.data.item.id,
                name: response.data.item.name,
                isplaying: response.data.is_playing,
                image: response.data.item.album.images[2].url,
                artists: response.data.item.artists.map((artist) => artist.name),
            };
            // return playingsong;
            setInitialState({ ...initialState, track: playingsong });
        }
    };

    // <myContext.Provider value={useReducer(reducer, intialState)}>
    return <myContext.Provider value={[initialState, { setToken, getsongs, getcurrentsong ,changesong}]}>{children}</myContext.Provider>;
};

export const useStateProvider = () => useContext(myContext);
