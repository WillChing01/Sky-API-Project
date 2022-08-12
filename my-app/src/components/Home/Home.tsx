import React from 'react';
import { BirdData } from '../../contracts/query';

import useQuery from '../../hooks/useQuery';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import PhotoCard from '../PhotoCard/PhotoCard';
import { Box, Container } from '@mui/material';

const Home: React.FC = () => {

    const url = 'https://some-random-api.ml/animal/birb';
    const { isLoading, data, error, refetch } = useQuery<BirdData>(url);

    if (error) return <ErrorBanner message={error} />;

    return (
        <Container maxWidth='md'>
        <h1 className='title' data-testid='title'>Welcome!</h1>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            {
            data && 
            <PhotoCard
                src={data.image}
                title='Bird'
                body={data.fact}
                actionCaption='Generate new image'
                action={refetch}
                isLoading={isLoading}
            />
            }
        </Box>
        </Container>
    );
};

export default Home;