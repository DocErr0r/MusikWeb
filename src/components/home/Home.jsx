import React from 'react';
import Card from './Card';
import './home.css';
import Artist from './Artist';

export default function Home() {
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
