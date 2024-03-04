import React from 'react';
// import Sidebar from "../sidebar/Sidebar";

export default function Login() {
    const connectspotify = () => {
        const clientId = '05a273599d2e47f4b5ea99fa9c6cba0d';
        const redirectUrl = 'http://localhost:3000';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scope = ['user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played'];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`;
    };

    return (
        <div>
            {/* <Sidebar/> */}
            <img src="" alt="" />
            <button onClick={connectspotify}>lets listen...</button>
        </div>
    );
}
