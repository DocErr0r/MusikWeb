import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  setTrackIndex } from '../../redux/slices/playerslice';

export default function Card({song,index}) {
    const dispatch = useDispatch();
    return (
        <div
            className="card"
            onClick={(e) => {
                e.preventDefault();
                dispatch(setTrackIndex(index));
                // console.log(props.track);
            }}>
            <PlayCircleFilledIcon className="playicon" />
            <button className="playbtn circle none">
                <img src="./public/playbtn.svg" alt="" />
            </button>
            <img src={song?.image[2].url} alt="img" />
            <h3>{song?.name}</h3>
            {/* <p>description</p> */}
        </div>
    );
}
