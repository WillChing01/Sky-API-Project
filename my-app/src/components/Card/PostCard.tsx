import { LoadingButton } from '@mui/lab';
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    id: number,
    title?: string,
    body?: string,
    email?: string
};

const PostCard: React.FC<Props> = ({id, title, body, email}) => {
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
            </CardContent>
            }
        </Card> 
        
    );
};

export default PostCard;

/*
<div className={getClassName()}>
            <h3>{title}</h3>
            {email && <div className='italics'>{email}</div>}
            <div>{body}</div>
            {!email && <Link to={'/posts/'+id}>Read more</Link>}
        </div>
*/