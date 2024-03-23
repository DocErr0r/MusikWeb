import React, { useEffect } from 'react';
import Card from './Card';
import './home.css';
import { getSongs, setplTracks } from '../../redux/slices/playerslice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import Artist from './Artist';

function Home() {
    const dispatch = useDispatch();
    const { token, playlists } = useSelector((state) => state.playreducer);
    useEffect(() => {
        const getplayList = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                // console.log(response.data.tracks.items);
                let yourSong = {
                    id: await response.data.id,
                    name: await response.data.name,
                    image: await response.data.images[0].url,
                    description: await response.data.description,
                    tracks: await response.data.tracks.items,
                };
                const pltrack = await response.data.tracks;
                dispatch(getSongs(yourSong));
                dispatch(setplTracks(pltrack));
            } catch (error) {
                console.log(error);
            }
        };
        getplayList();
    }, [token, dispatch]);
    // console.log(pltracks);
    return (
        <>
            {playlists ? (
                <div className="main w-100 flex">
                    <div className="container">
                        <div className="playlist flex">
                            <img className="playlistimag" src={playlists.image} alt="" width={'150px'} />
                            <div>
                                <h2 className="main-title">{playlists.name}</h2>
                                <p>{playlists.description}</p>
                            </div>
                        </div>
                        <div className="card-container">
                            {playlists?.tracks?.map(({ track }) => {
                                return <Card key={track.id} track={track} />;
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
