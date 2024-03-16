import React, { useEffect, useState } from 'react';
import Card from './Card';
import './home.css';
import { getSongs } from '../../redux/slices/playerslice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import Artist from './Artist';

function Home() {
    const dispatch = useDispatch();
    const { token, playlists } = useSelector((state) => state.playreducer);
    useEffect(() => {
        const getplayList = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/37i9dQZF1DWZNJXX2UeBij`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                let yourSong = {
                    id: await response.data.id,
                    name: await response.data.name,
                    image: await response.data.images[0].url,
                    tracks: await response.data.tracks.items.map(({ track }) => ({
                        id: track.id,
                        name: track.name,
                        image: track.album.images[1].url,
                    })),
                };
                dispatch(getSongs(yourSong));
            } catch (error) {
                console.log(error);
            }
        };
        getplayList();
    }, [token, dispatch]);
    // console.log(playlists);
    return (
        <>
            {playlists ? (
                <div className="main w-100 flex">
                    <div className="container">
                        <div className="playlist flex">
                            <img className="playlistimag" src={playlists.image} alt="" width={'150px'} />
                            <h2 className="main-title">{playlists.name}</h2>
                        </div>
                        <div className="card-container">
                            {playlists?.tracks.map(({ id, name, image }) => {
                                return <Card key={id} id={id} name={name} image={image} />;
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="center">Loading...</h2>
            )}
        </>
    );
}
export default Home;
