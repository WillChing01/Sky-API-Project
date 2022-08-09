import React from 'react';
import Card from '../Card/Card';
import useQuery from '../../hooks/useQuery';

import './Posts.css';
import { PostData } from '../../contracts/query';

const Posts: React.FC = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const limit = 5;
    const {isLoading, data, error} = useQuery<PostData[]>(url);

    if (error) return <>Something went wrong!</>;

    if (isLoading) return <>Loading...</>;

    return (
        <div className='community'>
            <h1 className='title' data-testid='title'>Posts</h1>
            {
            data ? data.slice(0,Math.min(limit,data.length)).map(({title, body, id}) => <Card key={String(id)} id={id} title={title} body={body} email={''} />) 
                 : 'No results found.'
            }
        </div>
    );
};

export default Posts;