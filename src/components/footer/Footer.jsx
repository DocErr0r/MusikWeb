import React, { useEffect, useState } from 'react';
import './footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { useStateProvider } from '../../utils/stateProvider';

export default function Footer() {
    const [track, setTrack] = useState(null);
    // const [{ token, track }, { getcurrentsong, changesong }] = useStateProvider();
    // useEffect(() => {
    //     const getcurrenttrack = async () => {
    //         try {
    //             if (token) {
    //                 const tracks = await getcurrentsong(token);
    //                 // setTrack(tracks);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     // getcurrenttrack();
    // }, [token, getcurrentsong]);

    const chnagetrack = (type) => {
        // changesong(token, type);
        console.log(type);
    };
    const playpus = () => {
        console.log('ok');
    };

    console.log(track);
    return (
        <footer>
            <div className="player flex center-y">
                <div className="controls flex">
                    {track && (
                        <div className="player-control gap-1 flex center-y w-100">
                            <div className="songinfo flex center-y gap-1 ">
                                <div className="aboutsong flex center-y ">
                                    {/* <h2>ani</h2> */}
                                    <img src={track.image} alt="song" />
                                    <div className="songtitle">
                                        <p className="title">{track.name}</p>
                                        <p>{track.artists}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="controlsply">
                                <div className="seekbarC flex gap-1">
                                    <p>from</p>
                                    <div className="seekbar"></div>
                                    <p>end</p>
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
