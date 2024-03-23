import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setcrTrack } from '../../redux/slices/playerslice';

export default function Card(props) {
    // const { token } = useSelector((state) => state.playreducer);
    const dispatch = useDispatch();
    // const settrack = async (id) => {
    //     try {
    //         await axios.put(
    //             'https://api.spotify.com/v1/me/player ',
    //             { device_ids: [id] },
    //             {
    //                 headers: {
    //                     Authorization: 'Bearer ' + token,
    //                 },
    //             },
    //         );
    //     } catch (e) {
    //         console.log(e.response.data.error.message);
    //     }
    // };

    return (
        <div
            className="card"
            onClick={(e) => {
                e.preventDefault();
                dispatch(setcrTrack({song:props.track,isplaying:true}));
                // console.log(props.track);
            }}>
            <PlayCircleFilledIcon className="playicon" />
            <button className="playbtn circle none">
                <img src="./public/playbtn.svg" alt="" />
            </button>
            <img src={props.track.album.images[0].url} alt="img" />
            <h3>{props.track.name}</h3>
            {/* <p>description</p> */}
        </div>
    );
}
