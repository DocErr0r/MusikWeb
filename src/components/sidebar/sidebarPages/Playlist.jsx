import React, { useEffect, useState } from 'react';
import { useStateProvider } from '../../../utils/stateProvider';
import axios from 'axios';
import { reducerCase } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setplTracks } from '../../../redux/slices/playerslice';
import Card from '../../home/Card';

export default function Playlist() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [playlist,setPlaylist]=useState(null)
    const { token, pltracks } = useSelector((state) => state.playreducer);
    useEffect(() => {
        const playlistData = async () => {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            });
            const items = response.data.tracks.items;
            // console.log(items);
            setPlaylist(response.data)
            dispatch(setplTracks(items));
        };
        playlistData();
    }, [token]);

    // console.log(playlist);
    if(!playlist){
        return <h1>Loading...</h1>
    }

    return (
        <div className="container w-100">
            <h1>Playlist</h1>
            <div className=" m-10">
                <div className="playlist flex gap-1" style={{ margin: '1%' }}>
                    <img className="playlistimag" src={playlist?.images[0].url} alt="" width={'15%'} />
                    <div>
                        <h3 className="main-title">{playlist.name}</h3>
                        <p>{playlist.description|| 'this playlist not have any descriptions'}</p>
                    </div>
                </div>
                <div className="card-container">
                    {pltracks?.map((item) => {
                        return <Card song={item.track} key={item.id} />;
                    })}
                </div>
            </div>
        </div>
    );
}
