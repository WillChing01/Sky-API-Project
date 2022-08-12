import { LoadingButton } from '@mui/lab';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import JoyLink from '@mui/joy/Link';

type Props = {
    id: number,
    title?: string,
    body?: string,
    email?: string,
    linkCaption?: string,
    linkRoute?: string
};

const PostCard: React.FC<Props> = ({id, title, body, email, linkCaption, linkRoute}) => {
    return (
        <Card sx={{ minHeight: 150, maxHeight: 150, padding: '1rem', margin: '1rem' }}>
            {
            title &&
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                {body}
                </Typography>
                
                {
                email && 
                <Typography variant="body2" color="text.secondary">
                {email}
                </Typography>
                }

                {
                linkRoute &&
                <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <JoyLink component={RouterLink} to={linkRoute} underline='none'>{linkCaption}</JoyLink>
                </Button>
                }
            </CardContent>
            }
        </Card> 
        
    );
};

export default PostCard;