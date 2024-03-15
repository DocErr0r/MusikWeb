import React, { useEffect } from 'react';
import { useStateProvider } from '../../utils/stateProvider';
import Home from '../home/Home';
import Login from '../user/Login';

export default function Mainpage() {
    const [{ token }, { setToken }] = useStateProvider();
    useEffect(() => {
        const hash = window.location.hash;

        // window.location.href = '#';
        if (hash && !token) {
            const tokeno = hash.substring(1).split('&')[0].split('=')[1];
            setToken(tokeno);
        }
    }, [token, setToken]);

    // console.log(token);
    return <>{token ? <Home /> : <Login />}</>;
}
