import React, { useEffect, useState } from 'react';
import Card from './Card';
import './home.css';
import { useStateProvider } from '../../utils/stateProvider';
import axios from 'axios';
import { reducerCase } from '../../utils/constants';
// import { useNavigate } from 'react-router-dom';
// import Artist from './Artist';

export default function Home() {
    const [playlist, setPlaylist] = useState(null);
    // const navigate = useNavigate();
    const [{ token, slectedplaylistID }, dispatch] = useStateProvider();
    useEffect(() => {
        const getplayList = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/${slectedplaylistID}`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
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
                console.log(yourSong);
                return yourSong;
            } catch (error) {
                console.log(error);
            }
        };
        getplayList().then((res) => setPlaylist(res));
    }, [token, slectedplaylistID]);

    // console.log(playlist);
    return (
        <>
            {playlist && (
                <div className="main w-100 flex">
                    <div className="container">
                        <div className="playlist flex">
                            <img className="playlistimag" src={playlist.image} alt="" width={'150px'} />
                            <h2 className="main-title">{playlist.name}</h2>
                        </div>
                        <div className="card-container">
                            {playlist.tracks.map(({ id, name, image }) => {
                                return <Card key={id} id={id} name={name} image={image} />;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
