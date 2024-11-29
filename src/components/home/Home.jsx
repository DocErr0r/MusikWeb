import React, { useEffect } from 'react';
import './home.css';
import {  setPlatlists } from '../../redux/slices/playerslice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const { playlists } = useSelector((state) => state.playreducer);
    const options = {
        method: 'GET',
        url: 'https://saavn.dev/api/search/playlists',
        params: { query: 'top' },
    };
    useEffect(() => {
        const getplayList = async () => {
            try {
                const response = await axios.request(options);
                // console.log(response.data.data.results);
                const playlists = await response.data.data.results;
                dispatch(setPlatlists(playlists));
            } catch (error) {
                console.log(error);
            }
        };
        getplayList();
    }, [ dispatch]);
    // console.log(playlists);
    return (
        <>
            <div className="main w-100 flex">
                <div className="container w-100">
                    {playlists ? (
                        <div>
                            {playlists?.map((playlist) => (
                                    <Link key={playlist.id} to={'/playlist/'+playlist.id}>
                                        <div className="playlist flex gap-1" style={{ margin: '1%' }}>
                                            <img className="playlistimag" src={playlist.image[2].url} alt="" width={'18%'} />
                                            <div>
                                                <h3 className="main-title">{playlist.name}</h3>
                                                <p>Language: {playlist.language}</p>
                                                <p>Totel songs: {playlist.songCount}</p>
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
