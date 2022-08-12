import { LoadingButton } from '@mui/lab';
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import React from 'react';

import './PhotoCard.css';

type Props = {
    src: string,
    title?: string,
    body?: string,
    actionCaption?: string,
    action?: Function,
    isLoading?: boolean
};

const PhotoCard: React.FC<Props> = ({src, title, body, actionCaption, action = () => {}, isLoading}) => {
    return (
        <Card sx={{ maxWidth: 345, padding: '1rem', margin: '1rem' }}>
            <CardMedia
                component="img"
                height="300"
                image={src}
                alt="Image of a bird"
            />
            {
            title &&
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                {body}
                </Typography>
            </CardContent>
            }
            {
            actionCaption &&
            <CardActions>
            <LoadingButton
                loading={isLoading}
                size='small'
                variant='contained'
                onClick={() => action()}
                color='inherit'
            >{actionCaption}</LoadingButton>
            </CardActions>
            }
        </Card> 
    );
};

export default PhotoCard;