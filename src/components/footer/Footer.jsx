import React, { memo, useEffect, useRef, useState } from 'react';
import './footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useDispatch, useSelector } from 'react-redux';
import { setTrackIndex } from '../../redux/slices/playerslice';
import { VolumeUp } from '@mui/icons-material';

export default memo(function Footer() {
    const [progress, setProgress] = useState(0);
    const [crtTime, setCrtTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const dispatch = useDispatch();
    const { trackIndex, pltracks } = useSelector((state) => state.playreducer);
    const [isPlaying, setIsPlaying] = useState(true);
    const [song, setSong] = useState(null);

    const audioRef = useRef();

    const formatTime = (seconds) => {
        if (!seconds) return '00:00:00';

        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        if (hrs === 0) {
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        setSong(pltracks[trackIndex]);
        setIsPlaying(true);
    }, [trackIndex, pltracks]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume]);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime;
        const totalDuration = audioRef.current.duration;

        setCrtTime(currentTime);
        setProgress((currentTime / totalDuration) * 100 || 0);
    };

    const handleSeek = (e) => {
        const seekValue = e.target.value;
        const newTime = (seekValue / 100) * duration;
        audioRef.current.currentTime = newTime;
        setProgress(seekValue);
    };

    const handleMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    return (
        <footer>
            <div className="player flex center-y">
                <div className="controls flex">
                    {song ? (
                        <div className="player-control gap-1 center-y w-100">
                            <div className="trackdtl gap-1 flex">
                                <img src={song?.image[0]?.url} alt="song" />
                                <div className="songinfo flex center-y gap-1 ">
                                    <div className="aboutsong flex center-y ">
                                        <div className="songtitle">
                                            <p className="title">{song?.name}</p>
                                            <div>
                                                <p>{song?.artists?.all[0]?.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="yoursaver center-y gap-1">
                                    <FavoriteBorderIcon />
                                    <PlaylistAddIcon />
                                </div>
                            </div>
                            <div className="controlsply">
                                <audio id="player" src={song?.downloadUrl[0]?.url} ref={audioRef} autoPlay={isPlaying} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleMetadata} />
                                <div className="seekbarC flex gap-1 center-x">
                                    <p>{formatTime(crtTime)}</p>
                                    <input type="range" min="0" max="100" value={progress} onChange={handleSeek} className="seekbar w-[70%] m-0 h-2 rounded-full accent-cyan-600 bg-gray-700 appearance-none cursor-pointer" />
                                    <p>{formatTime(duration)}</p>
                                </div>
                                <div>
                                    <button className="backgroundBtn" disabled={trackIndex === 0} onClick={() => dispatch(setTrackIndex(trackIndex - 1))}>
                                        <SkipPreviousIcon className="icon" style={{ color: 'white' }} />
                                    </button>
                                    {isPlaying ? <PauseIcon className="icon" onClick={playPauseHandler} /> : <PlayArrowIcon className="icon" onClick={playPauseHandler} />}
                                    <button className="backgroundBtn" disabled={trackIndex === pltracks.length - 1} onClick={() => dispatch(setTrackIndex(trackIndex + 1))}>
                                        <SkipNextIcon className="icon" style={{ color: 'white' }} />
                                    </button>
                                </div>
                            </div>
                            <div className="volumeBox gap-1">
                                <VolumeUp />
                                <input aria-label="volume" name="volume" type="range" min={0} step={0.05} max={1} value={volume} className="w-[70px] m-0 h-2 rounded-full accent-cyan-600 bg-gray-700 appearance-none cursor-pointer" onChange={(e) => setVolume(e.currentTarget.valueAsNumber)} />
                            </div>
                        </div>
                    ) : (
                        <p c>No song playing</p>
                    )}
                </div>
            </div>
        </footer>
    );
});
