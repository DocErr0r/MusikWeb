import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import './browse.css';
import { useDispatch } from 'react-redux';

export default function Browse() {
    const [seachparams] = useSearchParams();
    const search = seachparams.get('search');
    const [seachResult, setSearchResult] = useState(null);

    const searching = async () => {
        const options = {
            method: 'GET',
            url: 'https://saavn.dev/api/search',
            params: { query: search },
        };
        try {
            const { data } = await axios.request(options);
            // console.log(data.data);
            setSearchResult(data.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        searching();
    }, [search]);
    if(!seachResult){
        return(
            <div className="container w-100">
                <h3 className='center'>Loading...</h3>
            </div>
        )
    }
    return (
        <div className="container w-100 p-10">
            <h1>Browse</h1>
            {/* {seachResult?.songs && (
                <>
                    <h2>Songs</h2>
                    {seachResult.songs?.results.map((s) => (
                        <div key={s.id} className="SSongcard">
                            <img src={s.image[0].url} alt="song image" />
                            <div>
                                <h3>{s.title}</h3>
                                <p>{s.language}</p>
                            </div>
                        </div>
                    ))}
                </>
            )} */}
            {seachResult?.playlists?.results.length !== 0 && (
                <>
                    <h2>Playlists</h2>
                    {seachResult.playlists.results.map((s) => (
                        <Link key={s.id} to={'/playlist/' + s.id}>
                            <div className="SSongcard">
                                <img src={s.image[0].url} alt="" />
                                <div>
                                    <h3>{s.title}</h3>
                                    <p>{s.language}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            )}
        </div>
    );
}
