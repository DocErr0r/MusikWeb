import React from 'react';
import "./login.css"
import { loginendpoin } from '../../spotify';
// import Sidebar from "../sidebar/Sidebar";

export default function Login() {
    const connectspotify = () => {
         window.location.href = loginendpoin };

    return (
        <div className='login'>
            {/* <Sidebar/> */}
            <img src="" alt="" />
            <button className='login-btn' onClick={connectspotify}>lets listen...</button>
        </div>
    );
}
