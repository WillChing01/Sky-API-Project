import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList/ImageList';
import ImageListItem from '@mui/material/ImageListItem/ImageListItem';
import React from 'react';
import useQuery from '../../hooks/useQuery';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PhotoCard from '../PhotoCard/PhotoCard';

import './Photos.css';

type PhotoData = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

// const Photos: React.FC = () => {
//     const url = 'https://jsonplaceholder.typicode.com/photos';
//     const limit = 50;
//     const {isLoading, data, error} = useQuery<PhotoData[]>(url);

//     if (error) return <ErrorBanner message={error} />;

//     if (isLoading) return <LoadingSpinner />;

//     return (
//         <div className='community'>
//             <h1 className='title' data-testid='title'>Photos</h1>
//             <div className='grid-container'>
//                 {
//                 data ? data.slice(0,Math.min(limit,data.length)).map(({thumbnailUrl}) => <PhotoCard key={thumbnailUrl} src={thumbnailUrl} />) 
//                      : 'No results found.'
//                 }
//             </div>
//         </div>
//     );
// };

const Photos: React.FC = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const limit = 50;
    const {isLoading, data, error} = useQuery<PhotoData[]>(url);

    if (error) return <ErrorBanner message={error} />;

    if (isLoading) return <LoadingSpinner />;

    return (
        <Container maxWidth='md'>
            <h1 className='title' data-testid='title'>Photos</h1>
            <ImageList sx={{ height: 450 }} cols={5} rowHeight={164}>
            {data.slice(0,Math.min(limit,data.length)).map((item) => (
                <ImageListItem key={item.thumbnailUrl}>
                <img
                    src={`${item.thumbnailUrl}?w=150&h=150&fit=crop&auto=format`}
                    srcSet={`${item.thumbnailUrl}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </Container>
    );
}

export default Photos;