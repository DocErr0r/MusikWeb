import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useStateProvider } from '../../utils/stateProvider';
import { reducerCase } from '../../utils/constants';

export default function Card(props) {
    const [{ songid }, dispatch] = useStateProvider();
    const songClick = (id) => {
        dispatch({ type: reducerCase.SET_SONG, payload: id });
    };

    return (
        <div
            className="card"
            onClick={(e) => {
                e.preventDefault();
                songClick(props.id);
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
