import React, { useEffect, useState } from 'react';
import './footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setcrTrack } from '../../redux/slices/playerslice';

export default function Footer() {
    const [p, setP] = useState(0);
    const dispatch = useDispatch();
    const { token, track } = useSelector((state) => state.playreducer);
    // console.log(token);
    // const [{ token, track }, { getcurrentsong, changesong }] = useStateProvider();
    useEffect(() => {
        const getcurrenttrack = async () => {
            try {
                if (token) {
                    const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing `, {
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    });
                    // console.log(response.data)
                    if (response.data) {
                        let playingsong = {
                            id: response.data.item.id,
                            name: response.data.item.name,
                            isplaying: response.data.is_playing,
                            image: response.data.item.album.images[2].url,
                            artists: response.data.item.artists.map((artist) => artist.name),
                            timelength: Math.floor(response.data.item.duration_ms / 60000) + '.' + Math.floor(response.data.item.duration_ms % 60000),
                            progress: Math.floor(response.data.progress_ms / 60000) + '.' + (Math.floor(response.data.progress_ms % 60000) < 60 ? 0 : Math.floor(response.data.progress_ms % 60000)),
                        };
                        dispatch(setcrTrack(playingsong));
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };
        getcurrenttrack();
        // setTimeout(() => {
        if (track) setP((track.progress / track.timelength) * 100);
        // console.log(p);
        // }, 1000);
    }, [token, dispatch, track]);

    const chnagetrack = async (type) => {
        // await axios.post(
        //     `https://api.spotify.com/v1/me/player/${type}`,
        //     {},
        //     {
        //         headers: {
        //             Authorization: 'Bearer ' + token,
        //         },
        //     },
        // );
        console.log('require prieum');
    };
    const playpus = () => {
        console.log('ok');
    };

    // console.log(track);
    return (
        <footer>
            <div className="player flex center-y">
                <div className="controls flex">
                    {track && (
                        <div className="player-control gap-1 flex center-y w-100">
                            <img src={track.image} alt="song" />
                            <div className="songinfo flex center-y gap-1 ">
                                <div className="aboutsong flex center-y ">
                                    {/* <h2>ani</h2> */}
                                    <div className="songtitle">
                                        <p className="title">{track.name}</p>
                                        <div>
                                            <p>{track.artists}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="controlsply">
                                <div className="seekbarC flex gap-1">
                                    <p>{track.progress.slice(0, 4)}</p>
                                    <div className="seekbar">
                                        <div className="progress" style={{ left: `${p}%` }}></div>
                                    </div>
                                    <p>{track.timelength.slice(0, 4)}</p>
                                </div>
                                <div>
                                    <SkipPreviousIcon
                                        className="icon"
                                        onClick={() => {
                                            chnagetrack('previous');
                                        }}
                                    />
                                    {track.isplaying ? (
                                        <PauseIcon
                                            className="icon"
                                            onClick={() => {
                                                playpus();
                                            }}
                                        />
                                    ) : (
                                        <PlayArrowIcon
                                            className="icon"
                                            onClick={() => {
                                                playpus();
                                            }}
                                        />
                                    )}
                                    <SkipNextIcon
                                        className="icon"
                                        onClick={() => {
                                            chnagetrack('next');
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="yoursaver gap-1">
                                <FavoriteBorderIcon />
                                <PlaylistAddIcon />
                                {/* <PlaylistAddCheckIcon /> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}
