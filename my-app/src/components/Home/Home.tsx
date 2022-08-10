import React from 'react';
import { BirdData } from '../../contracts/query';

import useQuery from '../../hooks/useQuery';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PhotoCard from '../PhotoCard/PhotoCard';

const Home: React.FC = () => {

    const url = 'https://some-random-api.ml/animal/birb';
    const imgQuery = useQuery<BirdData>(url);

    if (imgQuery.error) return <ErrorBanner message={imgQuery.error} />;

    if (imgQuery.isLoading) return <LoadingSpinner />;

    return (
        <div className='community'>
            <div className='text-center'>
                <h1 className='title' data-testid='title'>Welcome!</h1>
                <div>
                    <button
                        className='btn btn-secondary'
                        onClick={() => window.location.reload()}
                    >Generate new image</button>
                </div>

                <PhotoCard src={imgQuery.data.image}/>
                <div>{imgQuery.data.fact}</div>
            </div>
        </div>
    );
};

export default Home;