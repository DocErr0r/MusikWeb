import React from 'react';
import './footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="player flex center-y">
                    <div className="controls flex">
                        <div className="player-control gap-1 flex">
                            <div>
                                <SkipPreviousIcon />
                            </div>
                            <div>
                                <PlayArrowIcon />
                            </div>
                            <div>
                                <PauseIcon />
                            </div>
                            <div>
                                <SkipNextIcon />
                            </div>
                        </div>
                        <div className="yoursaver gap-1">
                            <FavoriteBorderIcon />
                            <PlaylistAddIcon />
                            <PlaylistAddCheckIcon />
                        </div>
                        <div className="songinfo flex">
                            <img src="song" alt="song" />
                            <p>titile</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
