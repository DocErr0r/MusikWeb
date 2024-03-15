import React, { useEffect, useState } from 'react';
import Card from './Card';
import './home.css';
import { useStateProvider } from '../../utils/stateProvider';
// import Artist from './Artist';

function Home() {
    const [playlists, setPlaylists] = useState(null);
    // const [{ token, selectedplaylistID, playlists }, { getsongs }] = useStateProvider();
    // useEffect(() => {
    //     const getplayList = async () => {
    //         try {
    //             await getsongs(token, selectedplaylistID);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getplayList();
    // }, [token, selectedplaylistID]);
    // console.log(playlists);
    return (
        <>
            {playlists ? (
                <div className="main w-100 flex">
                    <div className="container">
                        <div className="playlist flex">
                            <img className="playlistimag" src={playlists.image} alt="" width={'150px'} />
                            <h2 className="main-title">{playlists.name}</h2>
                        </div>
                        <div className="card-container">
                            {playlists.tracks.map(({ id, name, image }) => {
                                return <Card key={id} id={id} name={name} image={image} />;
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
}
export default Home;
