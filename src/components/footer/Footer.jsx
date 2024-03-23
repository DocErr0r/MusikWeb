import React, { useEffect, useRef, useState } from 'react';
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
import { VolumeUp } from '@mui/icons-material';

export default function Footer() {
    const [p, setP] = useState(0);
    const [crtTime, setCrtTime] = useState(0);
    const [volume, setVolume] = useState(0.1);

    const dispatch = useDispatch();
    const { token, track, pltracks } = useSelector((state) => state.playreducer);
    const { song } = track;
    // console.log(song);

    useEffect(() => {}, [token, dispatch]);
    const [isplaying, setIsplaying] = useState(false);

    const audioRef = useRef();
    const playpus = (audioRef) => {
        if (!isplaying) audioRef.current.play();
        else audioRef.current.pause();
        setIsplaying(!isplaying);
    };
    let duration = song?.duration_ms ? { min: Math.floor(song.duration_ms / 60000), sec: Math.floor((song.duration_ms % 60000) / 1000) > 10 ? Math.floor((song.duration_ms % 60000) / 1000) : `0${Math.floor((song.duration_ms % 60000) / 1000)}` } : null;
    // console.log(track);
    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);

        const time = e.currentTarget.currentTime;
        audioRef.current.volume = volume;
        setP(percent);
        // setPercentage(+percent);
        setCrtTime(time.toFixed(0));
    };
    return (
        <footer>
            <div className="player flex center-y">
                <div className="controls flex">
                    {track.song ? (
                        <div className="player-control gap-1 center-y w-100">
                            <div className="trackdtl gap-1 flex">
                                <img src={song.album.images[2].url} alt="song" />
                                <div className="songinfo flex center-y gap-1 ">
                                    <div className="aboutsong flex center-y ">
                                        {/* <h2>ani</h2> */}
                                        <div className="songtitle">
                                            <p className="title">{song.name}</p>
                                            <div>
                                                <p>{song.artists[0].name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="yoursaver center-y gap-1">
                                    <FavoriteBorderIcon />
                                    <PlaylistAddIcon />
                                    {/* <PlaylistAddCheckIcon /> */}
                                </div>
                            </div>
                            <div className="controlsply">
                                <audio id="player" src={song.preview_url} hidden={true} onTimeUpdate={getCurrDuration} controls ref={audioRef} autoPlay={isplaying} />
                                {audioRef.current && (
                                    <div className="seekbarC flex gap-1 center-x">
                                        {/* <p>{Math.floor(audioRef.current.currentTime) + 's'}</p> */}
                                        <p>{crtTime}s</p>
                                        <div className="seekbar">
                                            <div className="progress" style={{ left: `${p}%` }}></div>
                                        </div>

                                        <p>{Math.floor(audioRef.current.duration) + 's'}</p>
                                        {/* <p>{duration.min + ':' + duration.sec}</p> */}
                                    </div>
                                )}
                                <div>
                                    <SkipPreviousIcon
                                        className="icon"
                                        onClick={() => {
                                            audioRef.current.currentTime = audioRef.current.currentTime - 5;
                                        }}
                                    />
                                    {isplaying ? (
                                        <PauseIcon
                                            className="icon"
                                            onClick={() => {
                                                playpus(audioRef);
                                            }}
                                        />
                                    ) : (
                                        <PlayArrowIcon
                                            className="icon"
                                            onClick={() => {
                                                playpus(audioRef);
                                            }}
                                        />
                                    )}
                                    <SkipNextIcon
                                        className="icon"
                                        onClick={() => {
                                            // skip('next');
                                            audioRef.current.currentTime = audioRef.current.currentTime + 5;
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="volumeBox gap-1">
                                <VolumeUp />
                                <input
                                    aria-label="volume"
                                    name="volume"
                                    type="range"
                                    min={0}
                                    step={0.05}
                                    max={1}
                                    value={volume}
                                    className="w-[70px] m-0 h-2 rounded-full accent-cyan-600 bg-gray-700 appearance-none cursor-pointer"
                                    onChange={(e) => {
                                        setVolume(e.currentTarget.valueAsNumber);
                                        audioRef.current.volume = e.currentTarget.valueAsNumber;
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <h3 className="center-x w-100 flex">not playing</h3>
                    )}
                </div>
            </div>
        </footer>
    );
}
