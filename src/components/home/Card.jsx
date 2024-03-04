import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function Card(props) {
    return (
        <div className="card">
            <PlayCircleFilledIcon className="playicon" />
            <button className="playbtn circle none">
                <img src="./public/playbtn.svg" alt="" />
            </button>
            <img src={props.image} alt="img" />
            <h3>{props.name}</h3>
            {/* <p>description</p> */}
        </div>
    );
}
