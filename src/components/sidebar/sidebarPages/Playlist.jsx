import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
            const response = await axios.get(`https://saavn.dev/api/playlists`,{
                params:{id:id,limit:50},
            }
            );
            const items = response.data.data.songs;
            // console.log(items);
            setPlaylist(response.data.data)
            dispatch(setplTracks(items));
        };
        playlistData();
    }, [token]);

    // console.log(playlist?.songs);

    return (
        <div className="container w-100">
            <h1>Playlist</h1>
            {playlist?(<div className=" m-10">
                <div className="playlist flex gap-1" style={{ margin: '1%' }}>
                    <img className="playlistimag" src={playlist?.image[2].url} alt="" width={'15%'} />
                    <div>
                        <h3 className="main-title">{playlist?.name}</h3>
                        <p>{playlist.description|| 'this playlist not have any descriptions'}</p>
                    </div>
                </div>
                <div className="card-container">
                    {pltracks?.map((item,index) => {
                        return <Card key={index} song={item} index={index} />;
                    })}
                </div>
            </div>):(
                <h3 className='center'>Loading...</h3>
            )}
        </div>
    );
}
