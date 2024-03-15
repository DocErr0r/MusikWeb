import React, { useEffect, useState } from 'react';
import { useStateProvider } from '../../../utils/stateProvider';
import axios from 'axios';
import { reducerCase } from '../../../utils/constants';

export default function Playlist() {
    const [playlists, setPlaylists] = useState(null);

    // const [{ token }] = useStateProvider();
    // useEffect(() => {
    //     const playlistData = async () => {
    //         const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    //             headers: {
    //                 Authorization: 'Bearer ' + token,
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         const items = response.data.items;
    //         // console.log(playlist);
    //         return items;
    //         // dispatch({ type: reducerCase.SET_PLAYLISTS, payload: playlist });
    //     };
    //     playlistData().then((res) => {
    //         setPlaylists(res);
    //     });
    // }, [token]);

    console.log(playlists);

    return (
        <div className="w-100 m-10">
            <h1>playlist</h1>
            {playlists?.map((item) => {
                return (
                    <div className="playlist" key={item.id}>
                        <h3>{item.name}</h3>
                    </div>
                );
            })}
        </div>
    );
}
