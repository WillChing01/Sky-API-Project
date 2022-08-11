import { Card, Typography } from '@mui/material';
import { Skeleton } from '@mui/lab';
import React from 'react';

type LoadingPostCardProps = {
    number: number
};

const LoadingPostCard: React.FC<LoadingPostCardProps> = ({ number }) => {
    return (
        <>
            {
            [...Array(number)].map((_, i) => <Card key={i} sx={{ minHeight: 150, maxHeight: 150, padding: '1rem', margin: '1rem' }}>
            <Typography variant="h3" component="div"><Skeleton width='70%'/></Typography>
            <Typography variant="body2" color="text.secondary">
            <Skeleton />
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Skeleton />
            </Typography>
            </Card>)
            }
        </>
    );
};

export default LoadingPostCard;

