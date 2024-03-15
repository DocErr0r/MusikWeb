import React, { useState } from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useStateProvider } from '../../utils/stateProvider';

export default function Card(props) {
    const [songid, setSongid] = useState(null);

    return (
        <div
            className="card"
            onClick={() => {
                setSongid(props.id);
                console.log(songid);
            }}>
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
