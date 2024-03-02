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
        <footer>
            <div className="player flex center-y">
                <div className="controls flex">
                    <div className="player-control gap-1 flex center-y w-100">
                        <div className="songinfo flex center-y gap-1 ">
                            <div className="aboutsong flex center-y ">
                                <h2>ani</h2>
                                <img src="https://demo.avtheme.com/musik/wp-content/uploads/sites/7/2023/10/500x500bb-48.jpg" alt="song" />
                                <p className="title">song titile for sivtbtgbytb</p>
                            </div>
                            <div className="yoursaver gap-1">
                                <FavoriteBorderIcon />
                                <PlaylistAddIcon />
                                {/* <PlaylistAddCheckIcon /> */}
                            </div>
                        </div>
                        <div className="controlsply">
                            <SkipPreviousIcon className="icon" />
                            <PlayArrowIcon className="icon" />
                            <PauseIcon className="icon" />
                            <SkipNextIcon className="icon" />
                        </div>
                        <div className="seekbarC flex gap-1">
                            <p>from</p>
                            <div className="seekbar"></div>
                            <p>end</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
