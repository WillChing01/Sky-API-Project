import React from 'react';
import useQuery from '../../hooks/useQuery';
import PostCard from '../Card/PostCard';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import { PostData } from '../../contracts/query';

import './Posts.css';
import { Container } from '@mui/material';
import LoadingPostCard from '../LoadingPostCard/LoadingPostCard';

const Posts: React.FC = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const limit = 5;
    const {isLoading, data, error} = useQuery<PostData[]>(url);

    if (error) return <ErrorBanner message={error} />;

    return (
        <Container maxWidth='md'>
            <h1 className='title' data-testid='title'>Posts</h1>
            {
            !isLoading ? data.slice(0,Math.min(limit,data.length)).map(({title, body, id}) => <PostCard key={String(id)} id={id} title={title} body={body} email={''} linkCaption='Read more' linkRoute={'/posts/'+id} />) 
                       : <LoadingPostCard number={limit}/>
            }
        </Container>
    );
};

export default Posts;