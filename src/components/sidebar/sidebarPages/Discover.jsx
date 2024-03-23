import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Discover() {
    useEffect(() => {
        toast('Wow so easy!');
    }, []);

    return (
        <div>
            <h1>Discover</h1>
        </div>
    );
}
