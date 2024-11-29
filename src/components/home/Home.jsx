import React, { useEffect } from 'react';
import Card from './Card';
import './home.css';
import { getSongs, setPlatlists, setplTracks } from '../../redux/slices/playerslice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Artist from './Artist';

function Home() {
    const dispatch = useDispatch();
    const { token, playlists } = useSelector((state) => state.playreducer);
    useEffect(() => {
        const getplayList = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                // console.log(response.data.items);
                const playlists = await response.data.items;
                dispatch(setPlatlists(playlists));
            } catch (error) {
                console.log(error);
            }
        };
        getplayList();
    }, [token, dispatch]);
    // console.log(playlists);
    return (
        <>
            <div className="main w-100 flex">
                <div className="container w-100">
                    {playlists ? (
                        <div>
                            {playlists.map((playlist) => (
                                    <Link key={playlist.id} to={'/playlist/'+playlist.id}>
                                        <div className="playlist flex gap-1" style={{ margin: '1%' }}>
                                            <img className="playlistimag" src={playlist.images[0].url} alt="" width={'18%'} />
                                            <div>
                                                <h3 className="main-title">{playlist.name}</h3>
                                                <p>{playlist.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                            ))}
                        </div>
                    ) : (
                        <h2 className="center">Loading...</h2>
                    )}
                </div>
            </div>
        </>
    );
}
export default Home;
