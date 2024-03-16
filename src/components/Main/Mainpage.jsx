import React, { useEffect } from 'react';
import Home from '../home/Home';
import Login from '../user/Login';
import { useDispatch, useSelector } from 'react-redux';
import { gettoken, setToken, settokenlocal } from '../../redux/slices/playerslice';

export default function Mainpage() {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.playreducer);
    useEffect(() => {
        const hash = window.location.hash;
        // dispatch(gettoken());
        window.location.href = '#';
        if (hash && !token) {
            const tokeno = hash.substring(1).split('&')[0].split('=')[1];
            // dispatch(settokenlocal());
            dispatch(setToken(tokeno));
        }
    }, [token, dispatch]);

    // console.log(token);
    return <>{token ? <Home /> : <Login />}</>;
}
