import React from 'react';
import Card from './Card';
import './home.css'

export default function Home() {
    return (
        <div>
            <div className="main w-100 flex">
                <div className="container">
                    <h1 className="my-1 mt-3">playlists</h1>
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
            </div>
        </div>
    );
}
