import React, { useEffect } from 'react';
import Card from './Card';
import './home.css';
import { useStateProvider } from '../../utils/stateProvider';
import axios from 'axios';
import { reducerCase } from '../../utils/constants';
// import { useNavigate } from 'react-router-dom';
// import Artist from './Artist';

export default function Home() {
    // const navigate = useNavigate();
    const [{ token, slectedplaylistID, selectedPlaylist }, dispatch] = useStateProvider();
    useEffect(() => {
        const getplayList = async () => {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${slectedplaylistID}`, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            });
            const yourSong = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.images[0].url,
                tracks: response.data.tracks.items.map(({ track }) => ({
                    id: track.id,
                    name: track.name,
                    image: track.album.images[1].url,
                })),
            };
            dispatch({ type: reducerCase.SET_PLAYLIST, yourSong });
        };
        getplayList();
    }, [token, dispatch, slectedplaylistID]);

    return (
        <>
            {selectedPlaylist && (
                <div className="main w-100 flex">
                    <div className="container">
                        <div className="playlist flex">
                            <img className="playlistimag" src={selectedPlaylist.image} alt="" width={'150px'} />
                            <h2 className="main-title">{selectedPlaylist.name}</h2>
                        </div>
                        <div className="card-container">
                            {selectedPlaylist.tracks.map(({ id, name, image }) => {
                                return <Card key={id} name={name} image={image} />;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
