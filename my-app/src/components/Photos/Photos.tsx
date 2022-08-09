import React from 'react';
import useQuery from '../../hooks/useQuery';
import PhotoCard from '../PhotoCard/PhotoCard';

import './Photos.css';

type PhotoData = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

const Photos: React.FC = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const limit = 50;
    const {isLoading, data, error} = useQuery<PhotoData[]>(url);

    if (error) return <>Something went wrong!</>;

    if (isLoading) return <>Loading...</>;

    return (
        <div className='community'>
            <h1 className='title' data-testid='title'>Photos</h1>
            <div className='grid-container'>
                {
                data ? data.slice(0,Math.min(limit,data.length)).map(({thumbnailUrl}) => <PhotoCard key={thumbnailUrl} src={thumbnailUrl} />) 
                    : 'No results found.'
                }
            </div>
        </div>
    );
};

export default Photos;