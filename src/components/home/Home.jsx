import React, { useEffect } from 'react';
import Card from './Card';
import './home.css';
import { useNavigate } from 'react-router-dom';
// import Artist from './Artist';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="main w-100 flex">
            <div className="container">
                <h2 className="main-title">playlists</h2>
                <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            {/* <Artist/> */}
        </div>
    );
}
